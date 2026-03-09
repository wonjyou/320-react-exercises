import Button from './components/Button'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>

      <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
        {/* TODO: pass an onClick that logs "Button clicked!" to the console */}
        <Button label="View Project" variant="primary" />
        <Button label="Download CV" variant="secondary" />
      </div>

      {/* TODO: pass an onView function that alerts the project title */}
      <ProjectCard
        title="Redesigning the Checkout Flow"
        category="UX Design"
        imageUrl="https://picsum.photos/seed/proj1/400/200"
        description="A complete overhaul of the e-commerce checkout experience."
        featured={true}
      />
    </div>
  )
}

export default App
