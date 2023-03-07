import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../../../../../../../store/comment/commentActions';
import { IRootState } from '../../../../../../../../../store/reducer';

import { CommentForm } from '../CommentForm';

export function CommentFormContainer() {
  const value = useSelector<IRootState, string>(state => state.comment.text);
  //достали данные из стора, положили в значение
  
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
      //({ type: 'UPDATE_COMMENT', text: event.target.value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <CommentForm 
      // value={value}
      // onChange={handleChange}
      // onSubmit={handleSubmit}
    />
  );
}