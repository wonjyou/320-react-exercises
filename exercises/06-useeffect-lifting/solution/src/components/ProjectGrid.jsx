import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './ProjectGrid.css'

function ProjectGrid({ activeCategory }) {
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

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
