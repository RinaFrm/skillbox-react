import { Reducer } from "react";
import { IUserStoreData } from "../../types/IUserStoreData";
import { 
  MeRequestAction, 
  MeRequestErrorAction, 
  MeRequestSuccessAction, 
  ME_REQUEST, 
  ME_REQUEST_ERROR, 
  ME_REQUEST_SUCESS 
} from "./meActions";

export interface IMeState {
  loading: boolean;
  error: string;
  data: IUserStoreData;
}

export type MeActions = MeRequestAction
  | MeRequestErrorAction
  | MeRequestSuccessAction;

export const meReducer: Reducer<IMeState, MeActions> = (state, action) => {
  switch(action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case ME_REQUEST_SUCESS:  
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default:
      return state;
  }
}