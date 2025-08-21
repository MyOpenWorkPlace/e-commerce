import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import CartList from "../components/CartList";
import { clearCart } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import CompactToastContainer from "../components/CompactToastContainer";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((store) => store.auth.activeUser);
  const cartItems = activeUser && activeUser!.cart;

  return (
    <main className="p-4 pt-0">
      <CompactToastContainer />
      <div className="my-5 text-gray-600 ">{`Home > Cart`}</div>
      {(cartItems &&
        ((cartItems[0] && (
          <section className="">
            <h2 className="text-3xl font-semibold mb-5">YOUR CART</h2>
            <CartList />
            <div className="grid gap-4 border-1 border-gray-300  p-5  rounded-2xl">
              <h3 className="text-xl font-semibold border-b-1 border-gray-300 pb-3">
                Order Summary
              </h3>
              <div className="flex justify-between">
                <p className="font-normal text-gray-500">Total</p>
                <p className="text-base font-semibold">
                  {Math.floor(
                    cartItems.reduce(
                      (acc, { price, amount }) => acc + +price * amount!,
                      0
                    )
                  )}
                  $
                </p>
              </div>
              <button
                onClick={() => {
                  toast("Thanks for shopping !");
                  dispatch(clearCart());
                }}
                className="p-3 text-center flex-1  bg-black text-white rounded-full"
              >
                Buy
              </button>
            </div>
          </section>
        )) || (
          <div className="text-center text-2xl font-bold">Cart Is Empty</div>
        ))) || (
        <div className="grid gap-4 justify-center border-1 border-gray-400 p-3 rounded-2xl">
          <p>You must Log In</p>
          <button
            className="bg-black text-white p-2 rounded-2xl"
            onClick={() => {
              navigate("/auth/logIn");
            }}
          >
            Log In
          </button>
        </div>
      )}
    </main>
  );
}

export default Cart;
