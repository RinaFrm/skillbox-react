import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
//import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
//import { commentContext } from '../../context/commentContext';
import styles from './commentform.css';

// type Props = {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }

// export function CommentForm({ value, onChange, onSubmit }: Props) {
//   return (
//     <form className={styles.form} onSubmit={onSubmit}>
//       <textarea className={styles.input} value={value} onChange={onChange}/>
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   )
// }

//модуль 12
// export function CommentForm() {

//   const [value, setValue] = useState('');
//   const [touched, setTouched] = useState(false);
//   const [valueError, setValueError] = useState('');

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault(); 
//     setTouched(true);

//     setValueError(validateValue())

//     const isFormValid = !validateValue();
//     if (!isFormValid) return;

//     alert('Форма отправлена');
//   }

//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//     setValue(event.target.value);
//   }

//   function validateValue() {
//     if(value.length <= 3) return 'Введите больше трех символов';
//     return '';
//   }

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea 
//         className={styles.input} 
//         value={value} 
//         onChange={handleChange} 
//         aria-invalid={valueError ? 'true' : undefined}/>
//       {touched && valueError && (<div>{valueError}</div>)}

//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   );
// }

export function CommentForm() {
  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    validationSchema: Yup.object({
      comment: Yup.string()
        .min(3, 'Введите больше трех символов')
        .required('Поле не может быть пустым')
    }),
    onSubmit: values => {
      alert('Ваш комментарий: ' + values.comment)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <textarea 
        className={styles.input}
        id="comment"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.comment}
      />
      {formik.touched.comment && formik.errors.comment ? (
        <div>{formik.errors.comment}</div>
      ) : null}

      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  )
}