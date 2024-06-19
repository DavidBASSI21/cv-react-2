import PropTypes from 'prop-types';
import './Home.scss';
import cv from '../../assets/cv-david-bassi.pdf';
import pp from '../../assets/pictures/pp.webp';
import About from '../About/About';

const Home = ({ isDarkMode, isDesktop }) => {
  console.log(cv);

  const scrollToContactElement = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    /*
    <div className={isDarkMode ? 'card card--dark' : 'card card--light'}>
      <div
        className="card-picture"
        style={{
          backgroundImage: `url(${pp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="card-title-container">
        <h1 className="card-title">David Bassi</h1>
        <h2 className="card-subtitle">Développeur web </h2>
      </div>
      <div className="card-download-link-container">
        <a
          className={
            isDarkMode ? 'card-download-link card-download-link--dark'
              : 'card-download-link'
          }
          href={cv}
          download="cv-david-bassi.pdf"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
    */
    <div className="home-desktop-container">
      <div className="home-container">
        <div
          className="home-header"
          style={{
            backgroundImage: `url(${pp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="home-title-container">
          <h1 className="home-title">David Bassi</h1>
          <h2 className="home-subtitle">Développeur web </h2>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            className="button button-contact"
            onClick={scrollToContactElement}
          >
            <span>Contactez-moi</span>
          </button>
          <button type="button" className="button button-cv">
            <span>Télécharger mon CV</span>
          </button>
        </div>
      </div>
      {isDesktop && (
        <div className="about-desktop">
          <About />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
