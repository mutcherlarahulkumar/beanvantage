import React, { useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CoffeeImage from "../assets/loginimg.jpg";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Memoize handleChange for performance
  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-hackathon-bntm.onrender.com/api/auth/register", form);
      alert("Registration Successful");
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Server Error"));
    }
  };

  // Structured Data for Register Page (Organization Schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bean Vantage Restobar",
    url: "https://beanvantage.com",
    description: "Register at Bean Vantage Restobar, the premier meeting place near you for coffee enthusiasts and event lovers.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@beanvantage.com",
      contactType: "Customer Support",
    },
  };

  return (
    <div className="min-h-screen bg-[#2c1b18] flex justify-center items-center">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Register - Bean Vantage Restobar | Join the Best Meeting Place</title>
        <meta
          name="description"
          content="Register at Bean Vantage Restobar, your top meeting place near me. Join our community for exclusive coffee events and more."
        />
        <meta
          name="keywords"
          content="restobar register, meeting place register, meeting place near me, coffee shop signup"
        />
        <link rel="canonical" href="https://beanvantage.com/register" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Register - Bean Vantage Restobar" />
        <meta
          property="og:description"
          content="Sign up at Bean Vantage Restobar, the ultimate meeting place for coffee and community events."
        />
        <meta property="og:image" content={CoffeeImage} />
        <meta property="og:url" content="https://beanvantage.com/register" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register - Bean Vantage Restobar" />
        <meta
          name="twitter:description"
          content="Join Bean Vantage Restobar, a top meeting place near you, by registering today."
        />
        <meta name="twitter:image" content={CoffeeImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

        {/* Preload critical image */}
        <link rel="preload" href={CoffeeImage} as="image" />
      </Helmet>

      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-8 px-4 py-8">
        {/* Registration Form */}
        <section className="w-full sm:w-1/2 bg-[#2c1b18] p-8 rounded-lg shadow-lg" role="main">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e09f3e] to-[#9c6644] pb-3">
            Register at Bean Vantage Restobar
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-[#e09f3e] rounded-lg bg-transparent text-[#e8d3b9] placeholder-[#e8d3b97f] focus:outline-none focus:border-[#9c6644] transition-colors duration-200"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-[#e09f3e] rounded-lg bg-transparent text-[#e8d3b9] placeholder-[#e8d3b97f] focus:outline-none focus:border-[#9c6644] transition-colors duration-200"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-[#e09f3e] rounded-lg bg-transparent text-[#e8d3b9] placeholder-[#e8d3b97f] focus:outline-none focus:border-[#9c6644] transition-colors duration-200"
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e09f3e] to-[#9c6644] hover:from-[#9c6644] hover:to-[#e09f3e] text-[#2c1b18] py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
              aria-label="Submit Registration"
            >
              Register
            </button>
            <p className="text-white text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:underline"
                aria-label="Login to Bean Vantage Restobar"
              >
                Login
              </Link>
            </p>
          </form>
        </section>

        {/* Coffee Image */}
        <aside className="w-full sm:w-1/2 flex justify-center" role="complementary">
          <img
            src={CoffeeImage}
            alt="Coffee at Bean Vantage Restobar, your cozy meeting place near me"
            className="w-64 sm:w-80 animate-float object-cover"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
        </aside>
      </div>
    </div>
  );
};

export default Register;