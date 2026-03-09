import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './ProjectGrid.css'

// TODO: accept activeCategory prop
function ProjectGrid() {
  // TODO: filter projects based on activeCategory before mapping
  // When activeCategory is 'All', show all projects
  // Otherwise, show only projects where project.category === activeCategory
  const filteredProjects = projects

  return (
    <div className="grid">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
          onView={() => alert(`Viewing: ${project.title}`)}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
