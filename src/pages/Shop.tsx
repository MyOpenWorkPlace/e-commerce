import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Shop() {
  const { list } = useAppSelector((store) => store.clothes);
  const { filteredItems } = useAppSelector((store) => store.filteredItems);

  return (
    <main>
      <section className="relative">
        <Filters />
        <Pagination
          itemsPerPage={6}
          items={(filteredItems[0] && filteredItems) || list}
        />
      </section>
    </main>
  );
}

export default Shop;
