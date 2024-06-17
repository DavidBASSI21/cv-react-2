/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import './Experience.scss';

import { useState, useEffect } from 'react';

const Experience = ({ iconUrl, title, location, date, description }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setScrolled(true);
      setTimeout(() => {
        setShowElements(true);
      }, 800);
    } else {
      setScrolled(false);
      setShowElements(false);
      setSpin(false);
    }
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showElements) {
      setTimeout(() => {
        setSpin(true);
      }, 900);
    }
  }, [showElements]);
  const markup = { __html: DOMPurify.sanitize(description) };

  return (
    <div className="individualExperience-container">
      <span
        className={`${
          showElements
            ? 'individualExperience-bullet roll-in-blurred-left'
            : 'individualExperience-bullet hidden'
        } ${spin ? 'spin' : ''}`}
        style={{
          backgroundImage: `url(${iconUrl})`,
        }}
      />

      <h2
        className={
          showElements
            ? 'individualExperience-title slide-in-right'
            : 'individualExperience-title hidden'
        }
      >
        {title}
      </h2>
      <h3
        className={
          showElements
            ? 'individualExperience-location slide-in-right'
            : 'individualExperience-location hidden'
        }
      >
        {location}{' '}
      </h3>
      <h4
        className={
          showElements
            ? 'individualExperience-date slide-in-right'
            : 'individualExperience-date hidden'
        }
      >
        {date}
      </h4>
      <p
        className={
          showElements
            ? 'individualExperience-description slide-in-right'
            : 'individualExperience-description hidden'
        }
        dangerouslySetInnerHTML={markup}
      />
    </div>
  );
};
Experience.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Experience;
