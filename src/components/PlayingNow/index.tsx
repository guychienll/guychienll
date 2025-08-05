import { LoadingCard, NotPlayingCard, PlayingCard } from "./components";
import { useSpotifyPlayingNow, useSpotifyRefreshToken } from "./hooks";

function PlayingNow(props: { isSpotifyRefreshTokenReady: boolean }) {
  const { isSpotifyRefreshTokenReady } = props;

  const { playingNow, isLoading } = useSpotifyPlayingNow(
    isSpotifyRefreshTokenReady
  );

  if (isLoading) {
    return <LoadingCard />;
  }

  if (!playingNow) {
    return <NotPlayingCard />;
  }

  return <PlayingCard playingNow={playingNow} />;
}

export default PlayingNow;
