"use client";

import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { Skeleton } from "@/components/ui/skeleton";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleReady: YouTubeProps['onReady'] = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {isLoading && (
          <Skeleton className="absolute top-0 left-0 w-full h-full" />
        )}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
