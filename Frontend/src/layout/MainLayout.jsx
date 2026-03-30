import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div style={styles.page}>
      <aside style={styles.sidebarWrap}>
        <Sidebar />
      </aside>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a", // 深色背景
  },
  sidebarWrap: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "260px",
    height: "100vh",
    background: "#020617", // 更深一点（层次感）
    borderRight: "1px solid #1e293b",
  },
  main: {
    marginLeft: "260px",
    minHeight: "100vh",
    padding: "24px",
  },
};