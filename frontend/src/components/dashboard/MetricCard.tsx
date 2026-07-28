import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export default function MetricCard({
  title,
  value,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-500">
          {title}
        </h3>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <Icon
            size={20}
            className="text-slate-600"
          />
        </div>
      </div>

      <p className="mt-6 text-3xl font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}