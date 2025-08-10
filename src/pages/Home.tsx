import models from "../assets/images/models.png";
import { fetchClothes } from "../redux/slices/clothesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks/reduxHooks";
import Loader from "../components/Loader";

function Home() {
  const dispatch = useAppDispatch();
  const { list, loading, error } = useAppSelector((s) => s.clothes);

  useEffect(() => {
    const promise = dispatch(fetchClothes());
    return () => promise.abort();
  }, [dispatch]);

  return (
    <>
      {(loading && <Loader />) || (
        <main>
          <section className="bg-custom-gray">
            <div>
              <div className="grid gap-5 px-4 pt-10">
                <h1 className="text-4xl font-integral font-semibold">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-sm ">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <button className="bg-black text-white p-4 rounded-full">
                  Shop Now
                </button>
                <ul className="grid grid-cols-2 justify-items-center  gap-y-3">
                  <li>
                    <h3 className="text-2xl font-normal">200+</h3>
                    <p className="text-xs">International Brands</p>
                  </li>
                  <li>
                    <h3 className="text-2xl font-normal">2,000+</h3>
                    <p className="text-xs">High-Quality Products</p>
                  </li>
                  <li className="col-span-2">
                    <h3 className="text-2xl font-normal">30,000+</h3>
                    <p className="text-xs">Happy Customers</p>
                  </li>
                </ul>
              </div>
              <img src={models} alt="" />
            </div>
            <div></div>
          </section>
          <section>{list.map((el) => el.title + "... ")}</section>
        </main>
      )}
    </>
  );
}

export default Home;
