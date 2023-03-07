import React from 'react';
import styles from './notfoundpage.css';
import { Text } from '../../helpers/Text';

interface INotFoundPageProps {
  description: string;
}

export function NotFoundPage({ description }: INotFoundPageProps) {
  return (
    <div className={styles.errorPage}>
      <Text As={ 'h2' } size={ 20 } className={ styles.header }>Страница не найдена</Text>
      <Text As={ 'p' } size={ 14 } className={ styles.description }>{ description }</Text>
    </div>
  );
}
