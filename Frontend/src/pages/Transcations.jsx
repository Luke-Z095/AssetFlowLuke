export default function Transactions() {
  return (
    <div className="page-stack">
      <h1 className="page-title">Transactions</h1>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>2026-03-30</td>
              <td style={{ fontWeight: 700, color: "#60a5fa" }}>AAPL</td>
              <td>BUY</td>
              <td>10</td>
              <td>$150</td>
              <td>Main</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
