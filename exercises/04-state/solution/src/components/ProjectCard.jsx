import { useState } from 'react'
import Button from './Button'
import './ProjectCard.css'

function ProjectCard({ title, category, imageUrl, description, featured = false, onView }) {
  const [likes, setLikes] = useState(0)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className={`card ${isSaved ? 'card--saved' : ''}`}>
      <img src={imageUrl} alt={title} />
      <div className="card__body">
        {featured && <span className="badge">Featured</span>}
        <span className="card__category">{category}</span>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>

        <div className="card__actions">
          <Button label="View Project" onClick={onView} size="sm" />
          <button
            className="card__like-btn"
            onClick={() => setLikes(likes + 1)}
          >
            ♡ {likes} {likes === 1 ? 'Like' : 'Likes'}
          </button>
          <button
            className={`card__save-btn ${isSaved ? 'card__save-btn--saved' : ''}`}
            onClick={() => setIsSaved(!isSaved)}
          >
            {isSaved ? 'Saved ✓' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
