import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="w-[390px] mx-auto my-0 font-satoshi grid xl:w-[1240px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
