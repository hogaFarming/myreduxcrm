import React, {Component} from 'react';
import {Link} from 'react-router';

import css from './style.css';

import logo from './logo.png';

class Logo extends Component {
  render() {
    return (
      <Link className={css.logo} to="/">
        <img src={logo} alt="玄讯CRM"/>
      </Link>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className={css.header}>
        <Logo />
      </div>
    );
  }
}

export default Header;