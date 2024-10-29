// components/ResponsiveVideo.tsx
import React, { useState } from "react";

interface ResponsiveVideoProps {
  videoId: string;
}

const ResponsiveVideo = ({ videoId }: ResponsiveVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userConsent, setUserConsent] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleLoadVideo = () => {
    if (!userConsent) {
      setUserConsent(true);
    }
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return (
      <div className="relative w-full pt-[56.25%]">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer overflow-hidden"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors mb-4"
              onClick={handleLoadVideo}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Video
            </button>
            <p className="text-white text-sm text-center">
              By playing this video, you agree to YouTube&apos;s cookie policy.
              Click to accept and play.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (userConsent) {
    return (
      <div className="relative w-full pt-[56.25%]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    );
  }

  return null;
};

export default ResponsiveVideo;
