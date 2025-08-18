import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Clothes from "../pages/Clothes";
import ClothInfo from "../pages/ClothInfo";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="clothes/:id" element={<ClothInfo />} />
          <Route path="/*" element={<div>такого раздела нету</div>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
