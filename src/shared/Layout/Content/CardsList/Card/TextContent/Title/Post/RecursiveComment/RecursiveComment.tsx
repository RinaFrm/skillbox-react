import React from 'react';
import { IconAnon } from '../../../../../../../../../../icons';
import { CommentList } from './CommentList';
import styles from './recursiveComment.css';
import { hoursAgo } from '../../../../../../../../../../react/js/hoursAgo';

interface ICommentProps {
  commentText: string,
  publishedData: number,
  replies: any,
  author: string,
  depth: number,
  id: string,
  className?: string
}

interface IResponceData {
  body: string,
  created: number,
  id: string,
  replies?: {kind: string, data: {children: any}},
  author: string
}

interface IResponceItem {
  kind: string,
  data: IResponceData;
}

export const RecursiveComment = ({ id, commentText, publishedData, author, replies, depth = 1, className = 'commentList' }: ICommentProps) => {
  const style = { paddingLeft: 20, marginTop: 34}

  return (
    <li className={styles.parent} style={style} id={id}>
      <div className={styles.commentInfo}>
        <div className={styles.user}>
          <IconAnon width={20} height={20}/>
          <span className={styles.userName}>{author}</span>
          <span className={styles.createdAt}>
            {hoursAgo(publishedData)}
          </span>
        </div>
        <span className={styles.league}></span>
      </div>
      <div className={styles.text}>
        {commentText}
      </div>
      <CommentList id={id} author={author} />

      {Array.isArray(replies) ? (
        <ul className={styles.child}>
          {replies.map((item: IResponceItem) => (
            <RecursiveComment key={item.data.id} id={item.data.id} commentText={item.data.body} depth={depth + 1} publishedData={item.data.created} replies={item.data.replies ? item.data.replies?.data.children : undefined} author={item.data.author} className={className}/>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

