import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.ecommerce;
  });

  function trimContent(input, length) {
    return input.length > length
      ? input.split(" ").slice(0, length).join(" ") + "..."
      : input;
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (initState.loading) return <Loader />;

  return (
    <>
      <div className="products flex flex-wrap justify-around items-center gap-4 px-12 bg-gray-100">
        {initState.products.map((obj) => {
          return (
            <div
              key={obj.id}
              className="product w-[23%] h-72 p-2 my-6 relative bg-white rounded-2xl drop-shadow-2xl"
            >
              <Link to={`/product/${obj.id}`}>
                <img className="w-full h-1/2 object-contain" src={obj.image} />
              </Link>

              <div className="h-1/2">
                <h3>
                  <Link to={`/product/${obj.id}`}>
                    {trimContent(obj.title, 10)}
                  </Link>
                </h3>
                <p className="font-bold text-2xl absolute w-full left-4 bottom-4">
                  ${obj.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
