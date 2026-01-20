function Card({ title, price, image, rating, category, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-sm text-gray-500">{category}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="font-bold">${price}</span>
        </div>

        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-brown-600 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;

