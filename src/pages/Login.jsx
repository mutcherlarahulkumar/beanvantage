import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CoffeeImage from "../assets/loginimg.jpg"; // Use WebP format

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Memoize handleChange for performance
  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://backend-hackathon-bntm.onrender.com/api/auth/login", form);
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      navigate("/");
    } catch (err) {
      alert("Login Failed: " + (err.response?.data?.message || "Server Error"));
    }
  };

  // Structured Data for Login Page (Organization Schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bean Vantage Restobar",
    url: "https://beanvantage.com",
    description: "Login to Bean Vantage Restobar, the best meeting place near you for coffee lovers and event enthusiasts.",
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
        <title>Login - Bean Vantage Restobar | Top Meeting Place Near Me</title>
        <meta
          name="description"
          content="Login to Bean Vantage Restobar, your favorite meeting place near me. Access exclusive events and community features."
        />
        <meta
          name="keywords"
          content="restobar login, meeting place login, meeting place near me, coffee shop login"
        />
        <link rel="canonical" href="https://beanvantage.com/login" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Login - Bean Vantage Restobar" />
        <meta
          property="og:description"
          content="Sign in to Bean Vantage Restobar, the ultimate meeting place for coffee and events."
        />
        <meta property="og:image" content={CoffeeImage} />
        <meta property="og:url" content="https://beanvantage.com/login" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login - Bean Vantage Restobar" />
        <meta
          name="twitter:description"
          content="Login to join our restobar community at Bean Vantage, a top meeting place near you."
        />
        <meta name="twitter:image" content={CoffeeImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

        {/* Preload critical image */}
        <link rel="preload" href={CoffeeImage} as="image" />
      </Helmet>

      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-8 px-4 py-8 border  border-gray-400 rounded-3xl">
        {/* Login Form */}
        <section className="w-full sm:w-1/2 bg-[#2c1b18] p-8 rounded-lg shadow-lg" role="main">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e09f3e] to-[#9c6644] pb-2">
            Login to Bean Vantage Restobar
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              aria-label="Submit Login"
            >
              Login
            </button>
            <p className="text-white text-center">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline"
                aria-label="Register for Bean Vantage Restobar"
              >
                Register
              </Link>
            </p>
          </form>
        </section>

        {/* Coffee Image */}
        <aside className="w-full sm:w-1/2 flex justify-center" role="complementary">
          <img
            src={CoffeeImage}
            alt="Coffee at Bean Vantage Restobar, a cozy meeting place near me"
            className="w-64 sm:w-80 animate-float object-cover rounded-xl"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
        </aside>
      </div>
    </div>
  );
};

export default Login;