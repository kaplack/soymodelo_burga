import MyNavbar from "./MyNavbar/MyNavbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  //const loggedIn = true;

  return (
    <div>
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
