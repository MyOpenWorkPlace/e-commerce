import { Field, Formik, Form } from "formik";
import { useSearchParams } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { useEffect } from "react";
import FilterList from "./FilterList";
import CompactToastContainer from "./CompactToastContainer";
import { toast } from "react-toastify";

function FiltersOptions({ setFiltersState }: { setFiltersState: Function }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { list } = useAppSelector((store) => store.clothes);
  const filteredArr = useAppSelector(
    (store) => store.filteredItems.filteredItems
  );

  const setParams = (params: {
    category: string[];
    brand: string[];
    maxPrice: string;
    minPrice: string;
  }) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.delete("category");
    newSearchParams.delete("brand");
    newSearchParams.delete("maxPrice");
    newSearchParams.delete("minPrice");

    params.category.forEach((el) => {
      newSearchParams.append("category", el);
    });
    params.brand.forEach((el) => {
      newSearchParams.append("brand", el);
    });

    params.maxPrice && newSearchParams.append("maxPrice", params.maxPrice);
    params.minPrice && newSearchParams.append("minPrice", params.minPrice);

    setSearchParams(newSearchParams);
  };

  const categoryList = [...new Set(list.map((el) => el.category))];
  const brandList = [
    ...new Set(
      list.map(
        (el) =>
          (el.brand && el.brand.split(" ").slice(0, 1).join("")) ||
          "No Name Brands"
      )
    ),
  ];

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <Formik
      initialValues={{
        category: [],
        brand: [],
        maxPrice: "",
        minPrice: "",
      }}
      onSubmit={(values) => {
        setParams(values);
        setFiltersState(false);
      }}
    >
      <Form className="rounded-2xl p-5 border-1 border-gray-300 h-full flex flex-col">
        <div className="flex justify-between border-b-1 border-gray-300 pb-1">
          <h3 className="text-xl font-semibold">Category</h3>
          <button type="button" onClick={() => setFiltersState(false)}>
            X
          </button>
        </div>
        <FilterList name="category" list={categoryList} />

        <h3 className="pb-1 border-b-1 border-gray-300 text-xl font-semibold">
          Brands
        </h3>
        <FilterList name="brand" list={brandList} />

        <h3 className="border-b-1 border-gray-300 pb-1 mb-2 text-xl font-semibold">
          Price
        </h3>
        <div className="grid text-nowrap gap-2 mb-3 ">
          <label htmlFor="" className="flex">
            Min Price:
            <Field
              name="minPrice"
              type="number"
              className="border-1 mx-2 border-gray-400 w-20"
            />
            $
          </label>
          <label htmlFor="">
            Max Price:
            <Field
              name="maxPrice"
              type="number"
              className="border-1 mx-1 mr-2 border-gray-400 w-20"
            />
            $
          </label>
        </div>

        <button type="submit" className="bg-black text-white p-3 rounded-3xl">
          Apply Filter
        </button>
      </Form>
    </Formik>
  );
}

export default FiltersOptions;
