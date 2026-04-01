import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const fallbackData = [
  { date: "03/01", value: 100 },
  { date: "03/05", value: 110 },
  { date: "03/10", value: 105 },
  { date: "03/15", value: 122 },
  { date: "03/20", value: 115 },
  { date: "03/25", value: 135 },
  { date: "03/30", value: 145 },
];

export default function PerformanceChart({ data }) {
  const chartData = data && data.length ? data : fallbackData;

  return (
    <section className="panel chart-card" style={{ padding: "24px" }}>
      <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: "20px", color: "#f8fafc" }}>
        Portfolio Performance
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
            />

            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={{ stroke: "#334155" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#e2e8f0",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "#3b82f6" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
