/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import openmrsLogo from '../../img/openmrs-with-title-small.png';
import loadingGif from '../../img/loading.gif'

export default class Dashboard extends React.Component {
  render() {
    const openmrsServer = window.location.pathname.split('/')[1];
    return (
      <div className="list-group home-list">
        <Link to="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
          
          <h5 className="mb-1">The Platform is running</h5><img src={(loadingGif)} alt=""/>
          </div>
          
        </Link>
        <Link to="#" className="list-group-item list-group-item-action flex-column align-items-start" onClick={(event) => {
          event.preventDefault();
          window.location = `/${openmrsServer}/owa/Add On Manager/index.html#/`;
          }}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Addon Manager</h5>
            
          </div>
          <p className="mb-1">The Addon Manager open web app, is an OpenMRS tool used to manage the uploading, installation, upgrading, deleting and viewing of OpenMRS addons.</p>
          
        </Link>
        <Link to="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">User Manager</h5>
            
          </div>
          <p className="mb-1">To learn more about the User Interface Modules, click here for details about installing them</p>
          
        </Link>
        <Link to="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">REST Documentation</h5>
            
          </div>
          <p className="mb-1">If you are a developer, you can access the REST API here</p>
          
        </Link>
      </div>
    )
  }
}
