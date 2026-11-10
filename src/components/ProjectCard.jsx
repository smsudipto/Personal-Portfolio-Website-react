function ProjectLink({ href, children }) {
  if (!href) {
    return (
      <button className="project-link project-link-disabled" type="button" disabled>
        {children} unavailable
      </button>
    )
  }

  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt={`${project.title} screenshot`} />
        {project.imageIsPlaceholder && (
          <span className="project-image-label">Placeholder visual</span>
        )}
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span className="technology-badge" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-links">
          <ProjectLink href={project.liveDemo}>Live Demo</ProjectLink>
          <ProjectLink href={project.github}>GitHub</ProjectLink>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
