export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-800 text-white p-4">
      <nav>
        <ul className="space-y-2">
          <li className="bg-slate-700 rounded-lg px-3 py-2 font-medium cursor-pointer">
            Dashboard
          </li>

          <li className="rounded-lg px-3 py-2 cursor-pointer transition-colors hover:bg-slate-700 hover:text-cyan-400">
            Histórico
          </li>

          <li className="rounded-lg px-3 py-2 cursor-pointer transition-colors hover:bg-slate-700 hover:text-cyan-400">
            Configurações
          </li>
        </ul>
      </nav>
    </aside>
  );
}