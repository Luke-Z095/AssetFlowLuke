export default function AssetsPage() {
  return (
    <div className="page-stack">
      <h1 className="page-title">Assets</h1>

      <div className="stats-grid">
        <div className="stat-card">Total Assets: 24</div>
        <div className="stat-card">Active: 18</div>
        <div className="stat-card">Types: 5</div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Type</th>
              <th>Market</th>
              <th>Currency</th>
              <th>Sector</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td style={{ fontWeight: 700, color: "#60a5fa" }}>AAPL</td>
              <td>Apple Inc.</td>
              <td>Stock</td>
              <td>US</td>
              <td>USD</td>
              <td>Tech</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
