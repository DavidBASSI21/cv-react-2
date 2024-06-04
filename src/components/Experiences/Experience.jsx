/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import './Experience.scss';

const Experience = ({ iconUrl, title, location, date, description }) => {
  const markup = { __html: DOMPurify.sanitize(description) };

  return (
    <div className="individualExperience-container">
      <span
        className="individualExperience-bullet"
        style={{ backgroundImage: `url(${iconUrl})` }}
      />
      <h2 className="individualExperience-title">{title}</h2>
      <h3 className="individualExperience-location">{location} </h3>
      <h4 className="individualExperience-date">{date}</h4>
      <p
        className="individualExperience-description"
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
