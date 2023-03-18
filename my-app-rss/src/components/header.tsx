import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from './router/routes';

interface PageTitleState {
  pageTitle: string;
}

class Header extends Component<object, PageTitleState> {
  constructor(props: object = {}) {
    super(props);
    this.state = { pageTitle: '' };
  }

  componentDidMount() {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case Route.MAIN:
        this.setState({ pageTitle: 'Main' });
        break;
      case Route.ABOUT:
        this.setState({ pageTitle: 'About Us' });
        break;
    }
  }

  handleNavClick = (title: string) => {
    this.setState({ pageTitle: title });
  };

  render() {
    const { pageTitle } = this.state;

    return (
      <header className="header wrapper">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to={Route.MAIN} onClick={() => this.handleNavClick('Main')}>
                Main
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={Route.ABOUT} onClick={() => this.handleNavClick('About Us')}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__title">{pageTitle}</div>
      </header>
    );
  }
}

export default Header;
