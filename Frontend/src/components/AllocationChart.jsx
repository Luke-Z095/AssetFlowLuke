import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Stocks", value: 35 },
  { name: "Funds/ETF", value: 25 },
  { name: "Bonds", value: 20 },
  { name: "Cash", value: 20 },
];

const COLORS = ["#3b82f6", "#14b8a6", "#f59e0b", "#a855f7"];

export default function AllocationChart() {
  return (
    <section className="chart-card" style={styles.card}>
      <h2 style={styles.title}>Asset Allocation</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={110}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#e2e8f0",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />

            <Legend
              wrapperStyle={{
                color: "#94a3b8",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "24px",
  },
  title: {
    marginTop: 0,
    marginBottom: "16px",
    color: "#e2e8f0",
    fontSize: "20px",
  },
};