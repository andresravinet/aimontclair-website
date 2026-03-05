export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg card-shadow card-hover p-6 ${className}`}>
      {children}
    </div>
  )
}
