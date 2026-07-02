import React from 'react';
import styles from './ServiceTemplateLandscape.module.css';

interface ServiceTemplateLandscapeProps {
  img: string;
  alt?: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export default function ServiceTemplateLandscape({
  img,
  alt = "Service Image",
  description,
  children
}: ServiceTemplateLandscapeProps) {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img src={img} alt={alt} className={styles.image} />
        </div>
        <div className={styles.content}>
          {description}
        </div>
      </div>
      {children && (
        <div className={styles.extraContent}>
          {children}
        </div>
      )}
    </div>
  );
}
