import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../reducer";
import axios from "axios";
import { IUserStoreData } from "../../types/IUserStoreData";

export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
  type: typeof ME_REQUEST;
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST
});

export const ME_REQUEST_SUCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCESS;
  data: IUserStoreData;
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserStoreData) => ({
  type: ME_REQUEST_SUCESS,
  data
});

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error
});

export const meRequestAsync = (): ThunkAction<void, IRootState, unknown, Action<string>> => 
  (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `bearer ${getState().token.data}` }
      })
      .then((resp) => {
        const userData = resp.data;
        dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img.replaceAll('amp;', '') }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      })
  }
