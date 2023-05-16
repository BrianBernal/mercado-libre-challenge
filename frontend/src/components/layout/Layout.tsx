// libraries
import { Outlet } from "react-router-dom";

// styles
import "./layout.scss";

function Layout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}

export default Layout;
