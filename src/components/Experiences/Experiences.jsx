import './Experiences.scss';
import experiences from '../../data/experiences';
import Experience from './Experience';

const Experiences = () => {
  return (
    <div className="experiences-background">
      <div className="experiences-container">
        <div className="line">
          {experiences.map((experience) => (
            <Experience key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
