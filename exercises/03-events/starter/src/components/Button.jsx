import './Button.css'

// TODO: Add an onClick prop and wire it to the <button> element
function Button({ label = 'Button', variant = 'primary', size = 'md' }) {
  return (
    <button className={`button button--${variant} button--${size}`}>
      {label}
    </button>
  )
}

export default Button
