/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';

//enzyme тестирование
describe('Dropdown', () => {
  test('should render', () => {
    //проверка, зарендерился ли компонент
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
    expect(wrapper).toBeDefined();
    //проверка, зарендерилась ли кнопка
    expect(wrapper.find('button')).toBeDefined();
    //еще очень-очень много всего
  })

  //Snaphot помогает записать компонент, чтобы потом сравнить со следующей версией изменений
  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);

    expect(wrapper).toMatchSnapshot()
  })
})