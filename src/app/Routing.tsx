import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
