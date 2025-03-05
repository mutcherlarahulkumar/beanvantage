import React from "react";
import Img2 from "../assets/coffee2.png";
import axios from "axios";
import { FaCoffee } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is known for its bold and intense flavor, delivering a rich and concentrated coffee experience. Its smooth, creamy texture provides a full-bodied taste, ideal for enjoying solo or as the base for specialty coffee drinks.",
    aosDelay: "100",
    price:99.00,
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Americano offers a smooth, mild coffee flavor with a balanced intensity. The combination of espresso and hot water creates an easy-drinking, versatile coffee, perfect for those who prefer a lighter brew.",
    aosDelay: "300",
    price:199.00,
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Cappuccino blends rich espresso with creamy steamed milk and frothy foam. The velvety texture and bold flavor make it a luxurious choice for coffee lovers who enjoy a smooth and indulgent cup.",
    aosDelay: "500",
    price:299.00,
  },
  {
    id: 4,
    img: Img2,
    name: "Latte",
    description:
      "Latte is a creamy and mild coffee drink with a higher ratio of steamed milk. Its smooth, less bitter flavor is perfect for those who love a comforting, milky coffee experience.",
    aosDelay: "500",
    price:469.00,
  },
  {
    id: 5,
    img: Img2,
    name: "Mocha",
    description:
      "Mocha blends rich espresso with steamed milk and chocolate, offering a dessert-like coffee treat. The balance of coffee and chocolate creates a rich and satisfying flavor.",
    aosDelay: "500",
    price:499.00,
  },
  {
    id: 6,
    img: Img2,
    name: "Flat White",
    description:
      "Flat White combines espresso with velvety steamed milk for a smooth and creamy coffee. The microfoam provides a rich texture, creating a balanced taste with a hint of sweetness.",
    aosDelay: "500",
    price:99.00,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#2c1b18] text-[#faedcd]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-cursive text-[#e09f3e]">
            Best Coffee For You
          </h1>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 place-items-center">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="relative rounded-2xl bg-[#4b382a] hover:bg-[#e09f3e] hover:text-[#2c1b18] text-[#faedcd] p-6 shadow-xl transition-all duration-300 max-w-[360px] group"
            >
              <div className="h-[130px] flex justify-center">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-[120px] sm:w-[180px] -mt-12 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold">{service.name}</h2>
                <p className="text-sm text-[#faedcd] group-hover:text-[#2c1b18] mt-2 transition-all duration-300">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <button className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] border-2 border-[#e09f3e] hover:scale-105 duration-200 text-[#2c1b18] py-3 px-6 rounded-full font-semibold shadow-md"
                onClick={async()=>{
                  alert("Added to Cart");
                  const token = localStorage.getItem("token");
                  if(!token) return alert("Please login to add items to cart");
                  // now send an backend call to add this item to cart
                  const { data } = await axios.post(
                    "https://backend-hackathon-bntm.onrender.com/api/orders/order",
                    {
                      product: service.name,
                      quantity: 1,
                      price: service.price
                    },
                    {
                      headers: { Authorization: token } // Headers should be in the third parameter
                    }
                  );
                  
                 }} >
                  Add to Cart <FaCoffee className="inline-block" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
