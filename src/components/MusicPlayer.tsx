'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './MusicPlayer.module.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element only on client-side
    const audio = new Audio('/bg-music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Show tooltip for 6 seconds on initial load, then fade out
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.error("Audio playback failed: ", err);
        });
    }
  };

  return (
    <div className={styles.container}>
      {/* Informative Tooltip */}
      <div className={`${styles.tooltip} ${showTooltip ? styles.visible : ''}`}>
        🎵 Play Ambient Music?
      </div>

      {/* Floating Toggle Button */}
      <button 
        className={`${styles.button} ${isPlaying ? styles.playing : ''}`} 
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? (
          <div className={`${styles.waves} ${styles.animating}`}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
