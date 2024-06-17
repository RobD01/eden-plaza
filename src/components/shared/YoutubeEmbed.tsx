const YoutubeEmbed = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/O7J4w9DKblQ?si=BFJp45p1DQxlOPSG"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
