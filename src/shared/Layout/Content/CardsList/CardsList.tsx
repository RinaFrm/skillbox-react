import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../../../../store/posts/postsActions';
import { IPostsState } from '../../../../store/posts/postsReducer';
import { IRootState } from '../../../../store/reducer';
import { Card } from './Card';
import styles from './cardsList.css';

export function CardsList() {
  const token = useSelector<IRootState, string>(state => state.token.data)
  const { data, loading, error, after, fetchCounter } = useSelector<IRootState, IPostsState>((store) => store.posts);
  const dispatch = useDispatch(); 

  const bottomOfList = useRef<HTMLDivElement>(null);
      
  useEffect(() => {
    if (!token || token == 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          (fetchCounter % 3 !== 0 || fetchCounter === 0)
        ) {
          // @ts-ignore
          dispatch(fetchPostsAsync(token, after));
        }
      },
      {
        rootMargin: "20px",
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [token, bottomOfList.current, after]);

  return (
    <ul className={styles.cardsList}>
      {data.length === 0 && !loading && !error && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      {data.map(post => (
        <Card
        postId={post.postId}
        name={post.name}
        user={post.user}
        title={post.title}
        karmaValue={post.karmaValue}
        url={post.url}
        publishedData={post.publishedData}
        subreddit={post.subreddit}
        key={post.postId}
        previewPath={post.previewPath}
        postText={post.postText}
        />
      ))}  

      <div ref={bottomOfList} />

      {loading && (
        <div style={{ textAlign: 'center'}}>Загрузка...</div>
      )}

      {fetchCounter % 3 === 0 && fetchCounter !==0 && !loading &&
        (<button 
          onClick={() => {
            //@ts-ignore
            dispatch(fetchPostsAsync(token, after));
          }} 
          style={{ display: 'block', border: '1px solid black', borderRadius: '10px', cursor: 'pointer', padding: '10px', margin: '0 auto'}}>
        Загрузить ещё
      </button>)}

      {error && (
        <div role='alert' style={{ textAlign: 'center'}}>{error}</div>
      )}
    </ul>
  );
}

// try {
//   const { data: { data: { after, children}} } = await axios.get('https://oauth.reddit.com/r/rising', {
//     headers: { Authorization: `bearer ${token}` },
//     params: {
//       limit: 7,
//       after: nextAfter,           
//     }
//   });
//   const postsData = children.map((item: IResponseItem) => {
//     const { author, subreddit, selftext, score, created, thumbnail, title, url, id, sr_detail } = item.data;
//     return {
//       title: title,
//       publishedData: created,
//       user: { logoPath: sr_detail?.icon_img, name: author },
//       previewPath:
//         thumbnail && /\.jpg|png|jpeg$/.test(thumbnail)
//           ? thumbnail
//           : undefined,
//       karmaValue: score,
//       url: url,
//       id: id,
//       postText: selftext,
//       subreddit: subreddit
//     };
//   });

//   setNextAfter(after);
//   setPosts(prevChildren => prevChildren.concat(...postsData));
// } catch (error) {
//   setErrorLoading(String(error));
// }

// setLoading(false);
// })()
// 