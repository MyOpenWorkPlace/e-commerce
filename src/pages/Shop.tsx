import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Shop() {
  const { list } = useAppSelector((store) => store.clothes);
  const { filteredItems } = useAppSelector((store) => store.filteredItems);

  return (
    <main>
      <section className="relative xl:flex xl:gap-5 xl:px-20">
        <Filters />
        <div className="xl:hidden">
          <Pagination
            itemsPerPage={6}
            items={(filteredItems[0] && filteredItems) || list}
          />
        </div>
        <div className="hidden xl:block">
          <Pagination
            itemsPerPage={9}
            items={(filteredItems[0] && filteredItems) || list}
          />
        </div>
      </section>
    </main>
  );
}

export default Shop;
