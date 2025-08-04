export const LoadingCard = () => (
  <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg relative overflow-hidden min-h-[88px] w-full bg-gradient-to-r from-[#1db954cc] to-[#191414cc] h-[88px]">
    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#181818] shadow-md flex-shrink-0 relative">
      <div className="w-8 h-8 border-4 border-t-transparent border-b-transparent border-r-[#1db954] border-l-[#191414] rounded-full animate-spin" />
    </div>
    <div className="flex flex-col justify-center min-w-0 flex-1">
      <div className="flex items-center gap-2 h-6">
        <span className="text-gray-400 font-bold truncate leading-[24px] h-6">
          載入中...
        </span>
      </div>
    </div>
    <div className="flex items-center justify-center w-10 h-10 ml-2">
      <img
        src="/spotify.png"
        alt="Spotify"
        className="object-contain w-8 h-8 opacity-80"
      />
    </div>
  </div>
);
