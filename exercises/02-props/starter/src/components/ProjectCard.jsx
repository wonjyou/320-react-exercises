import './ProjectCard.css'

// TODO: Add title, category, imageUrl, and description props
function ProjectCard() {
  return (
    <div className="card">
      {/* TODO: render an <img> using imageUrl */}
      <div className="card__body">
        {/* TODO: render category, title, description */}
        <span className="card__category">Category</span>
        <h2 className="card__title">Project Title</h2>
        <p className="card__description">Description goes here.</p>
      </div>
    </div>
  )
}

export default ProjectCard
