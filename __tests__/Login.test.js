/** This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../app/js/config/axiosInstance';
import Login from '../app/js/components/Login';
import LoginForm from '../app/js/components/presentational/LoginForm';

describe('Login Component', () => {
  let wrapper;
  let form;
  const rootRoute = jest.fn();

  const history = {
    push: rootRoute,
  };
  const mock = new MockAdapter(axiosInstance);
  beforeEach(() => {
    wrapper = mount(<Login history={history} />);
    form = wrapper.find('form');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const createSpy = toSpy => (
    jest.spyOn(wrapper.instance(), toSpy)
  );

  it('should have an empty initial state as the component ', () => {
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should contain a <LoginForm /> component', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should call handleSubmit when login form is submitted', () => {
    mock.onGet('/session').reply(200, {
      authenticated: true,
    });
    const spy = createSpy('handleSubmit');
    wrapper.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });

  describe('handleSubmit method', () => {
    it('should call handleResponse method when the API call returns a response', async () => {
      const spy = createSpy('handleResponse');
      wrapper.setState({
        username: 'testUsername',
        password: 'testPassword',
      });
      wrapper.instance().authenticateUser = jest.fn(
        () => Promise.resolve({ data: { authenticated: true } }),
      );
      await wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
      expect(spy).toBeCalled();
    });

    it('should call handleError method when the API call returns an error', () => {
      const spy = createSpy('handleError');
      wrapper.setState({
        username: 'testUsername',
        password: 'testPassword',
      });
      wrapper.instance().authenticateUser = jest.fn(
        () => Promise.reject(new Error('something bad happened')),
      );
      wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
      setImmediate(() => expect(spy).toBeCalledWith(new Error('something bad happened')));
    });
  });

  describe('authenticateUser method', () => {
    it('should return a resolved promise when API call returns a response', () => {
      mock.onGet('/session').reply(200, {
        authenticated: true,
      });
      wrapper
        .instance()
        .authenticateUser('/session', 'Basic token')
        .then((response) => {
          expect(response.data.authenticated).toBeTruthy();
        });
    });

    it('should return a rejected promise when API call returns an error response', () => {
      mock.onGet('/session').reply(400, {
        message: 'Bad request',
      });
      wrapper
        .instance()
        .authenticateUser('/session', 'Basic token')
        .catch((error) => {
          expect(error.response.data.message).toBe('Bad request');
        });
    });
  });

  describe('handleResponse method', () => {
    it('should redirect to "/" if a user is authenticated', () => {
      const response = {
        data: {
          authenticated: true,
        },
      };
      wrapper.instance().handleResponse(response);
      expect(rootRoute).toBeCalled();
    });

    it('should call toastError if user authentication fails', () => {
      const spy = createSpy('toastError');
      const response = {
        data: {
          authenticated: false,
        },
      };
      wrapper.instance().handleResponse(response);
      expect(spy).toBeCalled();
    });
  });

  describe('handleChange method', () => {
    it('should update state on form input change', () => {
      form.find('input[name="username"]').simulate('change', {
        target: {
          name: 'username',
          value: 'testUsername',
        },
      });
      expect(wrapper.state().username).toBe('testUsername');
    });
  });

  describe('handleError method', () => {
    it('should call toastError method when invoked with an error response from handleSubmit', () => {
      const spy = createSpy('toastError');
      const error = {
        response: { data: { error: { message: 'Resource not found' } } }
      };
      wrapper.instance().handleError(error);
      expect(spy).toBeCalled();
    });

    it('should show custom message if a newtork error occurs', () => {
      const spy = createSpy('toastError');
      const error = {
        request: jest.fn(),
      };
      wrapper.instance().handleError(error);
      expect(spy).toHaveBeenCalledWith(
        'Oops, something went wrong. Contact the system adminstrator'
      );
    });
  });
});
