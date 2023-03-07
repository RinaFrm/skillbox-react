import axios from 'axios';
import React from 'react';

interface ICommentData {
  body: string,
  created: number,
  commentId: string,
  karma: number,
  author: string,
  replies?: {kind: string, data: {children: any}}
}

interface ICommentsData {
  kind: string,
  data: ICommentData;
}

export function useCommentsData(subreddit: string, postId: string ) {
  const [commentsData, setCommentsData] = React.useState<ICommentsData[]>([]);

  React.useEffect(() => {
    axios.get(`https://api.reddit.com/r/${ subreddit }/comments/${ postId }`)
    .then((resp) => {

      const commentsData = resp.data[1].data.children.map((item: ICommentsData) => {
        const { body, created, commentId, karma, replies, author } = item.data;
        return {
          body: body,
          created: created,
          commentId: commentId,
          karma: karma,
          replies: (replies) ? replies.data.children : undefined,
          author: author
        };
      })
      // const result: ICommentsData = { comments: [] };
      // for (let comments of response.data[1].data.children) {
      //   result.comments.push({
      //     commentId: comments.data.id,
      //     author: comments.data.author,
      //     created: comments.data.created,
      //     karma: comments.data.score,
      //     body: comments.data.body,
      //     replies: comments.data.replies
      //   })
    //console.log(comments.data.replies.data.children)
      //}
      setCommentsData(commentsData);
    })
    .catch(console.log)
  }, [])
    
  return [ commentsData ];
}

  // const token = useSelector<RootState, string>(state => state.token)
  // const [loading, setLoading] = useState(false);
  // const [errorLoading, setErrorLoading] = useState('');

  // const loadComments = async () => {
  //   setLoading(true);
  //   setErrorLoading('');

  //   try {
  //     const resp = await axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`, {})
  //     const commentsData = resp.data[1].data.children.map((item: IResponceItem) => {
  //       const { body, created, id, replies, author } = item.data;
  //       return {
  //         commentText: body,
  //         publishedData: created,
  //         id: id,
  //         replies: (replies) ? replies.data.children : undefined,
  //         author: author
  //       };
  //     });
  //     setComments(commentsData);
  //   } catch (error) {
  //     setErrorLoading(String(error));
  //   }
  //   setLoading(false);
  // } 
  // useEffect(() => {
  //   loadComments();
  // }, [])