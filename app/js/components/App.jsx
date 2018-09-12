/** This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';
import Header from './header/Header';
import axiosInstance from '../config/axiosInstance';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication = () => {
    this.getLoginStatus()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  getLoginStatus = () => (
    new Promise((resolve, reject) => {
      axiosInstance.get('/session')
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
  )

  handleResponse = (response) => {
    response.data.authenticated
      ? this.setState({ authenticated: true })
      : this.props.history.push('/login');
  }

  handleError = (error) => {
    if (error.response) {
      this.toastError(error.response.data.error.message);
      setTimeout(() => {
        this.props.history.push('/login');
      }, 3000);
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
    const { authenticated } = this.state;
    return (
      <div>
        <Header />
        <Dashboard authenticated={authenticated} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};
