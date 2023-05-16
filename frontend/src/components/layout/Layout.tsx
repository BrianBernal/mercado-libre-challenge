// libraries
import { Outlet } from "react-router-dom";

// styles
import "./layout.scss";

function Layout() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <div className="profile-badge">
            <img src="profile-image.jpg" alt="Profile Image" />
            <span className="username">John Doe</span>
          </div>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
