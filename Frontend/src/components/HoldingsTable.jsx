const rows = [
  {
    symbol: "AAPL",
    assetName: "Apple Inc.",
    quantity: 35,
    currentPrice: "$145.32",
    marketValue: "$5,086",
    pnl: "+$886",
    weight: "3.3%",
  },
  {
    symbol: "QQQ",
    assetName: "Invesco QQQ ETF",
    quantity: 18,
    currentPrice: "$498.20",
    marketValue: "$8,968",
    pnl: "+$1,125",
    weight: "5.9%",
  },
  {
    symbol: "AGG",
    assetName: "iShares Core Bond",
    quantity: 42,
    currentPrice: "$98.12",
    marketValue: "$4,121",
    pnl: "+$75",
    weight: "2.7%",
  },
];

export default function HoldingsTable() {
  return (
    <section style={styles.card}>
      <h2 style={styles.title}>Top Holdings</h2>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Symbol</th>
              <th style={styles.th}>Asset Name</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Current Price</th>
              <th style={styles.th}>Market Value</th>
              <th style={styles.th}>PnL</th>
              <th style={styles.th}>Weight</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const isPositive = row.pnl.includes("+");

              return (
                <tr key={row.symbol} className="table-row">
                  <td style={styles.tdSymbol}>{row.symbol}</td>
                  <td style={styles.td}>{row.assetName}</td>
                  <td style={styles.td}>{row.quantity}</td>
                  <td style={styles.td}>{row.currentPrice}</td>
                  <td style={styles.td}>{row.marketValue}</td>

                  <td
                    style={{
                      ...styles.td,
                      color: isPositive ? "#22c55e" : "#ef4444",
                      fontWeight: 700,
                    }}
                  >
                    {row.pnl}
                  </td>

                  <td style={styles.td}>{row.weight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    fontSize: "13px",
    color: "#94a3b8",
    borderBottom: "1px solid #334155",
    fontWeight: 500,
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #1e293b",
    color: "#e2e8f0",
    fontSize: "14px",
  },

  tdSymbol: {
    padding: "14px",
    borderBottom: "1px solid #1e293b",
    color: "#3b82f6",
    fontWeight: 700,
  },
};