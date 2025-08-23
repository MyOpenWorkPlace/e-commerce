import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { fetchClothes } from "../redux/slices/clothesSlice";
import Loader from "./Loader";

function Layout() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((store) => store.clothes);

  useEffect(() => {
    !localStorage.getItem("users") &&
      localStorage.setItem("users", JSON.stringify([]));
    const promise = dispatch(fetchClothes());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <div className="w-[390px] min-h-dvh mx-auto my-0 font-satoshi grid xl:w-[1240px] overflow-x-hidden content-between">
      {(loading && <Loader />) || (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
