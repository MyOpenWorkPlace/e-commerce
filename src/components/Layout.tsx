import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/reduxHooks/reduxHooks";
import { fetchClothes } from "../redux/slices/clothesSlice";

function Layout() {
  const dispatch = useAppDispatch();
  // const { list, loading } = useAppSelector((s) => s.clothes);
  useEffect(() => {
    const promise = dispatch(fetchClothes());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <div className="w-[390px] mx-auto my-0 font-satoshi grid xl:w-[1240px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
