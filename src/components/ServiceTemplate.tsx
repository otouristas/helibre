import React from 'react';
import styles from './ServiceTemplate.module.css';

interface ServiceTemplateProps {
  img: string;
  title: string;
  children: React.ReactNode;
}

export default function ServiceTemplate({
  img,
  title,
  children
}: ServiceTemplateProps) {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <div className={styles.headerImageWrapper}>
        <img src={img} alt={title} className={styles.headerImage} />
        <div className={styles.headerOverlay} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
