import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Navigate, Outlet } from "react-router-dom";

function Layout() {
  //const loggedIn = true;

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {loggedIn ? <Outlet /> : <Navigate to="/signin" />} */}
      <Footer />
    </div>
  );
}

export default Layout;
