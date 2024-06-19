import './Skills.scss';
import { useState, useEffect } from 'react';
import skillsData from '../../data/skills';
import IndividualSkill from './IndividualSkills';
import Button from './Button';
import useMediaQuery from '../CustomHooks/useMediaQuery';
const Skills = ({ isDesktop }) => {
  const [scrolled, setScrolled] = useState(false);
  const [category, setCategory] = useState('hardSkills');
  const scrollThreshold = isDesktop ? 1136 : 1915;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      if (!scrolled) {
        setScrolled(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === category
  );

  const filteredHardSkills = skillsData.filter(
    (skill) => skill.category === 'hardSkills'
  );

  const filteredSoftSkills = skillsData.filter(
    (skill) => skill.category === 'softSkills'
  );
  return (
    <main className="skills">
      {!isDesktop && (
        <>
          <div className="buttons">
            <button
              type="button"
              className={
                category === 'hardSkills'
                  ? 'buttons-skill buttons-skill--selected'
                  : 'buttons-skill'
              }
              onClick={() => {
                setCategory('hardSkills');
              }}
            >
              Hard Skills
            </button>

            <button
              type="button"
              className={
                category === 'softSkills'
                  ? 'buttons-skill buttons-skill--selected'
                  : 'buttons-skill'
              }
              onClick={() => {
                setCategory('softSkills');
              }}
            >
              Soft Skills
            </button>
          </div>
          <h2
            className={
              scrolled
                ? 'skills-title focus-in-contract'
                : 'skills-title skills-title--hidden'
            }
          >
            {category === 'hardSkills'
              ? 'Ce que je sais faire'
              : "Ce qui m'anime"}
          </h2>
          <p className="skills-text">
            {category === 'hardSkills'
              ? 'Voici un aperçu de mes compétences techniques. Ces technologies incluent des langages de programmation, des frameworks et des outils essentiels à mon travail en développement web.'
              : "Les compétences suivantes illustrent mes qualités humaines. Ces soft skills sont indispensables à mon travail et contribuent à mon efficacité et à ma capacité à m'adapter à différents environnements professionnels."}
          </p>
          <div className="skills-container">
            {filteredSkills.map((individualSkill) => (
              <IndividualSkill key={individualSkill.id} {...individualSkill} />
            ))}
          </div>
        </>
      )}
      <div className="skills-desktop-container">
        <div className="skills-desktop-hard">
          <h2
            className={
              scrolled
                ? 'skills-title focus-in-contract'
                : 'skills-title skills-title--hidden'
            }
          >
            Hard Skills
          </h2>
          <p className="skills-text">
            Voici un aperçu de mes compétences techniques. Ces technologies
            incluent des langages de programmation, des frameworks et des outils
            essentiels à mon travail en développement web.
          </p>
          <div className="skills-container">
            {filteredHardSkills.map((individualSkill) => (
              <IndividualSkill key={individualSkill.id} {...individualSkill} />
            ))}
          </div>
        </div>
        <div className="skills-desktop-soft">
          <h2
            className={
              scrolled
                ? 'skills-title focus-in-contract'
                : 'skills-title skills-title--hidden'
            }
          >
            Soft Skills
          </h2>
          <p className="skills-text">
            Les compétences suivantes illustrent mes qualités humaines. Ces soft
            skills sont indispensables à mon travail et contribuent à mon
            efficacité et à ma capacité à m'adapter à différents environnements
            professionnels.
          </p>
          <div className="skills-container">
            {filteredSoftSkills.map((individualSkill) => (
              <IndividualSkill key={individualSkill.id} {...individualSkill} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
