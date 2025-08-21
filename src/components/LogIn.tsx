import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../redux/slices/authSlice";

function LogIn() {
  const users = useAppSelector((store) => store.auth.users);
  const dispatch = useAppDispatch();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          const user = users.find((user) => user.email === values.email);
          if (user) {
            if (user.password === values.password) {
              dispatch(
                login({
                  email: values.email,
                  password: values.password,
                  cart: user.cart,
                  id: user.id,
                })
              );
            } else {
              toast.error("!!! Password incorrect !!!");
            }
          } else {
            toast.error("!!! User not found !!!");
          }
        }}
      >
        <Form className="grid gap-5 border-gray-400 border-2 p-5 rounded-2xl mt-5">
          <label htmlFor="email" className="flex">
            Email: <Field className="border-b flex-1" name="email" />
          </label>
          <label htmlFor="password" className="flex">
            Password: <Field name="password" className="flex-1 border-b" />
          </label>
          <button
            className="bg-black text-white p-2 rounded-full"
            type="submit"
          >
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default LogIn;
