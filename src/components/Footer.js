import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const github = "https://www.github.com/treknuts";
  const linkedIn = "https://www.linkedin.com/in/treknuts";
  const email = "mailto:trevorknutson.complete@gmail.com";
  const codepen = "https://www.codepen.io/treknuts/pens/public";

  return (
    <div id="footer">
      <div className="credit">
        <FontAwesomeIcon icon={faLaptopCode} /> by Trevor Knutson
      </div>
      <div className="socials">
        <a className="github" href={github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} size="xl" />
        </a>
        <a
          className="linkedin"
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a className="codepen" href={codepen} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCodepen} size="xl" />
        </a>
        <a className="email" href={email}>
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
