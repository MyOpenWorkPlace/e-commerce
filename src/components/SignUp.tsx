import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { login, signUp } from "../redux/slices/authSlice";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";

function SignUp() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((store) => store.auth.users);

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(
        /@(gmail\.com|mail\.ru)$/,
        "Email must be @gmail.com or @mail.ru"
      )
      .required("Required"),
    password: Yup.string().min(8).required("Required"),
  });

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
        validationSchema={userSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          if (users.find((user) => user.email === values.email)) {
            toast.error("!!! User already exists !!!");
          } else {
            const newUser = {
              email: values.email,
              password: values.password,
              cart: [],
              id: Date.now(),
            };
            dispatch(signUp(newUser));
            dispatch(login(newUser));
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
            Sign Up
          </button>
          <ErrorMessage
            component="div"
            className="text-black text-center"
            name="email"
          />
          <ErrorMessage
            component="div"
            className="text-black text-center"
            name="password"
          />
        </Form>
      </Formik>
    </>
  );
}

export default SignUp;
