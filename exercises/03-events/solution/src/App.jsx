import Button from './components/Button'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>

      <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
        <Button
          label="View Project"
          onClick={() => console.log('Button clicked!')}
        />
        <Button
          label="Download CV"
          variant="secondary"
          onClick={() => console.log('Download clicked!')}
        />
      </div>

      <ProjectCard
        title="Redesigning the Checkout Flow"
        category="UX Design"
        imageUrl="https://picsum.photos/seed/proj1/400/200"
        description="A complete overhaul of the e-commerce checkout experience."
        featured={true}
        onView={() => alert('Viewing: Redesigning the Checkout Flow')}
      />
    </div>
  )
}

export default App
