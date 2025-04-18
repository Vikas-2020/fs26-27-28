import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig";
import { cartContext } from "../contexts/CartContext";

function Singleproduct() {
  const { id } = useParams(); //{id:2}
  const [product, setProduct] = useState({});
  const { handleAddToCart } = useContext(cartContext);

  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  async function getSingleProductData(id) {
    const response = await instance.get(`/products/${id}`);
    console.log(response.data.product);
    setProduct(response.data.product);
  }

  return (
    <div className="single-product-container flex flex-wrap md:flex-nowrap justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="product-image w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          className="w-full max-w-lg rounded-2xl"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="product-details w-full md:w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <ul className="text-gray-600 mb-4">
          <li>
            <strong>Brand:</strong> {product.brand || "N/A"}
          </li>
          <li>
            <strong>Category:</strong> {product.category || "N/A"}
          </li>
          <li>
            <strong>Color:</strong> {product.color || "N/A"}
          </li>
        </ul>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-6">
          ${product.price}
        </p>
        <div className="buttons flex gap-4">
          <button
            className="px-4 py-2 border-2 border-green-400 bg-green-400 text-white rounded-2xl hover:bg-green-500"
            onClick={() => handleAddToCart(product)}
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

export default Singleproduct;
