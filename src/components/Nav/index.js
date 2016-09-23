import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';

import css from './style.css';

const navConf = [
  { url: '/', icon: 'home', label: 'menu.home' },
  { url: '/client', icon: 'briefcase', label: 'menu.client' }
];

class Nav extends Component {
  render() {
    const { location } = this.props;
    const menus = navConf.map(n => {
      const menuClass = classNames([css.menu], {
        [css.active]: n.url === location.pathname
      });
      const iconClass = 'fa fa-' + n.icon;
      return (
        <div key={n.url} className={menuClass}>
          <Link to={n.url}>
            <i className={iconClass}></i>
            <FormattedMessage id={n.label} />
          </Link>
        </div>
      );
    });
    return (
      <div className={css.nav}>
        {menus}
      </div>
    );
  }
}

export default Nav;
