export const NotPlayingCard = () => (
  <div className="flex items-center gap-4 bg-gradient-to-r from-[#101010] to-[#202020] p-4 rounded-lg min-h-[88px] shadow-lg relative overflow-hidden w-full">
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#181818] shadow-md flex-shrink-0 relative">
      <img
        src="/spotify.png"
        alt="Spotify"
        className="object-contain w-10 h-10 opacity-80"
        style={{ width: 40, height: 40 }}
      />
    </div>
    <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs">●</span>
        <span className="text-gray-400 font-bold truncate">
          目前沒有正在播放的音樂
        </span>
      </div>
    </div>
  </div>
);
