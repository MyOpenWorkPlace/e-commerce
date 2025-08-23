import ReactPaginate from "react-paginate";
import type { Clothes } from "../types/types";
import ClothCard from "./ClothCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

function Items({ currentItems }: { currentItems: Clothes[] }) {
  return (
    <ul className="grid grid-cols-2 gap-y-4 xl:gap-5 grid-rows-3 items-stretch pb-6 border-b-1 border-gray-300 mb-5 xl:grid-cols-3 xl:mt-14 flex-1">
      {currentItems &&
        currentItems.map((item) => <ClothCard key={item.id} cloth={item} />)}
    </ul>
  );
}

function Pagination({
  itemsPerPage,
  items,
}: {
  itemsPerPage: number;
  items: Clothes[];
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + +itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / +itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * +itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="xl:grid xl:mb-10">
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex justify-between items-center text-xs "
        breakLabel="..."
        nextLabel={
          <div className="flex items-center gap-2">
            Next <FaArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <div className="flex items-center gap-2">
            <FaArrowLeft /> Previous
          </div>
        }
        renderOnZeroPageCount={null}
        pageClassName="xl:px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-200 xl:text-base cursor-pointer w-6 xl:w-8 text-center"
        activeClassName="bg-black text-white"
        previousClassName="px-2 py-1 rounded-lg border-gray-300 border hover:bg-gray-200 xl:text-base cursor-pointer"
        nextClassName="px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-200 xl:text-base cursor-pointer"
      />
    </div>
  );
}

export default Pagination;
