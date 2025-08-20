import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Shop from "../pages/Shop";
import ClothInfo from "../pages/ClothInfo";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ClothInfo />} />
          <Route path="/*" element={<div>такого раздела нету</div>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
