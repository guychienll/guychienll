import { useCallback, useEffect, useState } from "react";

export type SpotifyPlayingNow = {
  isPlaying: boolean;
  songName: string;
  songExternalUrl: string;
  artistName: string;
  albumName: string;
  albumImageUrl: string;
};

const SPOTIFY_API_URL = "https://api.guychienll.dev/spotify/currently-playing";

function parseSpotifyData(data: any): SpotifyPlayingNow | null {
  if (data?.is_playing && data?.item) {
    return {
      isPlaying: data.is_playing,
      songName: data.item.name,
      songExternalUrl: data.item.external_urls.spotify,
      artistName: data.item.artists[0].name,
      albumName: data.item.album.name,
      albumImageUrl: data.item.album.images[0].url,
    };
  }
  return null;
}

async function fetchSpotifyPlayingNow(): Promise<SpotifyPlayingNow | null> {
  try {
    const response = await fetch(SPOTIFY_API_URL, { credentials: "include" });
    const data = await response.json();
    return parseSpotifyData(data);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function useSpotifyPlayingNow(isRefreshTokenReady: boolean) {
  const [playingNow, setPlayingNow] = useState<SpotifyPlayingNow | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const updatePlayingNow = useCallback(
    async (showLoading = false) => {
      if (!isRefreshTokenReady) return;
      if (showLoading) {
        setIsLoading(true);
      }
      const result = await fetchSpotifyPlayingNow();
      setPlayingNow(result);
      if (showLoading) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    },
    [isRefreshTokenReady]
  );

  useEffect(() => {
    updatePlayingNow(true);

    if (!isRefreshTokenReady) return;

    const interval = setInterval(() => {
      updatePlayingNow(false);
    }, 60_000);

    return () => clearInterval(interval);
  }, [updatePlayingNow, isRefreshTokenReady]);

  return {
    isLoading: isLoading || !isRefreshTokenReady,
    playingNow,
  };
}
