import { LoadingCard, NotPlayingCard, PlayingCard } from "./components";
import { useSpotifyPlayingNow, useSpotifyRefreshToken } from "./hooks";

function PlayingNow(props) {
  const { playingNow, isLoading } = useSpotifyPlayingNow();

  if (isLoading) {
    return <LoadingCard />;
  }

  if (!playingNow) {
    return <NotPlayingCard />;
  }

  return <PlayingCard playingNow={playingNow} />;
}

export default PlayingNow;
