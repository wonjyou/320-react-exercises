# Exercise 5 — Lists & Keys

## The Concept

Instead of copy-pasting a component 8 times, React can render a list of components from a data array — like a CMS populating a grid from a database.

```jsx
const items = ['Home', 'Work', 'About']

function Nav() {
  return (
    <nav>
      {items.map((item) => (
        <a key={item} href={`#${item}`}>{item}</a>
      ))}
    </nav>
  )
}
```

The `key` prop is required when rendering lists. It helps React track which items changed, added, or removed. Use a unique ID from your data — never the array index if you can avoid it.

## Your Tasks

1. Open `src/data/projects.js` and look at the data structure
2. Import the `projects` array into `ProjectGrid.jsx`
3. Use `.map()` to render a `<ProjectCard />` for each project
4. Pass all the project properties as props to each card using the spread pattern or individually
5. Add the `key` prop to each `<ProjectCard />` using the project's `id`
6. In `App.jsx`, replace the placeholder with `<ProjectGrid />`

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## What You Should See

Six project cards arranged in a responsive CSS grid.

## Stretch Goal

Sort the projects before rendering so the `featured` ones appear first. Use `.sort()` before `.map()`. Hint: `true - false === 1`, which sort understands.

## Key Terms

- **Array.map()** — Transforms each item in an array into something new (like a JSX element).
- **key** — A special prop React uses internally to track list items. Never use it for your own logic.
- **Spread props** — `<Card {...project} />` is shorthand for passing every property of `project` as a separate prop.
