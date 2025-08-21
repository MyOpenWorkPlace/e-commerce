import Filters from "../components/Filters";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Shop() {
  const { list } = useAppSelector((store) => store.clothes);

  return (
    <main>
      <div className="my-5 text-gray-600 ">{`Home > Shop`}</div>
      <section className="pt-7 ">
        <Filters itemsPerPage={6} items={list} />
      </section>
    </main>
  );
}

export default Shop;
