import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Shop from "../pages/Shop";
import ClothInfo from "../pages/ClothInfo";
import Auth from "../pages/Auth";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import Cart from "../pages/Cart";
import Details from "../components/Details";
import Reviews from "../components/Reviews";
import Contacts from "../pages/Contacts";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="shop/:id" element={<ClothInfo />}>
            <Route path="details" element={<Details />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<Auth />}>
            <Route path="signUp" element={<SignUp />} />
            <Route path="logIn" element={<LogIn />} />
          </Route>
          <Route path="/*" element={<div>такого раздела нету</div>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
