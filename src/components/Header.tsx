import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex py-5 px-4 border-b-2 border-custom-gray">
      <button className="mr-4 xl:hidden">
        <RxHamburgerMenu className="w-6 h-6" />
      </button>
      <div className="flex justify-between w-full items-center">
        <Link className="text-[25px] font-integral font-semibold" to="/">
          F'Boutique
        </Link>
        <nav className="hidden xl:block">
          <ul className="flex">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <input
            className="hidden xl:block border-2 border-solid border-black "
            type="text"
          />
          <button className="xl:hidden">
            <IoSearch className="w-6 h-6" />
          </button>
          <button>
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
