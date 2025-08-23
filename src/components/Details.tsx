import { useParams } from "react-router";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Details() {
  const { id } = useParams();
  const { list } = useAppSelector((store) => store.clothes);
  const cloth = list.find((cloth) => cloth.id === +id!)!;

  return (
    <div className="grid gap-3 p-4 xl:p-10 xl:text-2xl mt-5 border-1 border-gray-300 rounded-2xl xl:w-full">
      <div>
        <h3 className="text-base font-semibold xl:text-2xl">Title:</h3>{" "}
        {cloth.title}
      </div>
      <div>
        <h3 className="text-base font-semibold xl:text-2xl">Size:</h3>
        {cloth.dimensions.width} width, {cloth.dimensions.height} height
      </div>
      <div>
        <h3 className="text-base font-semibold xl:text-2xl">Category:</h3>{" "}
        {cloth.category}
      </div>
    </div>
  );
}

export default Details;
