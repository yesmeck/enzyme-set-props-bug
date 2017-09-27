import { mount } from 'enzyme';
import React from 'react';
import Hello from '../src/Hello';

test('Hello', () => {
  const wrapper = mount(<Hello show />)
  expect(wrapper.find('span').length).toBe(1)
  wrapper.setProps({ show: false });
  expect(wrapper.find('span').length).toBe(0)
  wrapper.setProps({ show: true });
  wrapper.update();
  console.log(wrapper.debug()); // no span
  console.log(wrapper.html()); // has span
  expect(wrapper.find('span').length).toBe(1) // failed
});
