import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = ({ id }) => {
    const resumeUrl = "https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/Resume.pdf";

    const handleClickScroll = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div id={id} className="page">
            <div className="title">
                <h1>Trevor Knutson</h1>
                <h3>Software Engineer</h3>
            </div>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="resume-btn">Resume</a>
            <FontAwesomeIcon onClick={handleClickScroll} className="arrow" icon={faChevronDown} size="4x" />
        </div>
    );
}

export default Landing;