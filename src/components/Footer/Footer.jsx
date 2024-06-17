import './Footer.scss';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="footer">
      <div className="footer-socials">
        <ul className="footer-socials-ul">
          <li>
            <a href="https://github.com/DavidBASSI21">
              {' '}
              <FaGithub className="footer-socials-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/david-bassi/">
              <FaLinkedinIn className="footer-socials-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:david.bassi.db@gmail.com">
              <LuMail className="footer-socials-icon" />
            </a>
          </li>
          <li>
            <a href="tel:+330627242907">
              <IoPhonePortraitOutline className="footer-socials-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-text">
        David Bassi - Développeur Web - {currentYear}
      </div>
    </div>
  );
};

export default Footer;
