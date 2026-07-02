'use client';

import React from 'react';
import styles from './VideoPlayer.module.css';

interface VimeoPlayerProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  isHero?: boolean;
}

export default function VimeoPlayer({
  videoId,
  width = 640,
  height = 360,
  autoplay = true,
  controls = false,
  isHero = false
}: VimeoPlayerProps) {
  const aspectRatio = (height / width) * 100;
  
  // Set up Vimeo URL params
  const params = new URLSearchParams();
  params.append('autoplay', autoplay ? '1' : '0');
  params.append('muted', '1');
  params.append('loop', '1');
  params.append('controls', controls ? '1' : '0');
  params.append('background', isHero ? '1' : '0');
  params.append('playsinline', '1');
  
  const embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;

  return (
    <div 
      className={isHero ? styles.vimeoHeroWrapper : styles.videoWrapper} 
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video Player"
      />
    </div>
  );
}
