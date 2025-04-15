function trimContent(input, length) {
  return input.length > length
    ? input.split(" ").slice(0, length).join(" ") + "..."
    : input;
}
function Product({ product }) {
  return (
    <div className="product w-[23%] h-96 p-2 my-4">
      <img className="w-full h-1/2" src={product.image} alt={product.title} />
      <div className="h-1/2">
        <h3>{trimContent(product.title, 8)}</h3>
        <p className="font-bold">${product.price}</p>
        <div className="flex justify-between items-center">
          <button className="px-2 py-1 border-2 border-pink-400 bg-pink-400 rounded-lg">
            Add To Wishlist
          </button>
          <button className="px-2 py-1 border-2 border-green-400 bg-green-400 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
