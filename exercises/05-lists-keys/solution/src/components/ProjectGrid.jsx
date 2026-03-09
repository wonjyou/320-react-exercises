import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './ProjectGrid.css'

function ProjectGrid() {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          imageUrl={project.imageUrl}
          description={project.description}
          featured={project.featured}
          onView={() => alert(`Viewing: ${project.title}`)}
        />
      ))}
    </div>
  )
}

export default ProjectGrid
