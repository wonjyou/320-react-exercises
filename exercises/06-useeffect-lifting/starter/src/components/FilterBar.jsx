import './FilterBar.css'

const categories = ['All', 'UX Design', 'Branding', 'Product Design', 'Systems Design', 'Experience Design']

// TODO: accept activeCategory and onCategoryChange props
function FilterBar() {
  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        // TODO: wire onClick to call onCategoryChange with the category name
        // TODO: apply 'filter-bar__btn--active' class when cat === activeCategory
        <button key={cat} className="filter-bar__btn">
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
