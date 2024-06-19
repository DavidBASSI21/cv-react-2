import './Experiences.scss';
import { useEffect, useState } from 'react';
import experiences from '../../data/experiences';
import Experience from './Experience';
import useMediaQuery from '../CustomHooks/useMediaQuery';

const Experiences = ({ isDesktop }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const scrollThreshold = isDesktop ? 50 : 600;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      if (!scrolled) {
        setScrolled(true);
        setTimeout(() => {
          setShowElements(true);
        }, 700);
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
        <div className={showElements ? 'line fade-in-bottom' : 'hidden'} />
        <div className="experience-container">
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              {...experience}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
