import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar-wrap">
        <Sidebar />
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
