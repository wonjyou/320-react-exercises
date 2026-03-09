# Exercise 3 — Events

## The Concept

Events are how components respond to user actions. In Figma you might add a "click → navigate" interaction. In React, you wire a JavaScript function directly to the element that should respond.

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>
}

// The parent decides what happens on click
<Button label="View Project" onClick={() => console.log('clicked!')} />
```

The component doesn't decide what clicking does — the **parent** does. The component just exposes the hook.

## Your Tasks

**Part A — Button events:**
1. Add an `onClick` prop to `Button` and wire it to the `<button>` element's `onClick` attribute
2. In `App.jsx`, pass an arrow function to `Button` that logs `"Button clicked!"` to the console
3. Open your browser's DevTools console and confirm the log appears when you click

**Part B — ProjectCard events:**
1. Add a "View Project" `<Button />` inside `ProjectCard` (below the description)
2. Pass an `onView` prop to `ProjectCard`
3. Wire `onView` to the Button's `onClick`
4. In `App.jsx`, pass a function to `onView` that calls `alert()` with the project title

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stretch Goal

Change the Button label from "View Project" to "Viewed!" after it's been clicked. You'll need to store the clicked state somewhere — but for now, try using a local variable inside the click handler and see what happens (spoiler: it won't work — that's the setup for Exercise 4).

## Key Terms

- **Event handler** — A function that runs when an event (like a click) occurs.
- **Synthetic event** — React wraps browser events in its own event object. You can access it as the first argument: `onClick={(e) => console.log(e)}`.
- **Prop drilling** — Passing a function down through props so a child can call it.
