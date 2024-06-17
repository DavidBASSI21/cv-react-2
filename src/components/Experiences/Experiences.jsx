import './Experiences.scss';
import { useEffect, useState } from 'react';
import experiences from '../../data/experiences';
import Experience from './Experience';

const Experiences = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showElements, setShowElements] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 556) {
      setScrolled(true);
      setTimeout(() => {
        setShowElements(true);
      }, 700);
    } else {
      setScrolled(false);
      setShowElements(false);
    }
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="experiences-background">
      <h2
        className={
          scrolled
            ? 'experiences-title focus-in-contract'
            : 'experiences-title--hidden'
        }
      >
        Expériences
      </h2>
      <div className="experiences-container">
        <div className={showElements ? 'line fade-in-bottom' : ''} />
        <div className="experience-container">
          {experiences.map((experience) => (
            <Experience key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
