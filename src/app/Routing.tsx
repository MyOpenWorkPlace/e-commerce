import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<div>такой ссылки нету</div>}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
