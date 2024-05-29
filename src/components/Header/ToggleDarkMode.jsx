import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import './ToggleDarkMode.scss';

const ToggleDarkMode = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="l"
        checked={isDarkMode}
        onChange={handleToggle}
      />
    </div>
  );
};
ToggleDarkMode.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default ToggleDarkMode;
