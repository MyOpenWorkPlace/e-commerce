import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { Rating } from "react-simple-star-rating";

interface Props {
  sectionName: string;
}

function SomeClothes({ sectionName }: Props) {
  const { list } = useAppSelector((store) => store.clothes);
  const navigate = useNavigate();

  const someClothesArr = [...list].sort(() => Math.random() - 0.5).slice(0, 4);
  console.log(someClothesArr);

  return (
    <div className="grid justify-items-center xl:w-[1240px] py-12 gap-8">
      <h2 className="font-integral text-3xl">{sectionName}</h2>
      <ul className="flex gap-4 xl:justify-center w-full overflow-x-scroll xl:overflow-hidden xl:w-full">
        {someClothesArr.map((cloth, i) => (
          <li key={i} className="grid gap-2 xl:max-w-1/4 w-[200px] shrink-0">
            <img className="bg-gray-100 rounded-3xl" src={cloth.thumbnail} />
            <div>
              <h3 className="font-semibold">
                {cloth.title.split(" ").slice(0, 3).join(" ")}
              </h3>
              <div className="flex gap-3">
                <Rating allowFraction initialValue={+cloth.rating} size={20} />
                <p>{cloth.rating} / 5</p>
              </div>
              <p className="font-semibold">${cloth.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate("/clothes");
        }}
        className="border-1 font-medium border-gray-200 p-3 w-full rounded-full"
      >
        View All
      </button>
    </div>
  );
}

export default SomeClothes;
