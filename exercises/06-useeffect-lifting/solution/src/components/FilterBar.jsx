import './FilterBar.css'

const categories = ['All', 'UX Design', 'Branding', 'Product Design', 'Systems Design', 'Experience Design']

function FilterBar({ activeCategory, onCategoryChange }) {
  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-bar__btn ${activeCategory === cat ? 'filter-bar__btn--active' : ''}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
