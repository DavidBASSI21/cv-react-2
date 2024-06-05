import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

const IndividualSkill = ({ IconComponent, name }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 750) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className="individualSkill">
      <div
        className={
          scrolled
            ? 'individualSkill-picture scale-in-ver-top'
            : 'individualSkill-picture--hidden'
        }
      >
        <IconComponent size="1em" className="individualSkill-icon" />
      </div>

      <div
        className={
          scrolled ? 'individualSkill-stack ' : 'individualSkill-stack--hidden'
        }
      >
        {name}
      </div>
    </div>
  );
};

IndividualSkill.propTypes = {
  IconComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default IndividualSkill;
