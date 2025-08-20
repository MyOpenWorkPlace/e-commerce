import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Shop() {
  const { list, loading } = useAppSelector((store) => store.clothes);

  return <div>{list.map((el) => el.title + "... ")}</div>;
}

export default Shop;
