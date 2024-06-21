import PropTypes from 'prop-types';
import './IndividualProject.scss';
import { VscGithubAlt } from 'react-icons/vsc';

const IndividualProject = ({
  title,
  technos,
  isReady,
  picture,
  siteUrl,
  repoUrl,
  description,
}) => {
  const imageUrl = `../../assets/pictures/${picture}`;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            className="flip-card-header"
            style={{
              backgroundImage: `url(${picture})`,
              backgroundSize: 'contain',
              width: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

              // backgroundRepeat: 'no-repeat',
            }}
          />
          <p className="flip-card-title">{title}</p>
          <div className="flip-card-technos">
            {technos.map((techno) => (
              // console.log(techno)
              <div className="flip-card-techno" key={techno}>
                {techno}
              </div>
            ))}
          </div>
        </div>
        <div className="flip-card-back">
          {/* <div
            className="flip-card-header"
            style={{
              backgroundImage: `url(${picture})`,
              backgroundSize: 'contain',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              // backgroundRepeat: 'no-repeat',
            }}
          />
          <p className="flip-card-back-title">{title}</p> */}
          <p className="flip-card-back-description"> {description}</p>

          {isReady && (
            <div className="flip-card-back-link-container">
              <a
                href={siteUrl}
                target="_blank"
                rel="noreferrer"
                className="flip-card-back-link"
              >
                J'accède au site{' '}
              </a>
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flip-card-back-link"
              >
                <VscGithubAlt /> Repo{' '}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

IndividualProject.propTypes = {
  title: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
  techno: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IndividualProject;
