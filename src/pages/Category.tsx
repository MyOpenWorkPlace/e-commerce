import { useAppSelector } from "../redux/reduxHooks/reduxHooks";

function Category() {
  const { list, loading } = useAppSelector((s) => s.clothes);

  return <div>{list.map((el) => el.title + "... ")}</div>;
}

export default Category;
