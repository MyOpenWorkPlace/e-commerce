import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { useState } from "react";
import type { Clothes } from "../types/types";
import { useNavigate } from "react-router";

interface Props {
  searchState: {
    searchState: boolean;
    setSearchState: Function;
  };
}

function Search({ searchState: { searchState, setSearchState } }: Props) {
  const [searchArr, setSearchArr] = useState<Clothes[]>([]);
  const { list } = useAppSelector((store) => store.clothes);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {searchState && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSearchState(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="absolute z-100 w-full rounded-2xl bg-gray-200 p-3 top-4 left-1/2 -translate-x-1/2 "
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <input
              onChange={(e) => {
                const value = e.target.value;
                if (value.length >= 2) {
                  setSearchArr(
                    list.filter((el) => el.title.toLowerCase().includes(value))
                  );
                } else {
                  setSearchArr([]);
                }
              }}
              className="w-full border-1 p-2 rounded-xl"
              type="text"
            />
            {searchArr[0] && (
              <ul className="overflow-y-scroll mt-2 max-h-[200px]">
                {searchArr.map((el) => (
                  <li
                    key={el.id}
                    onClick={() => {
                      navigate(`/shop/${el.id}/details`);
                      setSearchState(false);
                      setSearchArr([]);
                    }}
                  >
                    <img className="w-15" src={el.thumbnail} alt="" />
                    {el.title}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Search;
