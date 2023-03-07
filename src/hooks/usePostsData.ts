import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../store/posts/postsActions';
import { IPostsState } from '../store/posts/postsReducer';
import { IRootState } from '../store/reducer';

export function usePostsData() {
  const token = useSelector<IRootState, string>(store => store.token.data);
  const { data, loading, error } = useSelector<IRootState, IPostsState>(store => store.posts);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (!token || token === 'unefined') return;

    //@ts-ignore
    dispatch(fetchPostsAsync(token));
  }, [ token ])

  return { data, loading, error }
}

// interface IPostsData {
//   title: string;
//   id: string;
//   publishedData: number;
//   user: { logoPath?: string; name: string };
//   previewPath?: string;
//   karmaValue: number;
//   url: string;
//   postText: string;
//   subreddit: string;
// }

// interface IResponseData {
//   id: string;
//   author: string;
//   score: number;
//   created: number;
//   thumbnail?: string;
//   title: string;
//   url: string;
//   sr_detail?: {icon_img?: string};
//   selftext: string;
//   subreddit: string;
// }

// interface IResponseItem {
//   kind: string;
//   data: IResponseData;
// }

// export function usePostsData() {
//   const [post, setPost] = useState<IPostsData[]>([]);
//   const token = useSelector<RootState, string>(state => state.token)
//   const [loading, setLoading] = useState(false);
//   const [errorLoading, setErrorLoading] = useState('');
//   const [nextAfter, setNextAfter] = useState('');
//   const search = useLocation();
//   const postId = new URLSearchParams(search.search).get('id');

//   const bottomOfList = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!token || token == 'undefined') return;
     
//     async function load() {
//       setLoading(true);
//       setErrorLoading('');

//       try {
//         const { data: { data: { after, children}} } = await axios.get('https://oauth.reddit.com/r/rising', {
//           headers: { Authorization: `bearer ${token}` },
//           params: {
//             limit: 3,
//             after: nextAfter,           
//           }
//         });

//         const postsData = children.map((item: IResponseItem) => {
//           const { author, subreddit, selftext, score, created, thumbnail, title, url, id, sr_detail } = item.data;
//           return {
//             title: title,
//             publishedData: created,
//             user: { logoPath: sr_detail?.icon_img, name: author },
//             previewPath:
//               thumbnail && /\.jpg|png|jpeg$/.test(thumbnail)
//                 ? thumbnail
//                 : undefined,
//             karmaValue: score,
//             url: url,
//             id: id,
//             postText: selftext,
//             subreddit: subreddit
//           };
//         });

//         setNextAfter(after);
//         setPosts(prevChildren => prevChildren.concat(...postsData));
//       } catch (error) {
//         setErrorLoading(String(error));
//       }

//       setLoading(false);
//     }

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         load();
//       }
//     }, {
//       rootMargin: '10px',
//     });

//     if (bottomOfList.current) {
//       observer.observe(bottomOfList.current)
//     }

//     return () => {
//       if (bottomOfList.current) {
//         observer.unobserve(bottomOfList.current)
//       }
//     }
//   }, [bottomOfList.current, nextAfter]);
  
//   return { loading, errorLoading, bottomOfList};
// }