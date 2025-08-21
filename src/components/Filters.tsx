import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import ReactPaginate from "react-paginate";
import ClothCard from "./ClothCard";
import type { Clothes } from "../types/types";

function Items({ currentItems }: { currentItems: Clothes[] }) {
  return (
    <ul className="grid grid-cols-2 gap-y-4 pb-6 border-b-1 border-gray-300 mb-5">
      {currentItems &&
        currentItems.map((item) => <ClothCard key={item.id} cloth={item} />)}
    </ul>
  );
}

function Filters({
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
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex justify-between items-center text-xs"
        breakLabel="..."
        nextLabel={
          <div className="flex items-center gap-1">
            Next <FaArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <div className="flex items-center gap-1">
            <FaArrowLeft /> Previous
          </div>
        }
        renderOnZeroPageCount={null}
        pageClassName="px-2 py-1 rounded-lg text-gray-600 hover:bg-gray-200"
        activeClassName="bg-black text-white"
        previousClassName="px-1 py-1 rounded-lg border-gray-300 border hover:bg-gray-200"
        nextClassName="px-1 py-1 rounded-lg border border-gray-300 hover:bg-gray-200"
      />
    </>
  );
}

export default Filters;
