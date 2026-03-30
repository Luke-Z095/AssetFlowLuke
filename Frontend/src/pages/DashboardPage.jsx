import KpiCards from "../components/KpiCards";
import AllocationChart from "../components/AllocationChart";
import PerformanceChart from "../components/PerformanceChart";
import HoldingsTable from "../components/HoldingsTable";

export default function DashboardPage() {
  return (
    <div style={styles.main}>
      <KpiCards />

      <div style={styles.chartGrid}>
        <AllocationChart />
        <PerformanceChart />
      </div>

      <HoldingsTable />
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
};