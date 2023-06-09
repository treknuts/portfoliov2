import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = ({ id }) => {
  const resumeUrl =
    "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/resume.pdf";

  const handleClickScroll = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id={id} className="page">
      <div className="main-title">
        <h1>Hi, I'm Trevor Knutson</h1>
        <h3>A Software Engineer</h3>
        <p>
          I have 3 years of experience in CMS administration, full-stack
          application development, APIs, and front-end design.
        </p>
      </div>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="resume-btn"
      >
        Resume
      </a>
      <FontAwesomeIcon
        onClick={handleClickScroll}
        className="arrow"
        icon={faChevronDown}
        size="4x"
      />
    </div>
  );
};

export default Landing;
