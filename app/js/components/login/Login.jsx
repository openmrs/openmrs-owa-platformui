/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React, { Component } from 'react';
import Loader from 'react-loader';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import axiosInstance from '../../config/axiosInstance';
import getLoginStatus from '../../helpers/authHelper';

import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loaded: false,
      formSubmitted: false,
    };
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication = () => getLoginStatus('/session')
    .then(response => this.handleResponse(response))
    .catch(error => this.handleError(error));

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username.trim() || !password.trim()) {
      this.toastError('Please fill all form fields');
    } else {
      this.setState({ formSubmitted: true });
      const buffer = new Buffer(`${username}:${password}`).toString('base64');
      const auth = `Basic ${buffer}`;
      this.authenticateUser('/session', auth)
        .then(response => this.handleResponse(response))
        .catch(error => this.handleError(error));
    }
  }

  authenticateUser = (url, token) => (
    new Promise((resolve, reject) => {
      axiosInstance.get(url, {
        headers: {
          Authorization: token,
        },
      })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  )

  handleResponse = (response) => {
    const { formSubmitted } = this.state;
    this.setState({
      loaded: true,
      formSubmitted: false,
    });
    const redirectUrl = window.location.href.split('redirect=')[1] || null;
    if (response.data.authenticated) {
      if (redirectUrl) {
        window.location.assign(redirectUrl);
      } else {
        this.props.history.push('/');
      }
    } else if (response.data.authenticated === false && formSubmitted) {
      this.toastError('Incorrect username or password');
    }
  }

  handleError = (error) => {
    if (error.response) {
      this.toastError(error.response.data.error.message);
    } else {
      this.toastError('Oops, something went wrong. Contact the system adminstrator');
    }
  }

  toastError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
  }

  render() {
    const { username, password, loaded } = this.state;
    return (
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <Loader loaded={loaded}>
              <div className="form-card">
                <div className="col-md-6" id="sign-in-col">
                  <LoginForm
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    username={username}
                    password={password}
                  />
                </div>
              </div>
            </Loader>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
