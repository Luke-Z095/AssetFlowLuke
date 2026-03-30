const kpis = [
  { label: "Total Market Value", value: "$152,430", color: "#22c55e" },
  { label: "Total Return", value: "+12.8%", color: "#22c55e" },
  { label: "Holding Count", value: "18", color: "#e2e8f0" },
  { label: "Last Update", value: "2026-03-30", color: "#94a3b8" },
];

export default function KpiCards() {
  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>KPI</h2>

      <div style={styles.grid}>
        {kpis.map((item) => (
          <div key={item.label} className="kpi-card" style={styles.card}>
            <div style={styles.label}>{item.label}</div>
            <div style={{ ...styles.value, color: item.color }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "20px 24px",
  },
  heading: {
    marginTop: 0,
    marginBottom: "18px",
    color: "#e2e8f0",
    fontSize: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  card: {
    border: "1px solid #334155",
    borderRadius: "14px",
    padding: "16px",
    background: "#0f172a",
    transition: "all 0.2s ease",
  },
  label: {
    fontSize: "13px",
    color: "#94a3b8",
    marginBottom: "6px",
  },
  value: {
    fontSize: "26px",
    fontWeight: 700,
  },
};