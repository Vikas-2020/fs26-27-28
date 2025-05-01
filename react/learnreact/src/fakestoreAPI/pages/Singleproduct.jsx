import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import instance from "../axiosConfig";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

function Singleproduct() {
  const { id } = useParams(); //{id:2}
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  const db = getFirestore();

  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  async function getSingleProductData(id) {
    setLoading(true);
    const response = await instance.get(`/products/${id}`);
    console.log(response.data.product);
    setProduct(response.data.product);
    setLoading(false);
  }

  async function handleAddToCollection(collectionName, product) {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const docRef = doc(db, collectionName, `${user.uid}_${product.id}`);
      await setDoc(docRef, { ...product, userId: user.uid });
      console.log(`${product.title} added to ${collectionName}`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
    }
  }

  if (loading)
    return (
      <div
        role="status"
        className="min-h-screen flex justify-center items-center"
      >
        <svg
          aria-hidden="true"
          className="w-48 h-48 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

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
            onClick={() => handleAddToCollection("cart", product)}
          >
            Add to Cart
          </button>
          <button
            className="px-4 py-2 border-2 border-pink-400 bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
            onClick={() => handleAddToCollection("wishlist", product)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
