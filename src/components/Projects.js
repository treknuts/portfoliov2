import "./Projects.css";
import ProjectCard from "./ProjectCard";
import data from "../projects.json";
import SectionTitle from "./SectionTitle";

const Projects = ({ id }) => {
  const projects = data;
  return (
    <div id={id} className="page">
      <SectionTitle title="Projects" color={"#222"} bgColor={"#80f0f0"} />
      <div className="project-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
