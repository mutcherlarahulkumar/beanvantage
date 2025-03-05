import { useState, useEffect } from "react";
import HeroPng from "../assets/coffee2.png";
import { FaCoffee } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const coffeeData = [
  { name: "Espresso", description: "A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans, resulting in a rich and bold flavor. Served in small shots, it's the base for many coffee drinks.", bg: "bg-[#2c1b18]",price:99.00 }, 
  { name: "Cappuccino", description: "A balanced mix of espresso, steamed milk, and a thick layer of milk foam, offering a creamy texture and a bold coffee flavor. Often topped with cocoa powder or cinnamon for extra taste.", bg: "bg-[#3e2723]",price:249.00 },
  { name: "Latte", description: "Smooth and creamy with a touch of espresso.A milder coffee drink consisting of one shot of espresso and a generous amount of steamed milk, topped with a light layer of foam. It has a smooth, creamy taste with a subtle coffee kick.", bg: "bg-[#6f4e37]",price:129.00 },
  { name: "Mocha", description: "Espresso meets chocolate and steamed milk.An espresso stained with a small amount of steamed milk or foam, providing a strong coffee flavor with just a touch of creaminess.", bg: "bg-[#4b2e2e]",price:79.00 },
  { name: "Americano", description: "A diluted espresso made by adding hot water, giving it a smoother and milder taste while maintaining the depth of espresso. It closely resembles black coffee but with a richer aroma.", bg: "bg-[#5a3e36]",price:249.00 },
{ name: "Flat White", description: "Velvety microfoam over rich espresso.Similar to a latte but with a higher coffee-to-milk ratio, giving it a stronger espresso flavor. It features velvety microfoam for a rich and silky texture.", bg: "bg-[#855c4c]",price:199.00 },
];

export default function Hero2() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let touchStartY = 0;
    let pendingScroll = null;
    const threshold = 30; // Sensitivity for detecting scroll movement
    const scrollDelay = 500; // Delay before accepting next scroll

    const handleScrollChange = (direction) => {
      if (!isScrolling) {
        setIsScrolling(true); // Prevents instant multiple scrolls
        setScrollIndex((prev) => {
          if (direction === "down") return Math.min(coffeeData.length - 1, prev + 1);
          if (direction === "up") return Math.max(0, prev - 1);
          return prev;
        });

        setTimeout(() => {
          setIsScrolling(false);
          if (pendingScroll) {
            handleScrollChange(pendingScroll);
            pendingScroll = null;
          }
        }, scrollDelay);
      } else {
        pendingScroll = direction; // Stores the last scroll input for smooth continuous scrolling
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > threshold) handleScrollChange("down");
      else if (e.deltaY < -threshold) handleScrollChange("up");
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touchEndY = e.touches[0].clientY;
      const delta = touchEndY - touchStartY;

      if (Math.abs(delta) > threshold) {
        handleScrollChange(delta > 0 ? "up" : "down");
        touchStartY = touchEndY;
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isScrolling]);

  useEffect(() => {
    setRotation((scrollIndex + 1) * 15);
  }, [scrollIndex]);

  return (
    <div>
      <Link to="/services">
  <div className="fixed top-4 right-4 bg-[#e09f3e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-200 cursor-pointer">
    Explore
  </div>
</Link>
        <div className={`min-h-screen flex justify-center items-center text-[#e8d3b9] transition-colors duration-500 ${coffeeData[scrollIndex].bg}`}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Left: Text Section (Changes on Scroll) */}
            <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1 m-3 transition-opacity duration-500">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {coffeeData[scrollIndex].name}
              </h1>
              <p className="text-lg">{coffeeData[scrollIndex].description}</p>
              <div className="flex justify-start items-center gap-4 ml-7">
                <div className="pr-9 text-2xl">₹ {coffeeData[scrollIndex].price}</div>
                <button className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] border-2 border-[#e09f3e] hover:scale-105 duration-200 text-[#2c1b18] py-3 px-6 rounded-full font-semibold shadow-md"
                onClick={async()=>{
                  
                  const token = localStorage.getItem("token");
                  if(!token) return alert("Please login to add items to cart");
                  else{
                    alert("Added to Cart");
                  }
                  // now send an backend call to add this item to cart
                  const { data } = await axios.post(
                    "https://backend-hackathon-bntm.onrender.com/api/orders/order",
                    {
                      product: coffeeData[scrollIndex].name,
                      quantity: 1,
                      price: coffeeData[scrollIndex].price
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

            {/* Right: Static Image */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <img
                src={HeroPng}
                alt="Freshly brewed specialty coffee"
                loading="lazy"
                className="w-[300px] sm:w-[450px] mx-auto transition-transform duration-500"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <div className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] p-3 rounded-xl absolute top-10 left-10 shadow-lg">
                <h2 className="text-[#2c1b18] text-lg font-semibold">Hey! Coffee Lover</h2>
              </div>
              <div className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] p-3 rounded-xl absolute bottom-10 right-10 shadow-lg">
                <h2 className="text-[#2c1b18] text-lg font-semibold">Best Coffee in Town</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}