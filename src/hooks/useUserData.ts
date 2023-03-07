import { IRootState } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { meRequestAsync } from "../store/me/meActions";
import { IUserStoreData } from "../types/IUserStoreData";
import React from "react";

export function useUserData() {
  const data = useSelector<IRootState, IUserStoreData>(state => state.me.data)
  const loading = useSelector<IRootState, boolean>(state => state.me.loading)
  const token = useSelector<IRootState, string>(state => state.token.data)
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!token || token === 'undefined') return;

    //@ts-ignore
    dispatch(meRequestAsync());
  }, [ token ])

  return { data, loading }
}