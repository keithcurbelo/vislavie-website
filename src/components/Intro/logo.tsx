import React from "react";
import { Image } from "react-bootstrap";

const PromoImage: React.FC = () => {
  const baseURL = process.env.CDN_URL || "https://media.vislaviemiami.com";
  return (
    <Image
      src={`${baseURL}/images/vislaviemiami_logo_black_bg.jpg`}
      className="w-100"
    />
  );
};

export default PromoImage;
