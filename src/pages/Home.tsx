import { useNavigate } from "react-router";
import models from "../assets/images/models.png";
import SomeClothes from "../components/SomeClothes";
import Reviews from "../components/Reviews";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="bg-custom-gray">
        <div>
          <div className="grid gap-5 px-4 pt-10">
            <h1 className="text-4xl font-integral font-semibold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-sm ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button
              onClick={() => {
                navigate("/shop");
              }}
              className="bg-black text-white p-4 rounded-full"
            >
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
          <div className=" overflow-hidden">
            <img className="h-112 object-cover object-[89%] " src={models} />
          </div>
        </div>
        <ul className="bg-black py-10 px-4 gap-y-5 text-2xl text-white grid grid-cols-3 justify-items-center">
          <li>VERSACE</li>
          <li className="italic font-serif">ZARA</li>
          <li className="font-serif">GUCCI</li>
          <div className="flex col-span-3 gap-8 ">
            <li className="font-black">PRADA</li>
            <li className="font-thin">Calvin Klein</li>
          </div>
        </ul>
      </section>
      <section className="grid justify-center ">
        {<SomeClothes sectionName="NEW ARRIVALS" />}
      </section>

      <section>{<Reviews />}</section>
    </main>
  );
}

export default Home;
