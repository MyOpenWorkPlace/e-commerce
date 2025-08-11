import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Category from "../pages/Category";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="/*" element={<div>такого раздела нету</div>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
