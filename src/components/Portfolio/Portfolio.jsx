import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.scss';
import { useState, useEffect } from 'react';
import portfolioDatas from '../../data/portfolio';
import { FcIdea } from 'react-icons/fc';
import IndividualProject from './IndividualProject';
import useMediaQuery from '../CustomHooks/useMediaQuery';

const Portfolio = ({ isDesktop }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = isDesktop ? 2000 : 2430;
  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      if (!scrolled) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
    <div className="portfolio">
      <h2
        className={
          scrolled
            ? 'portfolio-title focus-in-contract'
            : ' portfolio-title--hidden'
        }
      >
        Projets
      </h2>
      <p className="portfolio-text">
        Découvrez une sélection de mes projets, mettant en avant mes compétences
        en développement web à travers diverses réalisations. Cette section est
        vouée à se développer au fil de mes projets.
      </p>
      <p className="hint">
        <FcIdea size={17} /> Passez votre souris ou cliquez sur les cartes pour
        les retourner
      </p>
      <div className="flip-card-container">
        {portfolioDatas.map((project) => (
          <IndividualProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
