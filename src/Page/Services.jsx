import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Fast Delivery",
      img: "https://images.unsplash.com/photo-1526367790999-0150786686a2",
      link: "/delivery",
    },
    {
      title: "Fresh Coffee",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      link: "/",
    },
    {
      title: "Online Order",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      link: "/menu",
    },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;

