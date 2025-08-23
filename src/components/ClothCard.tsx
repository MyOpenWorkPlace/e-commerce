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
      className="grid gap-2 w-[180px] xl:w-[250px] shrink-0  justify-self-center"
    >
      <div>
        <img className="bg-gray-100 rounded-3xl" src={thumbnail} />
      </div>
      <div className="overflow-hidden">
        <h3 className="font-semibold text-nowrap w-fit ">
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
