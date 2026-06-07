import { type Metric } from "@/types/portfolio";

interface MetricCardProps {
  metric: Metric;
  delay?: number;
}

export default function MetricCard({ metric, delay = 0 }: MetricCardProps) {
  return (
    <div
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold">{metric.value}</h3>
      <p className="mt-2 font-medium">{metric.title}</p>
      <p className="text-sm text-zinc-400 mt-2">{metric.description}</p>
    </div>
  );
}
