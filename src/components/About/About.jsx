import './About.scss';
import main from '../../assets/pictures/main.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-title">
        <h2 className="about-title">Oh, bonjour </h2>
        <img className="about-title-img" draggable={false} src={main} alt="" />
      </div>
      <div className="about-container-paragraph">
        <p className="about-paragraph">
          Bienvenue ! Je m&apos;appelle David,{' '}
          <strong className="about-paragraph-strong">
            développeur web junior {'  '}
          </strong>
          spécialisé {'  '}
          <strong className="about-paragraph-strong"> React</strong>, ayant
          étudié au sein de l&apos;
          <strong className="about-paragraph-strong">école O&apos;clock</strong>
          .
        </p>
        <p className="about-paragraph">
          À la recherche d&apos;un{' '}
          <strong className="about-paragraph-strong">
            contrat de professionnalisation{' '}
          </strong>
          (rythme de 1 semaine à l&apos;école et 2 semaines en entreprise) pour
          une{' '}
          <strong className="about-paragraph-strong">
            rentrée au 14 octobre 2024
          </strong>
          , il me tarde d&apos;intégrer une entreprise où je pourrai continuer à
          développer les compétences et connaissances acquises au cours de ma
          formation.
        </p>
        <p className="about-paragraph">
          <strong className="about-paragraph-strong">
            Organisé, fiable, rigoureux
          </strong>{' '}
          et doté d&apos;une{' '}
          <strong className="about-paragraph-strong">
            forte conscience professionnelle
          </strong>
          , je sais m&apos;investir pleinement, et être proactif dans un projet,
          afin de mener celui-ci à son terme, tout en veillant à respecter les
          exigences coûts, qualités et délais.
        </p>
      </div>
    </div>
  );
};

export default About;
