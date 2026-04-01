import { Link, useLocation } from "react-router-dom";

const items = [
  { name: "Dashboard", path: "/" },
  { name: "Assets", path: "/assets" },
  { name: "Holdings", path: "/holdings" },
  { name: "Transactions", path: "/transactions" },
  { name: "Analytics", path: "/analytics" },
  { name: "AI Insights", path: "/ai" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside style={{ height: "100%", background: "#020617", padding: "24px 16px" }}>
      <div
        style={{
          marginBottom: "24px",
          borderBottom: "1px solid #1e293b",
          paddingBottom: "14px",
          color: "#f1f5f9",
          fontSize: "20px",
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        AssetFlow
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
