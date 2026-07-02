'use client';

import React from 'react';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  text: string;
  name: string;
  image?: string;
}

export default function TestimonialCard({ text, name, image }: TestimonialCardProps) {
  const avatarPath = image || '/images/avatar.png';

  return (
    <div className={styles.card}>
      <div className={styles.text}>
        {/* Quote graphic */}
        <svg className={styles.quote} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        {text}
      </div>

      {/* 5-Star Ratings */}
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Customer profile */}
      <div className={styles.person}>
        <div className={styles.imgContainer}>
          <img src={avatarPath} alt={name} className={styles.avatar} />
        </div>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
}
