import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ROUTES from '../types';

interface PageTitleState {
  pageTitle: string;
}

function Header() {
  const [pageTitle, setPageTitle] = useState<PageTitleState>({
    pageTitle: '',
  });

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case ROUTES.MAIN:
        setPageTitle({ pageTitle: 'Main' });
        break;
      case ROUTES.FORM:
        setPageTitle({ pageTitle: 'Form' });
        break;
      case ROUTES.ABOUT:
        setPageTitle({ pageTitle: 'About Us' });
        break;
      default:
        setPageTitle({ pageTitle: '' });
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header__container wrapper">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to={ROUTES.MAIN}>Main</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={ROUTES.FORM}>Form</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={ROUTES.ABOUT}>About Us</NavLink>
            </li>
          </ul>
        </nav>
        <div data-testid="page-title" className="header__title">
          {pageTitle.pageTitle}
        </div>
      </div>
    </header>
  );
}

export default Header;
