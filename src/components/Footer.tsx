import { Formik, Field, Form, ErrorMessage } from "formik";
import { TfiEmail } from "react-icons/tfi";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import FooterNavigate from "./FooterNavigate";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function Footer() {
  return (
    <footer className="mt-40 bg-custom-gray relative pt-58 px-4 pb-5">
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
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={() => {
          toast("Thanks for subscribing !");
        }}
      >
        <Form className="grid w-[370px] gap-3 bg-black py-8 px-6 rounded-3xl absolute left-1/2 -translate-x-1/2 -top-30">
          <h2 className="text-white font-integral text-4xl font-semibold mb-5">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <label
            className="flex items-center gap-3 rounded-full bg-white py-3 px-4 w-full"
            htmlFor="email"
          >
            <TfiEmail />
            <Field
              className="w-10/12"
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
          </label>
          <ErrorMessage
            component="div"
            className="text-white text-center"
            name="email"
          />

          <button type="submit" className="p-3 rounded-full bg-white">
            Subscribe to Newsletter
          </button>
        </Form>
      </Formik>
      <FooterNavigate />
    </footer>
  );
}

export default Footer;
