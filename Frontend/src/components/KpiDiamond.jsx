import { useState } from "react";

const items = [
  {
    key: "marketValue",
    label: "Total Market Value",
    value: "$152,430",
    color: "#dc2626",
    points: "50,8 92,50 50,50",
  },
  {
    key: "totalReturn",
    label: "Total Return",
    value: "+12.8%",
    color: "#ef4444",
    points: "50,8 50,50 8,50",
  },
  {
    key: "holdingCount",
    label: "Holding Count",
    value: "18",
    color: "#b91c1c",
    points: "8,50 50,50 50,92",
  },
  {
    key: "lastUpdate",
    label: "Last Update",
    value: "2026-03-30",
    color: "#991b1b",
    points: "50,50 92,50 50,92",
  },
];

export default function KpiDiamond() {
  const [active, setActive] = useState(items[0]);

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>KPI Overview</h2>

      <div style={styles.content}>
        <div style={styles.left}>
          <svg viewBox="0 0 100 100" style={styles.svg}>
            {items.map((item) => (
              <polygon
                key={item.key}
                points={item.points}
                fill={active.key === item.key ? item.color : "#7f1d1d"}
                stroke="#f8fafc"
                strokeWidth="2"
                style={{
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  filter: active.key === item.key ? "brightness(1.1)" : "none",
                }}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
              />
            ))}
          </svg>
        </div>

        <div style={styles.right}>
          <div style={styles.label}>{active.label}</div>
          <div style={styles.value}>{active.value}</div>
          <div style={styles.tip}>Hover or click each triangle to switch KPI</div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "24px",
  },
  heading: {
    marginTop: 0,
    marginBottom: "20px",
    color: "#e2e8f0",
    fontSize: "20px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  left: {
    width: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    width: "180px",
    height: "180px",
  },
  right: {
    flex: 1,
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "16px",
    background: "#0f172a",
    border: "1px solid #334155",
  },
  label: {
    color: "#94a3b8",
    fontSize: "15px",
    marginBottom: "10px",
  },
  value: {
    color: "#f8fafc",
    fontSize: "38px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  tip: {
    color: "#64748b",
    fontSize: "13px",
  },
};