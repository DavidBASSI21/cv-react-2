import PropTypes from 'prop-types';
import './NavbarMobile.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import NavbarMobileToggle from './NavbarMobileToggle';

const NavbarMobile = ({ isNavbarHidden }) => {
  return (
    <nav
      className={
        isNavbarHidden
          ? 'navbar-mobile-container'
          : 'navbar-mobile-container navbar-mobile-container--translated'
      }
    >
      <ul className="navbar-mobile-links">
        <NavLink className="navbar-mobile-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="navbar-mobile-link" to="/a-propos">
          A propos
        </NavLink>
        <NavLink className="navbar-mobile-link" to="/competences">
          Compétences
        </NavLink>
        <NavLink className="navbar-mobile-link" to="/experiences">
          Expériences
        </NavLink>
        <NavLink className="navbar-mobile-link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="navbar-mobile-link" to="/contact">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

NavbarMobile.propTypes = {
  isNavbarHidden: PropTypes.bool.isRequired,
};

export default NavbarMobile;
