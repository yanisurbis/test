/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ButtonShowMore from 'code/pages/MainPage/views/ButtonShowMore'

const createProps = disabled => ({
  disabled,
  onClick: jest.fn(),
});

test('<ButtonShowMore /> renders correctly when disabled is false', () => {
  const props = createProps(false);
  const wrapper = shallow(
    <ButtonShowMore {...props} />
  );
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

test('<ButtonShowMore /> renders correctly when disabled is true', () => {
  const props = createProps(true);
  const wrapper = shallow(
    <ButtonShowMore {...props} />
  );
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
