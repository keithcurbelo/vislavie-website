import React from "react";

const PromoVideo: React.FC = () => {
  const baseURL = process.env.CDN_URL || "https://media.vislaviemiami.com";
  return (
    <video id="promo-video" loop autoPlay muted>
      <source src={`${baseURL}/videos/aerial-vid.mov`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default PromoVideo;
