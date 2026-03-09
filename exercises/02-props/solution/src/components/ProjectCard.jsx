import './ProjectCard.css'

function ProjectCard({ title, category, imageUrl, description, featured = false }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card__body">
        {featured && <span className="badge">Featured</span>}
        <span className="card__category">{category}</span>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
