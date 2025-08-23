import { NavLink, Outlet, useNavigate } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function Auth() {
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.auth.activeUser);
  const dispatch = useDispatch();

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-bold  border-b-2 border-black"
      : "text-gray-700 font-bold";

  useEffect(() => {
    !user && navigate("logIn");
  }, []);

  return (
    <main>
      {!user && (
        <section className="grid justify-center p-4 grid-cols-1 xl:justify-items-center">
          <div className="flex gap-5 justify-center ">
            <NavLink className={activeLink} to="logIn">
              Log In
            </NavLink>
            <NavLink className={activeLink} to="signUp">
              Sign Up
            </NavLink>
          </div>
          <Outlet />
        </section>
      )}
      {user && (
        <section className="grid justify-center gap-4 p-4 text-2xl border-b-gray-200 border-b-2 xl:justify-self-center">
          <span className="">User Mail : {user.email}</span>

          <button
            onClick={() => {
              dispatch(logout());
              navigate("logIn");
            }}
            className="bg-black text-white p-2 rounded-full"
          >
            Log Out
          </button>
        </section>
      )}
    </main>
  );
}
