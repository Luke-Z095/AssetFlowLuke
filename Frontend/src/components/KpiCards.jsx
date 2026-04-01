export default function KpiCards({ data }) {
  if (!data || !data.summary) {
    return <div style={{ color: "#f8fafc" }}>Loading...</div>;
  }

  const summary = data.summary;

  const kpis = [
    {
      label: "Total Market Value",
      value: `$${Number(summary.totalMarketValue ?? 0).toLocaleString()}`,
      positive: true,
    },
    {
      label: "Total Return",
      value: `${summary.returnPct ?? 0}%`,
      positive: true,
    },
    {
      label: "Holding Count",
      value: summary.holdingCount ?? 0,
      positive: false,
    },
    {
      label: "PnL",
      value: `$${Number(summary.unrealizedPnl ?? 0).toLocaleString()}`,
      positive: true,
    },
  ];

  return (
    <section className="panel" style={{ padding: "20px 24px" }}>
      <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: "20px", color: "#f8fafc" }}>Summary</h2>

      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        {kpis.map((item) => (
          <div
            key={item.label}
            className="kpi-card"
            style={{
              border: "1px solid #334155",
              borderRadius: "8px",
              background: "#0f172a",
              padding: "16px",
            }}
          >
            <div style={{ marginBottom: "6px", fontSize: "12px", fontWeight: 500, color: "#94a3b8" }}>
              {item.label}
            </div>
            <div style={{ fontSize: "26px", fontWeight: 700, color: item.positive ? "#34d399" : "#f1f5f9" }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
