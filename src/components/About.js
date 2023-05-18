import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const About = ({ id }) => {
  return (
    <div id={id} className="page">
      <div className="about-text">
        <h3>Greetings, I'm Trevor Knutson, a Software Engineer.</h3>
        <p>
          I have experience in CMS administration, full-stack application
          development, APIs, and front-end design.
        </p>
      </div>
      <h1>
        <FontAwesomeIcon icon={faLaptopCode} />
        Skills
      </h1>
      <div className="skills">
        <div>Java</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>PHP</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Bootstrap</div>
        <div>GraphQL</div>
        <div>MySQL</div>
        <div>Kotlin</div>
        <div>Groovy</div>
        <div>Rust</div>
      </div>
    </div>
  );
};

export default About;
