import './Button.css'

function Button({ label = 'Button', variant = 'primary', size = 'md', onClick }) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
