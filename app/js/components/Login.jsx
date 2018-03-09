/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { hashHistory } from 'react-router';

import LoginForm from './presentational/LoginForm'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    
    hashHistory.push('/home')
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange}
        username={this.state.username}
        password={this.state.password}
      />
    )
  }
}


export default Login;