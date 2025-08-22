import { useRef } from "react";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { Rating } from "react-simple-star-rating";

function TopReviews() {
  const { list } = useAppSelector((store) => store.clothes);
  const containerRef = useRef<HTMLUListElement>(null);

  const reviewsArr = [...list]
    .sort(() => Math.random() - 0.5)
    .map(({ reviews }) => reviews)
    .flat()
    .filter(({ rating }) => rating === 5);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -406, behavior: "smooth" });
  };
  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 406, behavior: "smooth" });
  };

  return (
    <div className="grid justify-items-center gap-6">
      <div className="flex items-end xl:justify-between xl:w-full xl:px-20">
        <h2 className="font-integral text-3xl">OUR HAPPY CUSTOMERS</h2>
        <div className="flex text-4xl gap-4">
          <button onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <ul ref={containerRef} className="flex gap-4 w-full overflow-hidden">
        {reviewsArr.map((review, i) => (
          <li key={i} className="grid gap-2  w-full shrink-0 xl:w-max">
            <div className="grid border-2 border-gray-200 p-6 rounded-2xl ">
              <Rating allowFraction initialValue={+review.rating} size={30} />
              <h3 className="font-semibold">{review.reviewerName}</h3>
              <p>{review.reviewerEmail}</p>
              <p>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopReviews;
