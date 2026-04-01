export default function Holdings() {
  return (
    <div className="page-stack">
      <h1 className="page-title">Holdings</h1>

      <div className="stats-grid">
        <div className="stat-card">Total Value: $152,430</div>
        <div className="stat-card">PnL: +$2,300</div>
        <div className="stat-card">Positions: 18</div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Avg Cost</th>
              <th>Price</th>
              <th>Value</th>
              <th>PnL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td style={{ fontWeight: 700, color: "#60a5fa" }}>AAPL</td>
              <td>35</td>
              <td>$120</td>
              <td>$145</td>
              <td>$5,000</td>
              <td style={{ color: "#34d399", fontWeight: 700 }}>+$886</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
