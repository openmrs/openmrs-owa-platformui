import React from 'react';
import logo from '../../../img/openmrs-with-title-small.png';

export default () => (
  <header>
    <div className="logo">
      <a href="/openmrs/">
        <img src={logo} alt="OpenMRS Logo" />
      </a>
    </div>
    <span className="app-title">Platform</span>
  </header>
);
