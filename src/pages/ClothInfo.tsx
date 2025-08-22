import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import { type ReactImageGalleryItem } from "react-image-gallery";
import Gallery from "../components/customGallery/Gallery";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addToCart } from "../redux/slices/authSlice";
import CompactToastContainer from "../components/CompactToastContainer";
import { toast } from "react-toastify";

function ClothInfo() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(1);
  const { list } = useAppSelector((store) => store.clothes);
  const activeUser = useAppSelector((store) => store.auth.activeUser);

  const cloth = list.find((cloth) => cloth.id === +id!)!;

  const { rating, title, price, description, images } = cloth;

  const imgsForGallery: ReactImageGalleryItem[] = images.map((img) => ({
    original: img,
    thumbnail: img,
  }))!;

  return (
    <main className="px-4 ">
      <CompactToastContainer />
      <div className="my-5 text-gray-600 ">{`Home > Shop > ${
        cloth!.category.charAt(0).toUpperCase() +
        cloth!.category.slice(1).replace(/-/g, " ")
      }`}</div>
      <div>
        <div className="hidden xl:block">
          <Gallery items={imgsForGallery} position="left" />
        </div>
        <div className="sm:block xl:hidden">
          <Gallery items={imgsForGallery} position="bottom" />
        </div>
      </div>
      <div className="grid gap-3 border-b-1 border-gray-200 pb-5 ">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <div className="flex gap-3">
          <Rating allowFraction initialValue={+rating} size={20} />
          <p>{rating} / 5</p>
        </div>
        <p className="font-semibold text-2xl">${price}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="flex justify-between gap-3 pt-6 pb-12">
        <div className="flex px-4 py-3 bg-gray-100 gap-4 rounded-full ">
          <button
            onClick={() => {
              setAmount((num) => Math.max(1, num - 1));
            }}
          >
            <FaMinus />
          </button>

          <div>{amount}</div>

          <button
            onClick={() => {
              setAmount((num) => num + 1);
            }}
          >
            <FaPlus />
          </button>
        </div>

        <button
          onClick={() => {
            if (activeUser) {
              dispatch(addToCart({ ...cloth, amount: amount }));
            } else {
              toast("You must Log In account");
            }
          }}
          className="flex-1 text-white bg-black rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ClothInfo;
