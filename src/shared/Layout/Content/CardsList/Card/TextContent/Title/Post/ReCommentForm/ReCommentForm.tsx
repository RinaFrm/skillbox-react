import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './recommentform.css';

interface IReCommentProps {
  id: string;
  author: string;
  onClose?: () => void;
}
//контролируемая
export function ReCommentForm({id, author, onClose}: IReCommentProps) {
  const node = document.getElementById(`${id}`);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !formRef.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  if(!node) return null;

  const [ comment, setComment ] = useState(`${author}, `);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert('Ваш комментарий: ' + comment);
    setComment(`${author}, `)
  }

  return ReactDOM.createPortal ((
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <input value={comment} ref={input => input && input.focus()} className={styles.input} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  ), node);
}

//неконтролируемая
// export function ReCommentForm({id, author}: IReCommentProps) {
//   const ref = useRef<HTMLInputElement>(null);
//   const node = document.getElementById(`${id}`);

//   if(!node) return null;

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     alert('Ваш комментарий: ' + ref.current?.value)
//   }

//   return ReactDOM.createPortal ((
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <input value={`${author}, `} autoFocus={true} className={styles.input} ref={ref}/>
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   ), node);
// }
