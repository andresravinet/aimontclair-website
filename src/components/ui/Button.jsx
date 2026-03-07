import { CheckCircle, ArrowRight } from 'lucide-react'

export function Button({ children, href, variant = 'primary', icon: Icon = null, className = '', ...props }) {
  const baseStyles = 'px-6 py-3 font-600 rounded-lg transition-all duration-300 inline-flex items-center gap-2 justify-center text-center'
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    dark: 'bg-navy text-white hover:bg-slate-900',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {Icon && <Icon size={18} />}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  )
}
