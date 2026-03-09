import './Button.css'

function Button({ label = 'Button', variant = 'primary', size = 'md' }) {
  return (
    <button className={`button button--${variant} button--${size}`}>
      {label}
    </button>
  )
}

export default Button
