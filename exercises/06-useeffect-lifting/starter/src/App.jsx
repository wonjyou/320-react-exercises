// TODO: import useState and useEffect from 'react'
import FilterBar from './components/FilterBar'
import ProjectGrid from './components/ProjectGrid'

function App() {
  // TODO: add activeCategory state initialized to 'All'
  // TODO: add useEffect to update document.title when activeCategory changes

  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>
      {/* TODO: pass activeCategory and a setter to FilterBar */}
      <FilterBar />
      {/* TODO: pass activeCategory to ProjectGrid */}
      <ProjectGrid />
    </div>
  )
}

export default App
