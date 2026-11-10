import { useState } from 'react'
import projects from '../data/projects'
import '../styles/projects.css'
import ProjectCard from './ProjectCard'

const filters = ['All', 'React', 'JavaScript', 'CSS', 'Python', 'Django']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.technologies.includes(activeFilter))

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading projects-heading">
          <p className="section-kicker">Selected work</p>
          <h2>My Projects</h2>
          <p className="projects-introduction">
            A collection of project work. Descriptions, screenshots, and links
            can be updated as each project is documented.
          </p>
        </div>

        <div className="project-filters" aria-label="Filter projects by technology">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
              type="button"
              key={filter}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
