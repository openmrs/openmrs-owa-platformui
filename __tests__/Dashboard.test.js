import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../app/js/components/Dashboard';

describe('Dashboard component', () => {
  let wrapper;
  const authenticated = true;

  beforeEach(() => {
    wrapper = shallow(<Dashboard authenticated={authenticated} />);
  });

  it('renders without breaking', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
