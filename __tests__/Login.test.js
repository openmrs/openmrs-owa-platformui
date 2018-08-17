/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React, { Component } from 'react';
import { mount } from 'enzyme';

import Login from '../app/js/components/Login';
import LoginForm from '../app/js/components/presentational/LoginForm'


const event = {
  target: {
    name: 'name',
    value: 'value',
  },
  preventDefault: () => jest.fn()
};


describe('Login Component', () => {
  let wrapper,
      form;

  beforeEach(() => {
    wrapper = mount(<Login />);
    form = wrapper.find('form');
  })

  afterEach(() => {
    wrapper.unmount();
  })
  

  it('should have an empty initial state as the component ', () => {
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should contain a <LoginForm /> component', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should call handleSubmit when login form is submitted', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });

  it('should call handleChange on login form input change', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate()
    form.find("input[name='username']").simulate('change', {
      target: {
        value: "testUsername"
      }
    });
    expect(spy).toBeCalled();
  })

  it('handleChange method should update state on form input change', () => {
    form.find("input[name='username']").simulate('change', {
      target: {
        name:'username',
        value: 'testUsername'
      }
    });
    console.log(wrapper.state())
    expect(wrapper.state().username).toBe('testUsername');
  });

});
