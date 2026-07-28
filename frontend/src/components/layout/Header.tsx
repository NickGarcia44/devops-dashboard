export default function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-bold text-white">
          DevOps Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          System Monitoring
        </p>
      </div>
    </header>
  );
}