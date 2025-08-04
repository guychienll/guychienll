import { motion } from "framer-motion";
import { SpotifyPlayingNow } from "../hooks/useSpotifyPlayingNow";
import { AlbumImage } from "./AlbumImage";
import { SongInfo } from "./SongInfo";
import { SpotifyLogo } from "./SpotifyLogo";

interface PlayingCardProps {
  playingNow: SpotifyPlayingNow;
}

export const PlayingCard = ({ playingNow }: PlayingCardProps) => (
  <motion.a
    href={playingNow.songExternalUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block !no-underline"
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      className="flex items-center gap-4 p-4 rounded-lg shadow-lg relative overflow-hidden h-[88px]"
      animate={{
        background: [
          "linear-gradient(90deg, #1db954cc 0%, #191414cc 100%)",
          "linear-gradient(90deg, #1db954cc 20%, #191414cc 80%)",
          "linear-gradient(90deg, #191414cc 0%, #1db954cc 100%)",
          "linear-gradient(90deg, #191414cc 20%, #1db954cc 80%)",
          "linear-gradient(90deg, #1db954cc 0%, #191414cc 100%)",
        ],
        boxShadow: [
          "0 4px 24px 0 #1db95444",
          "0 8px 32px 0 #1db95488",
          "0 4px 24px 0 #1db95444",
        ],
      }}
      transition={{
        background: {
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        },
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
    >
      <AlbumImage src={playingNow.albumImageUrl} alt={playingNow.songName} />
      <SongInfo
        songName={playingNow.songName}
        artistName={playingNow.artistName}
        albumName={playingNow.albumName}
      />
      <SpotifyLogo />
    </motion.div>
  </motion.a>
);
