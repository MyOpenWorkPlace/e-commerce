import { Formik, Field, Form } from "formik";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <footer className="mt-46 bg-custom-gray px-4 relative pt-55">
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className="grid w-[370px] gap-3 bg-black py-8 px-6 rounded-3xl absolute -top-30">
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

          <button type="submit" className="p-3 rounded-full bg-white">
            Subscribe to Newsletter
          </button>
        </Form>
      </Formik>
    </footer>
  );
}

export default Footer;
