'use client';

import React from 'react';
import styles from './VideoPlayer.module.css';

interface YouTubePlayerProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
}

export default function YouTubePlayer({
  videoId,
  width = 640,
  height = 360,
  autoplay = false,
  controls = true
}: YouTubePlayerProps) {
  const aspectRatio = (height / width) * 100;

  const params = new URLSearchParams();
  params.append('autoplay', autoplay ? '1' : '0');
  params.append('controls', controls ? '1' : '0');
  params.append('mute', autoplay ? '1' : '0'); // Chrome blocks autoplay without mute
  params.append('loop', '0');
  params.append('rel', '0');

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className={styles.videoWrapper} style={{ paddingBottom: `${aspectRatio}%` }}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      />
    </div>
  );
}
