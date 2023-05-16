// libraries
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>items</nav>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
