import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  //const loggedIn = true;

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
