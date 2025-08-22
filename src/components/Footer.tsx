import { Formik, Field, Form, ErrorMessage } from "formik";
import { TfiEmail } from "react-icons/tfi";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FooterNavigate from "./FooterNavigate";
import CompactToastContainer from "./CompactToastContainer";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/@(gmail\.com|mail\.ru)$/, "Email must be @gmail.com or @mail.ru")
    .required("Required"),
});

function Footer() {
  return (
    <footer className="mt-35 bg-custom-gray relative pt-58 px-4 pb-5 xl:pt-20 xl:px-20">
      <CompactToastContainer />
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={() => {
          toast("Thanks for subscribing !");
        }}
      >
        <Form className="grid w-[370px] gap-3 bg-black py-8 px-6 rounded-3xl absolute left-1/2 -translate-x-1/2 -top-30 xl:w-[90%] xl:grid-cols-2 xl:gap-60 xl:items-center">
          <h2 className="text-white font-integral text-4xl font-semibold mb-5 xl:mb-0 ">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="grid gap-3">
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
          </div>
        </Form>
      </Formik>
      <FooterNavigate />
    </footer>
  );
}

export default Footer;
