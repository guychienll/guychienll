import { LoadingCard, NotPlayingCard, PlayingCard } from "./components";
import { useSpotifyPlayingNow, useSpotifyRefreshToken } from "./hooks";

function PlayingNow() {
  const isRefreshTokenReady = useSpotifyRefreshToken();
  const { playingNow, isLoading } = useSpotifyPlayingNow(isRefreshTokenReady);

  if (isLoading) {
    return <LoadingCard />;
  }

  if (!playingNow) {
    return <NotPlayingCard />;
  }

  return <PlayingCard playingNow={playingNow} />;
}

export default PlayingNow;
