import React from "react";
import Image from "next/image";

const LogoBanner = () => (
  <div className="logo-banner mb-4 flex justify-center">
    <div style={{ position: "relative", width: "1200px", height: "150px" }}>
      <Image
        src="https://www.rdworldonline.com/wp-content/uploads/2024/09/RD_world_top_labs-scaled.gif"
        alt="RD World Top Labs"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  </div>
);

const AdBanner = () => (
  <div className="ad-banner mb-4 flex justify-center">
    <div style={{ position: "relative", width: "800px", height: "100px" }}>
      <Image
        src="/banner_ad.gif"
        alt="Banner Ad"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>
);

const Banners = () => (
  <div className="banners-container mx-auto">
    <LogoBanner />
    <AdBanner />
  </div>
);

export default Banners;
