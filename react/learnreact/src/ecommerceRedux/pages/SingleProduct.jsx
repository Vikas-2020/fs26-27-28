import { useEffect } from "react";
import { fetchSingleProduct } from "../slices/productSlice";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initState = useSelector((state) => state.ecommerce);

  const authState = useSelector((state) => state.auth);

  function handleAddToCart() {
    if (!authState.isLoggedIn) {
      navigate(`/login/?referer=${window.location.pathname}`);
    }
  }

  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchSingleProduct(id));
  }, [id]);

  if (initState.loading) return <Loader />;

  return (
    <div className="single-product-container flex flex-wrap md:flex-nowrap justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="product-image w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          className="w-full max-w-lg rounded-2xl"
          src={initState.singleProduct.image}
          alt={initState.singleProduct.title}
        />
      </div>

      <div className="product-details w-full md:w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4">
          {initState.singleProduct.title}
        </h1>

        <ul className="text-gray-600 mb-4">
          <li>
            <strong>Brand:</strong> {initState.singleProduct.brand || "N/A"}
          </li>
          <li>
            <strong>Category:</strong>{" "}
            {initState.singleProduct.category || "N/A"}
          </li>
          <li>
            <strong>Color:</strong> {initState.singleProduct.color || "N/A"}
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          {initState.singleProduct.description}
        </p>
        <p className="text-2xl font-bold text-green-600 mb-6">
          ${initState.singleProduct.price}
        </p>

        <div className="buttons flex gap-4">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 border-2 border-green-400 bg-green-400 text-white rounded-2xl hover:bg-green-500"
          >
            Add to Cart
          </button>
          <button className="px-4 py-2 border-2 border-pink-400 bg-pink-400 text-white rounded-2xl hover:bg-pink-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
