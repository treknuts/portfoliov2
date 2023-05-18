import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <div className="card">
            <div className="card-content">
              <div className="image-wrapper">
                <img src={project.imageUrl} alt="something" className="card-image" />
              </div>
            <div className="card-body">
              <h2 className="card-title">{ project.title }</h2>
              <p className="card-description">{ project.description }</p>
              <div className="tech-list">
                { project.stack.map((item, index) => {
                    return <div className="tech-badge" key={index}>{ item }</div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </a>
    );
}

export default ProjectCard;
