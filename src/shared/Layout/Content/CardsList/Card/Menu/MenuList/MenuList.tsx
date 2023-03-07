import React from 'react';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../../../../../icons';
import styles from './menulist.css';
import { EColor, Text } from '../../../../../../helpers/Text';

interface IMenuListProps {
  postId: string;
}

export function MenuList({}: IMenuListProps) {
  return (
    <ul >
      <li className={styles.listItem} >
        <CommentsIcon/>
        <Text size={14} mobileSize={12} color={EColor.grey99}>Комментарии</Text>
      </li>
      <li className={styles.listItem} >
        <ShareIcon/>
        <Text size={14} mobileSize={12} color={EColor.grey99}>Поделиться</Text>
      </li>
      <li className={styles.listItem} >
        <BlockIcon/>
        <Text size={14} mobileSize={12} color={EColor.grey99}>Скрыть</Text>
      </li>
      <li className={styles.listItem} >
        <SaveIcon/>
        <Text size={14} mobileSize={12} color={EColor.grey99}>Сохранить</Text>
      </li>
      <li className={styles.listItem}>
        <WarningIcon/>
        <Text size={14} mobileSize={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
