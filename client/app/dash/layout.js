import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Umurava platform",
};

export default function DashLayout({ children }) {
  return (
    <>
      <nav>Sidebar</nav>
      {children}
    </>
  );
}
