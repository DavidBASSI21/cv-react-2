import PropTypes from 'prop-types';
import './NavbarMobileToggle.scss';

const NavbarMobileToggle = ({ isNavbarHidden, setIsNavbarHidden }) => {
  return (
    <div id="menuToggle" className="mobile-toggle-container">
      <div className="mobile-toggle">
        <input
          id="checkbox"
          type="checkbox"
          onChange={() => {
            setIsNavbarHidden(!isNavbarHidden);
          }}
        />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top" />
          <div className="bar bar--middle" />
          <div className="bar bar--bottom" />
        </label>
      </div>
    </div>
  );
};

NavbarMobileToggle.propTypes = {
  isNavbarHidden: PropTypes.bool.isRequired,
  setIsNavbarHidden: PropTypes.func.isRequired,
};

export default NavbarMobileToggle;
