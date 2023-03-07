import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  title: string;
  id: string;
}

export function Title({title, id}: ITitleProps) {
  //const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <Link to={'/posts/' + id} className={styles.postLink} >
        {title}
      </Link>
    </h2>

    // {isModalOpened && (
    //   <Post subreddit={subreddit} id={id} title={title} postText={postText} onClose={() => { setIsModalOpened(false); }}/>
    // )}
  );
}
