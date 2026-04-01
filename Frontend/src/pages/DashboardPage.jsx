import { useEffect, useState } from "react";
import { getDashboardOverview } from "../api/dashboardApi";

import KpiCards from "../components/KpiCards";
import AllocationChart from "../components/AllocationChart";
import PerformanceChart from "../components/PerformanceChart";
import HoldingsTable from "../components/HoldingsTable";

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const data = await getDashboardOverview();
        setDashboardData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return <div style={{ color: "#cbd5e1" }}>Loading dashboard...</div>;
  }

  if (error) {
    return <div style={{ color: "#f87171" }}>{error}</div>;
  }

  return (
    <div className="page-stack">
      <KpiCards data={dashboardData} />

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        <AllocationChart data={dashboardData?.allocation || []} />
        <PerformanceChart />
      </div>

      <HoldingsTable data={dashboardData?.topHoldings || []} />
    </div>
  );
}
