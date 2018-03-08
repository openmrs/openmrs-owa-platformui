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
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Login from '../app/js/components/Login';
import LoginForm from '../app/js/components/presentational/LoginForm'


Enzyme.configure({ adapter: new Adapter() });

const event = {
  target: {
    name: 'name',
    value: 'value',
  },
  preventDefault: () => jest.fn()
};


describe('Login Component', () => {
  const wrapper = mount(<Login />);

  it('should have an empty initial state as the component ', () => {
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should contain a <LoginForm /> component', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should render its children', () => {
    expect(wrapper.find('div').length).toBe(7);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);

  })


  it('should call loginUser action', () => {
    const form = wrapper.find('form');
    const hadleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().handleSubmit(event);
    expect(hadleSubmit).toBeCalled();
  });

});