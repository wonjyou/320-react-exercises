# Exercise 2 — Props

## The Concept

Props are like **component properties in Figma** — they let you pass different values into the same component to produce different results. One component, many variations.

```jsx
// Defining props
function Button({ label, variant }) {
  return <button className={`button button--${variant}`}>{label}</button>
}

// Using props
<Button label="View Project" variant="primary" />
<Button label="Download CV" variant="secondary" />
```

The component is the same. The props make each instance unique.

## Your Tasks

**Part A — Button props:**
1. Give `Button` a `label` prop and render it as the button text
2. Add a `variant` prop (`"primary"` or `"secondary"`) and use it to apply a CSS class
3. Add a `size` prop (`"sm"` or `"lg"`) and use it to apply a size class
4. In `App.jsx`, render three buttons with different prop combinations

**Part B — ProjectCard props:**
1. Give `ProjectCard` these props: `title`, `category`, `imageUrl`, `description`
2. Render each prop in the appropriate place in the card markup
3. In `App.jsx`, render one `ProjectCard` with real values filled in

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stretch Goal

Add a `featured` boolean prop to `ProjectCard`. When `featured` is `true`, render a `<span className="badge">Featured</span>` element inside the card.

## Key Terms

- **Props** — Data passed into a component from its parent. Read-only inside the component.
- **Destructuring** — `function Button({ label })` pulls `label` out of the props object directly.
- **Template literal** — `` `button button--${variant}` `` builds a string with a variable inside it.
