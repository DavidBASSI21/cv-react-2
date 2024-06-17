import './Skills.scss';
import { useState, useEffect } from 'react';
import skillsData from '../../data/skills';
import IndividualSkill from './IndividualSkills';
import Button from './Button';

const Skills = () => {
  const [scrolled, setScrolled] = useState(false);
  const [category, setCategory] = useState('hardSkills');

  const handleScroll = () => {
    if (window.scrollY > 1915) {
      setScrolled(true);
    } else {
      setScrolled(false);
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
  return (
    <main className="skills">
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
        {category === 'hardSkills' ? 'Ce que je sais faire' : 'Qui je suis'}
      </h2>
      <p className="skills-text">
        {category === 'hardSkills'
          ? 'Découvrez ci-dessous les outils et technologies avec lesquelles je travaille'
          : "Découvrez ci-dessous les qualités et compétences personnelles que je m'emploie à apporter au quotidien"}
      </p>
      <div className="skills-container">
        {filteredSkills.map((individualSkill) => (
          <IndividualSkill key={individualSkill.id} {...individualSkill} />
        ))}
      </div>
    </main>
  );
};

export default Skills;
