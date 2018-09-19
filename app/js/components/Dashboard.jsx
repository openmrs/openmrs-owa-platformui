/** This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

const Dashboard = ({ authenticated }) => {
  const { origin } = window.location;
  const openmrsServer = window.location.pathname.split('/')[1];
  const addonManagerLink = `${origin}/${openmrsServer}/owa/addonmanager/index.html`;

  return (
    <div id="body-wrapper">
      <Loader loaded={authenticated}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="status-header">
                OpenMRS platform is running
                <i className="fa fa-check-circle float-right" />
                <span />
              </h4>

              <ul className="platform-ul">
                <div>
                  <li className="platform-list">
                    <a
                      href={addonManagerLink}
                      className="platform-item-link"
                    >
                      <div className="jumbotron">
                        <h4>
                          Addon Manager
                        </h4>
                        <p>
                          The Addon Manager open web app, is an OpenMRS tool used to
                          manage the uploading,installation, upgrading, deleting and
                          viewing of OpenMRS addons.
                        </p>
                      </div>
                    </a>
                  </li>
                  <hr />
                </div>
                <div>
                  <li className="platform-list">
                    <a
                      href="https://wiki.openmrs.org/x/d4aIBQ"
                      className="platform-item-link"
                    >
                      <div className="jumbotron">
                        <h4>User Manager</h4>
                        <p>
                          To learn more about the User Interface Modules, click here for details about
                          installing them
                        </p>
                      </div>
                    </a>
                  </li>
                  <hr />
                </div>
                <div>
                  <li className="platform-list">
                    <a
                      href="https://wiki.openmrs.org/x/P4IaAQ"
                      className="platform-item-link"
                    >
                      <div className="jumbotron light">
                        <h4>REST Documentation</h4>
                        <p>If you are a developer, you can access the REST API here</p>
                      </div>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Loader>
    </div>
  );
};

Dashboard.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Dashboard;
