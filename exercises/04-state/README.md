# Exercise 4 — State (useState)

## The Concept

State is **memory**. A component without state forgets everything after every render. A component with state can remember something between interactions — like a like count, or whether a card has been saved.

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)  // initial value = 0

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

`useState` gives you two things: the current value, and a setter function. **Never modify the value directly** — always use the setter. React needs to know when state changes so it can re-render.

## Your Tasks

**Part A — Like counter:**
1. Import `useState` at the top of `ProjectCard.jsx`
2. Add a `likes` state variable, initialized to `0`
3. Add a "♡ Like" button below the description
4. Wire the button's `onClick` to increment `likes` by 1
5. Display the like count next to the button: `"♡ 3 Likes"`

**Part B — Saved toggle:**
1. Add an `isSaved` boolean state variable, initialized to `false`
2. Add a "Save" button (or icon) to the card
3. Toggle `isSaved` between `true` and `false` on click
4. Change the button label: show "Saved ✓" when true, "Save" when false
5. Apply a CSS class `card--saved` to the card's outer div when `isSaved` is true

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stretch Goal

Prevent likes from going below zero. Add an "Unlike" button that decrements the count, but disable it (using the `disabled` attribute) when `likes === 0`.

## Key Terms

- **useState** — A React hook that adds a state variable to a component.
- **Re-render** — When state changes, React re-runs the component function and updates the DOM.
- **Immutability** — Never mutate state directly. Always use the setter.
