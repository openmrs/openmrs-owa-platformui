import React from 'react';
import logo from '../../../img/openmrs-with-title-small.png';


const contextPath = window.location.href.split('/')[3];
const homeUrl = `/${contextPath}/`;
export default () => (
  
  <header>
    <div className="logo">
      <a href={homeUrl}>
        <img src={logo} alt="OpenMRS Logo" />
      </a>
    </div>
    <span className="app-title">Platform</span>
  </header>
);
