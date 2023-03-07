import React from 'react';
import { IconAnon } from '../../../../../../../icons';
import styles from './textcontent.css';
import { Title } from './Title';
import { hoursAgo } from '../../../../../../../react/js/hoursAgo';

interface ITextContentProps {
  title: string;
  user: { logoPath?: string; name: string };
  publishedData: number;
  postId: string;
}

export function TextContent({ postId, title, user, publishedData}: ITextContentProps) {

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          {user.logoPath
            ? <img 
              src={user.logoPath}
              className={styles.avatar}
              alt="avatar" />
            : <IconAnon width={20} height={20}/>
          }
          <a href='#user-url' className={styles.username}>{user.name}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано {hoursAgo(publishedData)}</span>
        </span>
      </div>
      <Title id={postId} title={title}/>
    </div>
  )
}
