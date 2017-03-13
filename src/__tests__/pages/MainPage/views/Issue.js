/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Issue from 'code/pages/MainPage/views/IssueList/Issue'

const createProps = () => ({
  issue: {
    title: 'sample',
    number: 1,
    created_at: (new Date()).toString(),
    user: {
      avatar_url: 'sample',
      login: 'sample',
      html_url: 'sample',
    }
  }
});

test('<Issue /> renders correctly', () => {
  const props = createProps();
  const wrapper = shallow(
    <Issue {...props} />
  );
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
