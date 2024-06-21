/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import './Experience.scss';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiMapPin2Line } from 'react-icons/ri';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { useState, useEffect } from 'react';
import useMediaQuery from '../CustomHooks/useMediaQuery';

const Experience = ({
  iconUrl,
  title,
  location,
  date,
  description,
  isDesktop,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [spin, setSpin] = useState(false);
  const scrollThreshold = isDesktop ? 50 : 600;
  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      if (!scrolled) {
        // Only update state if it hasn't been scrolled past the threshold before
        setScrolled(true);
        setTimeout(() => {
          setShowElements(true);
        }, 800);
        setTimeout(() => {
          setSpin(true);
        }, 900);
      }
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
      }, 100);
    }
  }, [showElements]);
  const markup = { __html: DOMPurify.sanitize(description) };

  return (
    <div
      className={
        showElements
          ? 'individualExperience-container slide-in-right'
          : 'individualExperience-container hidden '
      }
    >
      <div
        className={
          showElements
            ? 'individualExperience-container-bullet '
            : 'individualExperience-container hidden'
        }
      >
        <span
          className={`${
            showElements
              ? 'individualExperience-bullet '
              : 'individualExperience-bullet hidden'
          } ${spin ? 'spin' : ''}`}
          style={{
            backgroundImage: `url(${iconUrl})`,
          }}
        />
      </div>

      <div className="individualExperience-container-text">
        <h2
          className={
            showElements
              ? 'individualExperience-title slide-in-right'
              : 'individualExperience-title hidden'
          }
        >
          <MdOutlineWorkOutline className="individualExperience-icon" /> {title}
        </h2>
        <h3
          className={
            showElements
              ? 'individualExperience-location slide-in-right'
              : 'individualExperience-location hidden'
          }
        >
          <RiMapPin2Line className="individualExperience-icon" /> {location}
        </h3>
        <h4
          className={
            showElements
              ? 'individualExperience-date slide-in-right'
              : 'individualExperience-date hidden'
          }
        >
          <FaRegCalendarAlt className="individualExperience-icon" />
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
