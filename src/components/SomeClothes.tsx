import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import ClothCard from "./ClothCard";

interface Props {
  sectionName: string;
}

function SomeClothes({ sectionName }: Props) {
  const { list } = useAppSelector((store) => store.clothes);
  const navigate = useNavigate();

  const someClothesArr = [...list].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <div className="grid justify-items-center xl:w-[1240px] py-12 gap-8">
      <h2 className="font-integral text-3xl">{sectionName}</h2>
      <ul className="flex gap-4 xl:justify-center w-full overflow-x-scroll xl:overflow-hidden xl:w-full">
        {someClothesArr.map((cloth) => (
          <ClothCard key={cloth.id} cloth={cloth} />
        ))}
      </ul>
      <button
        onClick={() => {
          navigate("/shop");
        }}
        className="border-1 font-medium border-gray-200 p-3 w-full rounded-full"
      >
        View All
      </button>
    </div>
  );
}

export default SomeClothes;
