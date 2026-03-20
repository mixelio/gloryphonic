export type Video = {
  videoId: string,
  title: string,
}

type Props = {
  video: Video;
  isPlaying: boolean;
  isActive: boolean;
  onOpen: (videoId: string) => void;
}

export const VideoSlide = ({
  video,
  isActive,
  onOpen,
}:Props) => {
  const thumbnail = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`embla__slide flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_50%] mr-4 transition-all duration-300 ${isActive ? 'scale-100' : 'scale-95'}`}
    >
      <div onClick={() => onOpen(video.videoId)}>
        <img
          src={thumbnail}
          alt={`${video.title} video`}
          className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'saturate-100 opacity-100' : 'saturate-30 opacity-30'}`}
        />
      </div>
    </div>
  );
}