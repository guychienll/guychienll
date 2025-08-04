import { useCallback, useEffect, useState } from "react";

export type SpotifyPlayingNow = {
  isPlaying: boolean;
  songName: string;
  songExternalUrl: string;
  artistName: string;
  albumName: string;
  albumImageUrl: string;
};

export function useSpotifyPlayingNow(isRefreshTokenReady: boolean) {
  const [playingNow, setPlayingNow] = useState<SpotifyPlayingNow | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlayingNow = useCallback(async () => {
    if (!isRefreshTokenReady) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.guychienll.dev/spotify/currently-playing",
        { credentials: "include" }
      );
      const data = await response.json();
      if (data.is_playing) {
        setPlayingNow({
          isPlaying: data.is_playing,
          songName: data.item.name,
          songExternalUrl: data.item.external_urls.spotify,
          artistName: data.item.artists[0].name,
          albumName: data.item.album.name,
          albumImageUrl: data.item.album.images[0].url,
        });
      } else {
        setPlayingNow(null);
      }
    } catch (e) {
      console.error(e);
      setPlayingNow(null);
    } finally {
      setIsLoading(false);
    }
  }, [isRefreshTokenReady]);

  useEffect(() => {
    fetchPlayingNow();
  }, [fetchPlayingNow]);

  if (isLoading || !isRefreshTokenReady) return null;
  return playingNow;
}
