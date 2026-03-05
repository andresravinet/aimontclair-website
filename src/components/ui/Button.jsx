export function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-6 py-3 font-600 rounded-lg transition-all duration-300 inline-block text-center'
  const variants = {
    primary: 'bg-lime text-navy hover:bg-green-500',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    dark: 'bg-navy text-white hover:bg-slate-900',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
