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
          <div
            className={
              isNavbarHidden ? 'bar bar--top' : 'bar bar--top bar--change'
            }
          />
          <div
            className={
              isNavbarHidden ? 'bar bar--middle' : 'bar bar--middle bar--change'
            }
          />
          <div
            className={
              isNavbarHidden ? 'bar bar--bottom' : 'bar bar--bottom bar--change'
            }
          />
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
