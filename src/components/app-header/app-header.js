import React from 'react';

import './app-header.css';
import logo from './logo.svg'

const AppHeader = () => {

  return (
    <nav className="navbar navbar-light bg-light app-header">
      <div className="navbar-brand">
        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
        Doggy
      </div>
    </nav>
  );

}

export default AppHeader;