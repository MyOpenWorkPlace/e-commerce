import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import SidebarNav from "./SidebarNav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";

function Header() {
  const navigate = useNavigate();
  const [sidebarState, setSidebarState] = useState(false);
  const [searchState, setSearchState] = useState(false);

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-bold  border-b-2 border-black"
      : "text-gray-700 font-bold";

  return (
    <header className="flex py-5 px-4 border-b-2 border-custom-gray relative xl:px-20">
      <button
        onClick={() => {
          setSidebarState(true);
        }}
        className="mr-4 xl:hidden"
      >
        <RxHamburgerMenu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {sidebarState && (
          <motion.div
            className="top-0 left-0 absolute bg-white z-50"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4 }}
          >
            <SidebarNav setState={setSidebarState} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between w-full items-center">
        <Link className="text-[25px] font-integral font-semibold" to="/">
          F'Boutique
        </Link>
        <nav className="hidden xl:block ">
          <ul className="flex gap-10">
            <li>
              <NavLink className={activeLink} to="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setSearchState(true);
            }}
            className=""
          >
            <IoSearch className="w-6 h-6" />
          </button>
          <Search searchState={{ searchState, setSearchState }} />
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            <CgShoppingCart className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              navigate("/auth");
            }}
          >
            <FaRegUserCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
