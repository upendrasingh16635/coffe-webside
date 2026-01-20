
import { useState, useEffect } from "react";
import Card from "../components/Card";

import img1 from "../assets/photo/img1.jpg";
import img2 from "../assets/photo/img2.jpg";
import img3 from "../assets/photo/img3.jpg";
import img4 from "../assets/photo/img4.jpg";
import img5 from "../assets/photo/img5.jpg";
import img6 from "../assets/photo/img6.jpg";
import img7 from "../assets/photo/img7.jpg";
import img8 from "../assets/photo/img8.jpg";
import img9 from "../assets/photo/img9.jpg";
import img10 from "../assets/photo/img10.jpg";
import img11 from "../assets/photo/img11.jpg";
import img12 from "../assets/photo/img12.jpg";
import img13 from "../assets/photo/img13.jpg";
import img14 from "../assets/photo/img14.jpg";
import img15 from "../assets/photo/img15.jpg";

import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";

const coffeeData = [
  { id: 1, title: "Espresso", price: 5, category: "Hot", rating: 4.5, image: img1 },
  { id: 2, title: "Cappuccino", price: 6, category: "Hot", rating: 4.7, image: img2 },
  { id: 3, title: "Latte", price: 6, category: "Hot", rating: 4.7, image: img3 },
  { id: 4, title: "Espresso", price: 5, category: "Cold", rating: 4.5, image: img4 },
  { id: 5, title: "Cappuccino", price: 6, category: "Hot", rating: 4.7, image: img5 },
  { id: 6, title: "Latte", price: 6, category: "Hot", rating: 4.7, image: img6 },
  { id: 7, title: "Espresso", price: 5, category: "Hot", rating: 4.5, image: img7 },
  { id: 8, title: "Cappuccino", price: 6, category: "Hot", rating: 4.7, image: img8 },
  { id: 9, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img9 },
  { id: 10, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img10 },
  { id: 11, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img11 },
  { id: 12, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img12 },
  { id: 13, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img13 },
  { id: 14, title: "Latte", price: 6, category: "Cold", rating: 4.7, image: img14},
  { id: 15, title: "Latte", price: 7, category: "Cold", rating: 4.8, image: img15},
  
  
];

const banners = [
  { id: 1, image: banner1, title: "Fresh Coffee", subtitle: "Start your day right" },
  { id: 2, image: banner2, title: "Cold Brews", subtitle: "Chill and relax" },
  { id: 3, image: banner3, title: "Special Offers", subtitle: "Limited time only" },
];

function Home({ searchTerm }) {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredCoffee = coffeeData.filter(
    (coffee) =>
      (category === "All" || coffee.category === category) &&
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 bg-gray-50 min-h-screen  ">

      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-xl shadow-xl">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full   transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover rounded-xl"/>
            <div className="absolute bottom-6 left-6 text-white bg-black/50 p-4 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold">{banner.title}</h2>
              <p className="text-sm md:text-lg">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {["All", "Hot", "Cold"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
              category === cat
                ? "bg-yellow-500 text-white shadow-lg"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCoffee.map((coffee) => (
          <Card
            key={coffee.id}
            {...coffee}
            onAddToCart={() => addToCart(coffee)}
            className="hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Cart Info */}
      <div className="fixed bottom-6 right-6 bg-yellow-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer hover:bg-yellow-600 transition-colors">
        <span>🛒 Cart</span>
        <span className="bg-white text-yellow-500 px-2 py-1 rounded-full font-bold">
          {cart.length}
        </span>
      </div>
    </div>
  );
}

export default Home;
