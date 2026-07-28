import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

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

          {/* Cards */}
          <section className="mb-8 grid grid-cols-4 gap-6">
            <div className="h-32 rounded-xl bg-white shadow"></div>
            <div className="h-32 rounded-xl bg-white shadow"></div>
            <div className="h-32 rounded-xl bg-white shadow"></div>
            <div className="h-32 rounded-xl bg-white shadow"></div>
          </section>

          {/* Gráfico CPU */}
          <section className="mb-8 h-80 rounded-xl bg-white shadow"></section>

          {/* Gráfico Memória */}
          <section className="h-80 rounded-xl bg-white shadow"></section>
        </main>
      </div>
    </div>
  );
}