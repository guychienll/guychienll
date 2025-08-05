import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type TrackItem = {
  // name
  name: string;

  // external_url
  url: string;

  // should be concat all artists name with /
  artistsName: string;

  // album.images[0].url
  albumImageUrl: string;
};

const TRACK_COUNT = 6;

function TopTracks(props: { isSpotifyRefreshTokenReady: boolean }) {
  const { isSpotifyRefreshTokenReady } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<TrackItem[]>([]);

  const fetchTopTracks = useCallback(async () => {
    try {
      if (!isSpotifyRefreshTokenReady) return;

      setIsLoading(true);
      const response = await fetch(
        "https://api.guychienll.dev/spotify/top-tracks",
        { credentials: "include" }
      );
      const data = await response.json();
      setTopTracks(
        data.items.map((item: any) => ({
          name: item.name,
          url: item.external_urls.spotify,
          artistsName: item.artists
            .map((artist: any) => artist.name)
            .join(" / "),
          albumImageUrl: item.album.images[0].url,
        }))
      );
    } catch (error) {
      console.error(error);
      setTopTracks([]);
    } finally {
      setIsLoading(false);
    }
  }, [isSpotifyRefreshTokenReady]);

  useEffect(() => {
    fetchTopTracks();
  }, [fetchTopTracks]);

  if (isLoading || (!isLoading && topTracks.length === 0)) {
    return (
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-3">
          {Array.from({ length: TRACK_COUNT }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-xl shadow-lg w-full flex flex-row items-center p-3 animate-pulse"
              style={{ minHeight: "80px" }}
            >
              <div className="relative w-16 h-16 flex-shrink-0 mr-4">
                <div className="w-16 h-16 rounded-lg bg-gray-300/30" />
                <span className="absolute -top-2 -right-2 bg-blue-300 text-white text-xs font-bold px-2 py-1 rounded-full shadow opacity-60">
                  #{idx + 1}
                </span>
              </div>
              <div className="flex flex-col justify-center w-0 flex-1 min-w-0">
                <div className="h-4 bg-gray-300/30 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-300/20 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {topTracks.slice(0, TRACK_COUNT).map((track, idx) => (
        <motion.div
          key={track.url}
          className="bg-white/10 rounded-xl shadow-lg w-full flex flex-row items-center p-3 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <div className="relative w-16 h-16 flex-shrink-0 mr-4">
            <motion.img
              src={track.albumImageUrl}
              alt={track.name}
              className="w-16 h-16 rounded-lg object-cover shadow-md"
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              #{idx + 1}
            </span>
          </div>
          <div className="flex flex-col justify-center w-0 flex-1 min-w-0">
            <a
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-base text-blue-500 hover:underline text-left truncate"
              title={track.name}
            >
              {track.name}
            </a>
            {track.artistsName && (
              <div
                className="text-xs text-gray-300 mt-1 text-left truncate"
                title={track.artistsName}
              >
                {track.artistsName}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default TopTracks;
