# Exercise 1 — JSX & Function Components

## The Concept

In Figma, a component is a reusable frame you can place anywhere on the canvas. In React, a component is a JavaScript function that returns HTML-like markup called **JSX**. Wherever you use the function, that markup appears on screen.

```jsx
function Button() {
  return <button>Click me</button>
}
```

That's it — a React component. A function. Returns JSX.

## Your Tasks

1. Open `src/App.jsx`
2. Create a function called `Button` that returns a `<button>` element with the text "View Project"
3. Inside the `App` function's return, render your `Button` using `<Button />`
4. Add a `<h1>` above the button that says your name followed by "— Portfolio"
5. Move the `Button` function into its own file at `src/components/Button.jsx` and import it into `App.jsx`

## What to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Stretch Goal

Render three `<Button />` components side by side. Add a `<div>` wrapper and use CSS to give it `display: flex` and `gap: 1rem`.

## Key Terms

- **JSX** — JavaScript XML. Looks like HTML, but it's actually JavaScript.
- **Component** — A function that returns JSX.
- **Render** — The act of React turning your components into actual DOM elements.
