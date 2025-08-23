import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { CgTrash } from "react-icons/cg";
import { removeToCart } from "../redux/slices/authSlice";
import { useNavigate } from "react-router";

function CartList() {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((store) => store.auth.activeUser);
  const navigate = useNavigate();

  const cartItems = activeUser && activeUser!.cart;

  return (
    <ul className="border-1 border-gray-300 px-3   rounded-2xl mb-5 xl:text-xl">
      {cartItems!.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              navigate(`/shop/${item.id}`);
            }}
            className="flex border-b-1 border-gray-300 relative py-3"
          >
            <div className="w-[100px] xl:w-[150px]">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="w-50 text-base font-semibold xl:text-2xl xl:text-nowrap">
                {item.title}
              </p>
              <p>Brand: {(item.brand && item.brand) || "none"}</p>
              <p>Amount: {item.amount}</p>
              <p className="w-50 text-xl font-semibold xl:text-2xl">
                {item.price}$
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeToCart(item.id));
              }}
              className="absolute right-1 top-3"
            >
              <CgTrash className="text-red-600 w-5 h-5" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CartList;
