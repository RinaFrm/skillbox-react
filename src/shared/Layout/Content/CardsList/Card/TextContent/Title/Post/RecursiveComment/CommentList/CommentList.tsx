import React, { useRef, useState } from 'react';
import { CommentsIcon, ShareIcon, WarningIcon } from '../../../../../../../../../../../icons';
import { EColor, Text } from '../../../../../../../../../helpers/Text';
import { ReCommentForm } from '../../ReCommentForm';
import styles from './commentlist.css';

interface ICommentListProps {
  id: string,
  author: string
}

export function CommentList({id, author}: ICommentListProps) {
  const [isReCommentOpen, setIsReCommentOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <ul className={styles.list}>
      <li className={styles.listItem} >
        <button ref={btnRef} onClick={() => setIsReCommentOpen(!isReCommentOpen)}>
          <CommentsIcon/>
          <Text size={14} mobileSize={12} color={EColor.grey99}>Ответить</Text>
        </button>

      {isReCommentOpen && (
        <ReCommentForm id={id} author={author} onClose={() => {setIsReCommentOpen(false)}}/>
      )}
      </li>
      <li className={styles.listItem} >
        <button>
          <ShareIcon/>
          <Text size={14} mobileSize={12} color={EColor.grey99}>Поделиться</Text>
        </button>
      </li>
      <li className={styles.listItem}>
        <button>
          <WarningIcon/>
          <Text size={14} mobileSize={12} color={EColor.grey99}>Пожаловаться</Text>
        </button>
      </li>
    </ul>
  );
}
