export function Integrations() {
  const tools = ['Clio', 'Dentrix', 'HubSpot', 'Zapier', 'Make', 'Google Calendar', 'Outlook']

  return (
    <div className="py-10 border-t border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-sm uppercase tracking-wider mb-6">
          Works with the tools you already use
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map(tool => (
            <span
              key={tool}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
