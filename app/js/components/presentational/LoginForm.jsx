/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import openmrsLogo from '../../../img/gsoc-omrs.png';

const LoginForm = ({ onSubmit, onChange, username, password }) => {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h5 className="text-center">OpenMRS Platform</h5>
      <div className="logo-container">
        <img
          className="logo-img"
          src={openmrsLogo}
          alt="Add On Manager home page"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="username"
          onChange={onChange}
          value={username}
          required
        />
        <label className="control-label" htmlFor="input">
          Username
        </label>
        <i className="bar" />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          required
        />
        <label className="control-label" htmlFor="input">
          Password
        </label>
        <i className="bar" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-block btn-success">
          Sign In
        </button>
      </div>
      <div className="forgot-password">
        <small>
          <a href="#" className="btn forgot-password-link">
            Forgot Password?
          </a>
        </small>
      </div>
    </form>
  )
}

export default LoginForm;
