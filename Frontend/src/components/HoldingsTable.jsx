export default function HoldingsTable({ data = [] }) {
  if (!data.length) {
    return (
      <section className="table-card">
        <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: "20px", color: "#f8fafc" }}>Top Holdings</h2>
        <div style={{ color: "#94a3b8", fontSize: "14px" }}>No holdings data</div>
      </section>
    );
  }

  return (
    <section className="table-card">
      <h2 style={{ marginTop: 0, marginBottom: "16px", fontSize: "20px", color: "#f8fafc" }}>Top Holdings</h2>

      <div style={{ overflowX: "auto" }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Asset Name</th>
              <th>Quantity</th>
              <th>Avg Cost</th>
              <th>Latest Price</th>
              <th>Market Value</th>
              <th>PnL</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => {
              const isPositive = Number(row.unrealizedPnl) >= 0;

              return (
                <tr key={row.holdingId ?? row.symbol} className="table-row">
                  <td style={{ fontWeight: 700, color: "#60a5fa" }}>{row.symbol}</td>
                  <td>{row.assetName}</td>
                  <td>{Number(row.quantity ?? 0).toFixed(4)}</td>
                  <td>${Number(row.averageCost ?? 0).toFixed(4)}</td>
                  <td>${Number(row.latestPrice ?? 0).toFixed(4)}</td>
                  <td>${Number(row.marketValue ?? 0).toLocaleString()}</td>
                  <td style={{ fontWeight: 700, color: isPositive ? "#34d399" : "#f87171" }}>
                    ${Number(row.unrealizedPnl ?? 0).toLocaleString()}
                  </td>
                  <td>{Number(row.weightPct ?? 0).toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
