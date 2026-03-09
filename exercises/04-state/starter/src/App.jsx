import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div>
      <h1>Alex Chen — Portfolio</h1>
      <ProjectCard
        title="Redesigning the Checkout Flow"
        category="UX Design"
        imageUrl="https://picsum.photos/seed/proj1/400/200"
        description="A complete overhaul of the e-commerce checkout experience, reducing drop-off by 34%."
        featured={true}
        onView={() => alert('Viewing: Redesigning the Checkout Flow')}
      />
    </div>
  )
}

export default App
