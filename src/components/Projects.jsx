import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import data from "../projects.json";

const Projects = ({ id }) => {
    const [ projects, setProjects ] = useState(data);
    return (
        <div id={ id } className="page">
            <h1>Projects</h1>
            <div className="project-container">
                { projects.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}
            </div>
        </div>
    );
}

export default Projects;