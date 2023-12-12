import './index.css';

const ProjectItem = props => {
  const {projectDetails} = props;
  const {projectId, imageURL, description, title, link} = projectDetails;
  return (
    <>
      <li className="project-item-container">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <img
            className="project-item-image"
            src={imageURL}
            alt={`project-item ${projectId}`}
          />

          <div className="project-item-details-container">
            <h1 className="project-item-title">{title}</h1>
            <p className="project-item-description">{description}</p>
          </div>
        </a>
      </li>
    </>
  );
};

export default ProjectItem;