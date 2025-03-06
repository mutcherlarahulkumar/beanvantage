import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "FDCA",
    text: "Since we started purchasing Coffee Café's roasted coffee, the quality of our coffee has improved significantly. Our customers have praised the rich flavor and unmistakable aroma.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Hudson Federricó",
    text: "I am a fan of espresso and was looking for a supplier that could guarantee fresh, high-quality beans. I discovered Coffee Café and have never looked back. The aroma and flavor are unparalleled.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Robert Polyroes",
    text: "We were looking for a reliable supplier for liquid coffee in large volumes. Coffee Café surprised us with their consistent quality and superior flavor.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Hannah Paula",
    text: "Since we started using Coffee Café’s Mocha, Latte, and Cappuccino, our customers have noticed the difference and praised the refined flavor.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Coffee Lounge",
    text: "Coffee Café exceeded our expectations with exceptional espresso blends and personalized service.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#FEFAE0]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
        </div>

        {/* Testimonial Cards */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-3">
              <div className="flex flex-col items-center text-center gap-4 shadow-lg py-8 px-6 rounded-xl bg-white">
                <img
                  src={data.img}
                  alt={data.name}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <p className="text-sm text-gray-600">{data.text}</p>
                <h4 className="text-lg font-bold text-gray-800">{data.name}</h4>
                <span className="text-black/20 text-6xl font-serif">,,</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
