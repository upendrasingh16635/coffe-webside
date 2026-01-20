import { useState } from "react";

function Menu({ searchTerm }) {
  const [category, setCategory] = useState("All");

  const menuItems = [
    { name: "Espresso", price: "₹120", rating: "⭐⭐⭐⭐", category: "Hot", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e76" },
    { name: "Cappuccino", price: "₹180", rating: "⭐⭐⭐⭐⭐", category: "Hot", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Latte", price: "₹200", rating: "⭐⭐⭐⭐", category: "Hot", image: "https://images.unsplash.com/photo-1523942839745-7848dba58b1b" },
    { name: "Mocha", price: "₹220", rating: "⭐⭐⭐⭐⭐", category: "Hot", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" },
    { name: "Americano", price: "₹150", rating: "⭐⭐⭐⭐", category: "Hot", image: "https://images.unsplash.com/photo-1521302080371-4c1f3f6a7b8a" },
    { name: "Cold Coffee", price: "₹190", rating: "⭐⭐⭐⭐⭐", category: "Cold", image: "https://images.unsplash.com/photo-1598515214146-dab39da1243d" },
    { name: "Iced Latte", price: "₹210", rating: "⭐⭐⭐⭐", category: "Cold", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
    { name: "Frappuccino", price: "₹260", rating: "⭐⭐⭐⭐⭐", category: "Cold", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571" },
    { name: "Caramel Macchiato", price: "₹240", rating: "⭐⭐⭐⭐⭐", category: "Special", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772" },
    { name: "Hazelnut Latte", price: "₹230", rating: "⭐⭐⭐⭐", category: "Special", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { name: "Irish Coffee", price: "₹280", rating: "⭐⭐⭐⭐⭐", category: "Special", image: "https://images.unsplash.com/photo-1510626176961-4b37d6b92a47" },
    { name: "Affogato", price: "₹250", rating: "⭐⭐⭐⭐", category: "Special", image: "https://images.unsplash.com/photo-1505253216365-1f6d77cdbd04" }
  ];

  const filteredItems = menuItems.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        Our Menu
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Hot", "Cold", "Special"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              category === cat
                ? "bg-yellow-500 text-white shadow-lg"
                : "bg-white text-gray-700 shadow hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-yellow-500 mt-1">{item.rating}</p>
              <p className="mt-3 text-lg md:text-xl font-bold text-gray-900">
                {item.price}
              </p>
              <button className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
