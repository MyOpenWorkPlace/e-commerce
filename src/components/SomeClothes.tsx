import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { Rating } from "react-simple-star-rating";

function SomeClothes() {
  const { list } = useAppSelector((store) => store.clothes);

  const someClothesArr = [...list].sort(() => Math.random() - 0.5).slice(0, 4);
  console.log(someClothesArr);

  return (
    <ul className="flex gap-4 w-100 overflow-scroll">
      {someClothesArr.map((cloth) => (
        <li className="w-[200px] shrink-0">
          <img className="bg-gray-100 rounded-3xl" src={cloth.thumbnail} />
          <div>
            <h3>{cloth.title}</h3>
            <div className="flex">
              {/* <img src="" alt="" /> */}
              <Rating
                className="flex"
                initialValue={2}
                size={50}
                iconsCount={3}
                fillColor="#ffd700"

                // allowFraction
              />

              <p></p>
            </div>
            <p></p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SomeClothes;
