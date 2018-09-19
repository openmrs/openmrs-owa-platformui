import React from 'react';
import { shallow } from 'enzyme';
import Header from '../app/js/components/header/Header';

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('renders without breaking', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
