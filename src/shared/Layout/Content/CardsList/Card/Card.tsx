import React from 'react';
import { IPostStoreData } from '../../../../../types/IPostStoreData';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card(props: IPostStoreData) {
  const {
    title,
    postId,
    publishedData,
    user,
    previewPath,
    karmaValue,
  } = props;

  return (
    <li className={styles.card}>
      <TextContent postId={ postId } user ={ user } publishedData={ publishedData } title={ title }/>
      <Preview previewPath={previewPath}/>
      <Menu />
      <Controls karmaValue={karmaValue}/>
    </li>
  );
}
