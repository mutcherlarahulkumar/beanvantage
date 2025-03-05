import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaCoffee, FaLeaf, FaHeart, FaUsers } from "react-icons/fa"; // Corrected imports
import coffeeShopImage from "../assets/cafe_outdoor.jpg";
import coffeeImage from "../assets/coffee2.png";


// Coffee Bean Background Component
const CoffeeBeanBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-[#FFD700]/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0, 1, 0],
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCoffee className="w-8 h-8" /> {/* Updated to FaCoffee */}
      </motion.div>
    ))}
  </div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#2C1D16] to-[#422E24] text-white min-h-screen py-10 relative overflow-hidden">
      <Helmet>
        <title>About Us - Bean Vantage Café</title>
        <meta name="description" content="Discover Bean Vantage Café's story, our commitment to quality coffee, sustainability practices, and passionate team." />
      </Helmet>
      <CoffeeBeanBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="text-center mb-16 pt-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-[#FFD700] blur-2xl opacity-30 rounded-full" />
              <h1 className="text-5xl md:text-6xl font-bold text-[#FFD700] relative">
                Welcome to Bean Vantage
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-[#E2D5C6] mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              Where every cup tells a story of passion, quality, and community
            </motion.p>
          </motion.div>

          <div className="relative h-48 w-full mb-12">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2C1D16] to-transparent z-20" />
            <div className="absolute inset-0 flex justify-center z-10">
              <motion.img
                src={coffeeImage}
                alt="Coffee Art"
                className="h-48 w-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-[#FFD700]">Our Journey</h2>
            <p className="text-[#E2D5C6] text-lg leading-relaxed">
              Founded in 2015 by two coffee enthusiasts, Bean Vantage began as a small cart 
              in downtown Portland. Today, we're proud to serve our community through 
              5 locations while maintaining our commitment to artisanal quality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#422E24] rounded-xl border border-[#FFD700]/20">
                <FaLeaf className="text-4xl text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainable Sourcing</h3>
                <p className="text-[#E2D5C6]">Direct trade with organic farms</p>
              </div>
              <div className="p-6 bg-[#422E24] rounded-xl border border-[#FFD700]/20">
                <FaHeart className="text-4xl text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-[#E2D5C6]">Supporting local artists & charities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform rotate-3 shadow-2xl" />
            <img
              src={coffeeShopImage}
              alt="Our Café"
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover z-10"
            />
          </motion.div>
        </section>

        {/* Brewing Process */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-[#FFD700] text-center mb-12">
            Our Craft Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Selecting Beans', 'Roasting Art', 'Perfect Brew'].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#422E24] p-8 rounded-2xl border border-[#FFD700]/20 text-center"
              >
                <div className="text-[#FFD700] text-4xl mb-4">
                  {i === 0 && <FaCoffee />} {/* Updated to FaCoffee */}
                  {i === 1 && <FaLeaf />}
                  {i === 2 && <FaHeart />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step}</h3>
                <p className="text-[#E2D5C6]">
                  {[
                    "Hand-picked specialty grade Arabica beans",
                    "Small-batch roasting to perfection",
                    "Expertly crafted by our certified baristas"
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-[#FFD700] text-center mb-12">
            Meet the Brewmasters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Sarah Johnson', 'Michael Chen', 'Emma Rodriguez'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#422E24] p-6 rounded-2xl border border-[#FFD700]/20 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-[#FFD700]/10 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className="text-[#FFD700] mb-4">Head Barista</p>
                <p className="text-[#E2D5C6] px-4">
                  {[
                    "10+ years coffee experience",
                    "Q Grader certified expert",
                    "Latte art champion 2022"
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Get in Touch</h2>
          <p className="text-[#E2D5C6] text-lg max-w-xl mx-auto mb-12">
            We'd love to hear from you! Reach out for inquiries, suggestions, or just to chat coffee!
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#422E24] to-[#2C1D16] p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl border-2 border-[#FFD700]/20"
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#2C1D16]/50 text-white placeholder-[#E2D5C6]/80 border-2 border-[#FFD700]/30 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#2C1D16]/50 text-white placeholder-[#E2D5C6]/80 border-2 border-[#FFD700]/30 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 rounded-xl bg-[#2C1D16]/50 text-white placeholder-[#E2D5C6]/80 border-2 border-[#FFD700]/30 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFAA00] text-[#2C1D16] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all w-full"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default About;