# Exercise 6 — useEffect + Lifting State

## The Concept

### Lifting State

When two components need to share the same piece of state, move it to their **closest common parent**. Then pass it down via props.

In our portfolio, `FilterBar` needs to know which category is active, and `ProjectGrid` needs to know too (so it can filter). Both are siblings — so the state lives in `App`.

```
App  ← state lives here
├── FilterBar  ← receives activeCategory, onCategoryChange as props
└── ProjectGrid  ← receives activeCategory as a prop
```

### useEffect

`useEffect` lets you run **side effects** — things that happen outside of rendering, like updating the browser tab title, fetching data, or setting up timers.

```jsx
useEffect(() => {
  document.title = `Viewing: ${activeCategory}`
}, [activeCategory])  // runs whenever activeCategory changes
```

## Your Tasks

**Part A — Lift the state:**
1. Add `activeCategory` state to `App.jsx`, initialized to `'All'`
2. Pass `activeCategory` and a setter function down to `FilterBar` as props
3. In `FilterBar`, wire each button's `onClick` to call the setter with that category's name
4. Pass `activeCategory` down to `ProjectGrid` as a prop
5. In `ProjectGrid`, filter the projects array before mapping: show all projects when category is `'All'`, otherwise show only matching ones

**Part B — useEffect:**
1. Import `useEffect` in `App.jsx`
2. Add a `useEffect` that sets `document.title` to `Alex Chen — ${activeCategory}` whenever `activeCategory` changes
3. Open a new browser tab and watch the tab title update as you click filters

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stretch Goal

Style the active filter button differently using the `filter-bar__btn--active` CSS class. It's already defined in `FilterBar.css` — you just need to apply it conditionally.

## Key Terms

- **Lifting state** — Moving state to a parent so multiple children can share it.
- **useEffect** — Runs code after render, in response to dependency changes.
- **Dependency array** — The second argument to `useEffect`. Controls when the effect re-runs.
