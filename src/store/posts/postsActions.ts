import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IPostStoreData } from "../../types/IPostStoreData";
import { IRootState } from "../reducer";

export const FETCH_POSTS = 'FETCH_POSTS';
export type FetchPosts = {
  type: typeof FETCH_POSTS
}
export const fetchPosts: ActionCreator<FetchPosts> = () => ({
  type: FETCH_POSTS,
  loading: true,
  error: ''
})

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS,
  data: IPostStoreData[],
  after: string,
  fetchCounter: number
}
type FetchPostsSuccessData = {
  data: IPostStoreData[],
  after: string,
  fetchCounter: number
}
export const fetchPostsSuccess: ActionCreator<FetchPostsSuccess> = (data: FetchPostsSuccessData) => ({
  type: FETCH_POSTS_SUCCESS,
  data: data.data,
  after: data.after,
  fetchCounter: data.fetchCounter
})

export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export type FetchPostsError = {
  type: typeof FETCH_POSTS_ERROR,
  error: string
}

export const fetchPostsError: ActionCreator<FetchPostsError> = (error: string) => ({
  type: FETCH_POSTS_ERROR,
  error: error
})

export const fetchPostsAsync = 
  (token: string, after: string): ThunkAction<void, IRootState, unknown, Action<string>> => 
    (dispatch, getState) => {
      dispatch(fetchPosts());

      async function loadPosts() {
        try {
          const resp: any = await axios.get('https://oauth.reddit.com/r/rising', {
            headers: { Authorization: `bearer ${ token }` },
            params: {
              //sr_detail: true,
              after: after,
              limit: 5
            }
          })
          const posts: IPostStoreData[] = resp.data.data.children.map((post: any) => {
            return {
              title: post.data.title,
              postId: post.data.id,
              publishedData: post.data.created,
              user: { logoPath: post.data.sr_detail?.icon_img, name: post.data.author },
              previewPath:
                post.data.thumbnail && /\.jpg|png|jpeg$/.test(post.data.thumbnail)
                ? post.data.thumbnail
                : undefined,
              karmaValue: post.data.score,
              url: post.data.url,
              postText: post.data.selfText,
              subreddit: post.data.subreddit,
              name: post.data.name,
              // author: post.data.author,
              // karma: post.data.score,
              // imgUrl: post.data.url_overridden_by_dest,
              // subreddit: post.data.subreddit,
              // commentsQty: post.data.num_comments,
              // postText: post.data.selfText,
            }
          });
          dispatch(fetchPostsSuccess({
            data: posts,
            after: posts[posts.length - 1].name,
            fetchCounter: getState().posts.fetchCounter + 1
          }));
        } catch (error) {
          dispatch(fetchPostsError(String(error)));
        }
      }

      loadPosts();
    }