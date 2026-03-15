const HeroVideo = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        src="/video/video-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/video-1.mp4" type="video/mp4" />
      </video>
      {/* Слой затемнения */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-background" />
    </div>
  );
};

export default HeroVideo;