import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../app/js/components/App';
import Login from '../app/js/components/login/Login';
import Routes from '../app/js/routes';

describe('Routes component', () => {
  it('should return app component for the root path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('should return the login component for "/login" route path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
