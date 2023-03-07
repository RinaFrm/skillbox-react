import * as React from 'react';
import { getValue } from './pickFromSyntheticEvent';
import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';

function InputExample({ value, onChange}: any) {
  return (
    <input 
      value={value}
      onChange={preventDefault(stopPropagation(getValue(onChange)))}
    />
  )
}

//тоже самое только с compose, функции записываются справа налево

function InputExample1({ value, onChange}: any) {
  return (
    <input 
      value={value}
      onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      //тоже через pipe
      // onChange={pipe(preventDefault, stopPropagation, getValue, onChange))}
    />
  )
}

// функция compose - это функция, которая принимает другие функции и исполняет их по очереди справа налево
function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
  fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue); 
}

//функция pipe - тоже самое, что и compose, только слева направо
function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

//забирает из объекта свойства
function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

//пример использования
const comments = [{ id: 22, text: 'text one'}, { id: 44, text: 'text two'}];
const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id))
const filterWithId = createFilterBy('id');
const filterByValue = createFilterBy('value');

//const filteredComments = comments.filter(({ id }) => id != 22);
const filteredComments = comments.filter(filterWithId(22));

//добавить функцию, чтобы id наоборот не были равны чему-то
function cond(b: boolean) {
  return !b;
}

// проверяет равенство левой и правой части
function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left == right;
}

const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
);
