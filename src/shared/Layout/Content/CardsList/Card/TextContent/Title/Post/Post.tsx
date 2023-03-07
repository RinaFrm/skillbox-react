import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCommentsData } from '../../../../../../../../hooks/useCommentsData';
import { IRootState } from '../../../../../../../../store/reducer';
import { IPostStoreData } from '../../../../../../../../types/IPostStoreData';
import { NotFoundPage } from '../../../../../../../UI/NotFoundPage';
import { CommentFormContainer } from './CommentFormContainer';
import styles from './post.css';
import { RecursiveComment } from './RecursiveComment';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  //const search = useLocation();

  //const path = new URLSearchParams(search.search).get('id');
  const path = location.pathname.substr(7);
  const postData = useSelector<IRootState, IPostStoreData | undefined>(store => store.posts.data.filter(post => post.postId === path).pop());

  if (postData === undefined) return <NotFoundPage description={`There is not post with id = ${ path }`}/>

  const { title,
    postId,
    publishedData,
    user,
    previewPath,
    karmaValue,
    url,
    postText,
    subreddit,
    name } = postData;
  const [ commentsData ] = useCommentsData(subreddit, postId);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/');
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>{title}</h2>
      
      <div className={styles.content}>
        <p>{postText}</p>
      </div>

      <CommentFormContainer />

      <ul className={styles.commentsList}>
        {commentsData.map((comment: any) => 
          <RecursiveComment 
            author={comment.author} 
            key={comment.commentId}
            id={comment.commentId}
            depth={1}
            replies={comment.replies}
            publishedData={comment.created}
            commentText={comment.body}
          />
        )}
      </ul>
    </div>
  ), node);
}
