import { useState, useEffect } from 'react'
import FilterBar from './components/FilterBar'
import ProjectGrid from './components/ProjectGrid'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = `Alex Chen — ${activeCategory}`
  }, [activeCategory])

  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProjectGrid activeCategory={activeCategory} />
    </div>
  )
}

export default App
