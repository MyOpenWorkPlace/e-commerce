import { useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";
import type { Clothes } from "../types/types";

interface Props {
  cloth: Clothes;
}

function ClothCard({ cloth: { id, thumbnail, title, rating, price } }: Props) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/shop/${id}`);
      }}
      className="grid gap-2 xl:max-w-1/4 w-[200px] shrink-0"
    >
      <img className="bg-gray-100 rounded-3xl" src={thumbnail} />
      <div>
        <h3 className="font-semibold">
          {title.split(" ").slice(0, 3).join(" ")}
        </h3>
        <div className="flex gap-3">
          <Rating allowFraction initialValue={+rating} size={20} />
          <p>{rating} / 5</p>
        </div>
        <p className="font-semibold">${price}</p>
      </div>
    </li>
  );
}

export default ClothCard;
