"use client";
import React, { useState } from "react";

export default function VideoPlayer({ courseData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = courseData.videoUrl;
  const thumbnailUrl = courseData.videoThumbnail;

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : null;

  function handlePlay() {
    setIsPlaying(true);
  }

  if (isPlaying && embedUrl) {
    return (
      <div className="w-full aspect-video bg-black sticky top-0 md:relative z-2 order-1">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video bg-black sticky top-0 md:relative z-2 order-1">
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div
          className="w-20 h-20 flex items-center justify-center bg-background text-error-base hover:bg-error-base hover:text-background rounded-full transition-all cursor-pointer "
          onClick={handlePlay}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Extract YouTube video ID from URL
function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/
  );
  return match ? match[1] : null;
}
