// libraries
import { Outlet } from "react-router-dom";

// styles
import "./layout.scss";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">items</div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
