import React from "react";

const PromoVideo: React.FC = () => {
  return (
    <video id="promo-video" loop autoPlay muted>
      <source
        src="https://media.vislaviemiami.com/videos/aerial-vid.mov"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default PromoVideo;
