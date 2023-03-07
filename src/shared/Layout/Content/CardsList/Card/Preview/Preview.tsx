import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewPath?: string;
}

export function Preview({previewPath}: IPreviewProps) {
  return (
    <div className={styles.preview}>
      {previewPath 
      ? <img 
          className={styles.previewImg}
          src={previewPath} />
      : <img 
          className={styles.previewImg}
          src="https://cdn.dribbble.com/userupload/3629148/file/original-bf91cbf462544f438eb17ed3f7776b27.png?compress=1&resize=1200x877" />
      }
    </div>
  );
}
