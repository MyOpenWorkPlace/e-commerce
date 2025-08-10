// useEffect(() => {
//   const a = async () => {
//     const { data } = await axios.get(
//       "https://dummyjson.com/c/4548-4aa9-43ad-8506"
//     );
//     console.log(data);
//   };

//   a();
// });

import Routing from "./Routing";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
