import { Reducer } from "redux";
import { UPDATE_COMMENT } from "./comment/commentActions";
import { CommentActions, commentReducer, ICommentState } from "./comment/commentReducer";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCESS } from "./me/meActions";
import { IMeState, MeActions, meReducer } from "./me/meReducer";
import { FETCH_POSTS, FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS } from "./posts/postsActions";
import { IPostsState, PostsActions, postsReducer } from "./posts/postsReducer";
import { SAVE_TOKEN, SAVE_TOKEN_ERROR, SAVE_TOKEN_SUCCESS } from "./token/tokenActions";
import { TokenActions, tokenReducer, TokenState } from "./token/tokenReducer";

export interface IRootState {
  posts: IPostsState;
  comment: ICommentState;
  token: TokenState;
  me: IMeState;
}
const initialState: IRootState = {
  comment: {
    text: ''
  },
  token: {
    loading: false,
    error: '',
    data: ''
  },
  me: {
    loading: false,
    error: '',
    data: {
      name: '',
      iconImg: ''
    }
  },
  posts: {
    loading: false,
    error: '',
    data: [],
    after: '',
    fetchCounter: 0
  }
}

type MyAction = 
  TokenActions
  | MeActions
  | PostsActions
  | CommentActions;

export const rootReducer: Reducer<IRootState, MyAction> = 
  (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TOKEN:
      case SAVE_TOKEN_ERROR:
      case SAVE_TOKEN_SUCCESS:
        return {
          ...state,
          token: tokenReducer(state.token, action)
        }

      case ME_REQUEST:
      case ME_REQUEST_ERROR:
      case ME_REQUEST_SUCESS:
        return {
          ...state,
          me: meReducer(state.me, action),
        }

      case FETCH_POSTS:
      case FETCH_POSTS_ERROR:
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: postsReducer(state.posts, action)
        } 
      
      case UPDATE_COMMENT:
        return {
          ...state,
          comment: commentReducer(state.comment, action)
        }
        
      default: 
        return state;
    }
}

