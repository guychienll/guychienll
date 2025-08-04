import { useEffect, useState } from "react";

export function useSpotifyRefreshToken() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function refresh() {
      try {
        await fetch("https://api.guychienll.dev/spotify/refresh-token", {
          credentials: "include",
        });
        setIsReady(true);
      } catch (e) {
        console.error(e);
        setIsReady(false);
      }
    }
    refresh();
  }, []);

  return isReady;
}
