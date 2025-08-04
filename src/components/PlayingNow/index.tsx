import { useSpotifyRefreshToken, useSpotifyPlayingNow } from "./hooks";
import { PlayingCard, NotPlayingCard } from "./components";

function PlayingNow() {
  const isRefreshTokenReady = useSpotifyRefreshToken();
  const playingNow = useSpotifyPlayingNow(isRefreshTokenReady);

  if (playingNow) {
    return <PlayingCard playingNow={playingNow} />;
  }

  return <NotPlayingCard />;
}

export default PlayingNow;
