import PropTypes from 'prop-types';

import './Header.scss';
import { useState, useRef, useEffect } from 'react';
import NavbarMobileToggle from './NavbarMobile/NavbarMobileToggle';
import ToggleDarkMode from './ToggleDarkMode';
import NavbarMobile from './NavbarMobile/NavbarMobile';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  console.log(isNavbarHidden);
  const ref = useRef();

  return (
    <>
      <header
        className={
          isDarkMode
            ? 'header-container header-container--dark'
            : 'header-container'
        }
      >
        <div className="header-picture-container">
          <div className="header-picture" />
        </div>
        {/* <div className="header-links">Bonjour</div> */}
        <div className="toggles-container">
          <div className="header-toggle-darkMode">
            <ToggleDarkMode
              className=" header-toggle-darkMode"
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
          <div
            className={
              isNavbarHidden
                ? 'header-toggle-burger'
                : 'header-toggle-burger header-toggle-burger--translated'
            }
          >
            <NavbarMobileToggle
              setIsNavbarHidden={setIsNavbarHidden}
              isNavbarHidden={isNavbarHidden}
            />
          </div>
        </div>
      </header>
      <div className="div">
        <NavbarMobile
          isNavbarHidden={isNavbarHidden}
          setIsNavbarHidden={setIsNavbarHidden}
        />
      </div>
    </>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Header;
