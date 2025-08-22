import { useParams } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { Rating } from "react-simple-star-rating";

function Reviews() {
  const { id } = useParams();
  const { list } = useAppSelector((store) => store.clothes);
  const cloth = list.find((cloth) => cloth.id === +id!)!;

  return (
    <ul className="grid gap-2 mt-5">
      {cloth.reviews.map((rev, i) => (
        <li className="border-1 border-gray-300 p-4 pt-3 rounded-2xl" key={i}>
          <Rating allowFraction initialValue={+rev.rating} size={20} />
          <h3>{rev.reviewerName}</h3>
          <p>{rev.comment}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
