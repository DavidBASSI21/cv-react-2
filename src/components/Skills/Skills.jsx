import './Skills.scss';
import skillsData from '../../data/skills';
import IndividualSkill from './IndividualSkills';

const Skills = () => {
  return (
    <main className="skills">
      <h2 className="skills-title">Ce que je sais faire</h2>
      <div className="skills-container">
        {skillsData.map((individualSkill) => (
          <IndividualSkill key={individualSkill.id} {...individualSkill} />
        ))}
      </div>
    </main>
  );
};

export default Skills;
