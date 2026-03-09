import Button from './components/Button'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>

      {/* TODO: Render three Button components with different props */}
      <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
        <Button />
        <Button />
        <Button />
      </div>

      {/* TODO: Render a ProjectCard with real prop values */}
      <ProjectCard />
    </div>
  )
}

export default App
