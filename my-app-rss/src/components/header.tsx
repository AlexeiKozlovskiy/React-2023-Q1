import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from './router/routes';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to={Route.MAIN}>Main</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={Route.ABOUT}>About Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
