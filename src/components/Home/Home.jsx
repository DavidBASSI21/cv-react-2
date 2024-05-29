import PropTypes from 'prop-types';
import './Home.scss';
import cv from '../../assets/cv-david-bassi.pdf';
import pp from '../../assets/pictures/pp.png';

const Home = ({ isDarkMode }) => {
  console.log(cv);

  return (
    <div className={isDarkMode ? 'card card--dark' : 'card card--light'}>
      <div
        className="card-picture"
        style={{
          backgroundImage: `url(https://mighty.tools/mockmind-api/content/human/37.jpg)`,
          backgroundSize: 'cover',
        }}
      />
      <div className="card-title-container">
        <h1 className="card-title">David Bassi</h1>
        <h2 className="card-subtitle">Développeur web </h2>
      </div>
      <div className="card-download-link-container">
        <a
          className={
            isDarkMode
              ? ' card-download-link card-download-link--dark'
              : 'card-download-link'
          }
          href={cv}
          download="cv-david-bassi.pdf"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
