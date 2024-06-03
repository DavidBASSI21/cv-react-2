import PropTypes from 'prop-types';
import './NavbarMobile.scss';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import NavbarMobileToggle from './NavbarMobileToggle';

const NavbarMobile = ({ isNavbarHidden, setIsNavbarHidden }) => {
  // const ref = useRef(); // Créer une référence useRef

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (!isNavbarHidden && ref.current && !ref.current.contains(e.target)) {
  //       setIsNavbarHidden(true);
  //     }
  //   };
  //   document.addEventListener('mousedown', checkIfClickedOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', checkIfClickedOutside);
  //   };
  // }, [isNavbarHidden, setIsNavbarHidden, ref]); // Ajouter ref dans le tableau de dépendances

  return (
    <nav
      className={
        isNavbarHidden
          ? 'navbar-mobile-container'
          : 'navbar-mobile-container navbar-mobile-container--translated'
      }
      // ref={ref}
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
