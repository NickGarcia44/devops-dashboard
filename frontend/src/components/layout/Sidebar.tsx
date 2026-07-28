import {
  LayoutDashboard,
  History,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-800 text-white p-4">
      <nav>
        <ul className="space-y-2">
          <li className="flex cursor-pointer items-center gap-3 rounded-lg bg-slate-700 px-3 py-2 font-medium">
            <LayoutDashboard size={20} />
            Dashboard
          </li>

          <li className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-slate-700 hover:text-cyan-400">
            <History size={20} />
            Histórico
          </li>

          <li className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-slate-700 hover:text-cyan-400">
            <Settings size={20} />
            Configurações
          </li>
        </ul>
      </nav>
    </aside>
  );
}