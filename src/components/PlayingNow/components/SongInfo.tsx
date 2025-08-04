import { motion } from "framer-motion";
import { MusicBars } from "./MusicBars";

interface SongInfoProps {
  songName: string;
  artistName: string;
  albumName: string;
}

export const SongInfo = ({
  songName,
  artistName,
  albumName,
}: SongInfoProps) => (
  <div className="flex flex-col justify-center min-w-0 max-w-[180px]">
    <div className="flex items-center gap-2 h-6">
      <MusicBars />
      <span className="text-gray-100 font-bold truncate leading-[24px] h-6 line-clamp-1 max-w-full">
        {songName}
      </span>
    </div>
    <motion.span className="text-gray-300 text-sm truncate leading-[20px] h-5 line-clamp-1 max-w-full">
      {artistName}
    </motion.span>
    <motion.span className="text-gray-400 text-xs truncate leading-[16px] h-4 line-clamp-1 max-w-full">
      {albumName}
    </motion.span>
  </div>
);
