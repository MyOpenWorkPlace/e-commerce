import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import FiltersOptions from "./FiltersOptions";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { updateItems } from "../redux/slices/filteredItemsSlice";
import { toast } from "react-toastify";

function Filters() {
  const [filtersState, setFiltersState] = useState(false);
  const { list } = useAppSelector((store) => store.clothes);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const filteredArr = list
    .filter((el) => {
      if (searchParams.getAll("brand")[0]) {
        const brand =
          (el.brand && el.brand.split(" ").slice(0, 1).join("")) ||
          "No Name Brands";
        return searchParams.getAll("brand").includes(brand);
      }
      return el;
    })
    .filter((el) => {
      if (searchParams.getAll("category")[0]) {
        return searchParams.getAll("category").includes(el.category);
      }
      return el;
    })
    .filter((el) => {
      if (searchParams.get("minPrice") && !searchParams.get("maxPrice")) {
        return el.price >= searchParams.get("minPrice")!;
      }
      if (!searchParams.get("minPrice") && searchParams.get("maxPrice")) {
        return el.price <= searchParams.get("maxPrice")!;
      }
      if (searchParams.get("minPrice") && searchParams.get("maxPrice")) {
        return (
          searchParams.get("minPrice")! < el.price &&
          el.price < searchParams.get("maxPrice")!
        );
      }
      return el;
    });

  useEffect(() => {
    dispatch(updateItems(filteredArr));
    if (!filteredArr[0]) {
      toast("Nothing found");
    }
  }, [searchParams]);

  return (
    <div className="flex-1">
      <div className="my-4  flex justify-between  xl:px-0">
        <p className="text-gray-600">{`Home > Shop`}</p>
        <button
          className="p-2 bg-gray-200 rounded-full flex mr-2 xl:hidden"
          onClick={() => {
            setFiltersState(true);
          }}
        >
          {<GiSettingsKnobs />}
        </button>
      </div>

      <div className="xl:hidden">
        <AnimatePresence>
          {filtersState && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setFiltersState(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="absolute bg-white z-100 -top-6 w-full h-[880px] rounded-2xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5 }}
              >
                <FiltersOptions resp="mob" setFiltersState={setFiltersState} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden xl:block">
        <FiltersOptions setFiltersState={setFiltersState} resp="desk" />
      </div>
    </div>
  );
}

export default Filters;
