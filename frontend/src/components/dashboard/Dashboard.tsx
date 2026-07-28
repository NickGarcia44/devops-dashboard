import {
  Activity,
  Cpu,
  HardDrive,
  Server,
} from "lucide-react";

import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import MetricCard from "./MetricCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            Dashboard
          </h2>

          <section className="mb-8 grid grid-cols-4 gap-6">
            <MetricCard
              title="CPU"
              value="23%"
              icon={Cpu}
            />

            <MetricCard
              title="Memória"
              value="61%"
              icon={Server}
            />

            <MetricCard
              title="Disco"
              value="42%"
              icon={HardDrive}
            />

            <MetricCard
              title="API"
              value="Online"
              icon={Activity}
            />
          </section>

          <section className="mb-8 h-80 rounded-xl bg-white shadow" />

          <section className="h-80 rounded-xl bg-white shadow" />
        </main>
      </div>
    </div>
  );
}