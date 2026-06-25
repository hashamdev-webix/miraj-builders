import type { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Master Admin Dashboard | Miraj Builders",
  description: "Miraj Builders operations and administration platform.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
