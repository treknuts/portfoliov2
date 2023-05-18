import "./About.css";
import SectionTitle from "./SectionTitle";

const About = ({ id }) => {
  return (
    <div id={id} className="page">
      <SectionTitle title="Skills" color={"#222"} bgColor={"#F08080"} />
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
