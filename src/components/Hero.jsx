import HeroPng from "../assets/coffee2.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#2c1b18] flex justify-center items-center text-[#e8d3b9]">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1 m-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Brewing happiness,
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#e09f3e] to-[#9c6644] font-cursive">
                One Cup at a Time
              </span>
            </h1>
            <p className="text-lg text-[#e8d3b9]">
                We serve the best coffee in town. Our coffee is made from freshly roasted beans
                that are brewed to perfection. 
            </p>
            <div>
            <Link to="/products">
  <button className="bg-gradient-to-r from-[#e09f3e] to-[#9c6644] border-2 border-[#e09f3e] hover:scale-105 duration-200 text-[#2c1b18] py-3 px-6 rounded-full font-semibold shadow-md">
    Explore Our Menu
  </button>
</Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <img
              src={HeroPng}
              alt="Freshly brewed specialty coffee"
              loading="lazy"
              className="w-[300px] sm:w-[450px] mx-auto animate-[spin_20s_linear_infinite]"
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
  );
}