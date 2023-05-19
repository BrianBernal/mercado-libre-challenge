// libraries
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";
import Page404 from "@/pages/page404/Page404";
import Profile from "@/pages/profile/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;
