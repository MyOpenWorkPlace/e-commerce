import { useParams } from "react-router";

function ClothInfo() {
  const { id } = useParams();
  console.log(id);

  return <div>ClothInfo</div>;
}

export default ClothInfo;
