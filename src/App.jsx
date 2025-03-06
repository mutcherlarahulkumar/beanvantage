import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Services from "./components/Services.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Location = lazy(() => import("./pages/Location"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Events = lazy(() => import("./pages/Events"));
const Gifts = lazy(() => import("./pages/Gifts"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Products = lazy(() => import("./pages/Products"));
const Orders = lazy(() => import("./pages/Orders"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Bean Vantage - Enjoy the Best Coffee & Meetings Near You</title>
        <meta
          name="description"
          content="Visit our restobar and meeting place for freshly brewed coffee, artisanal espresso, and a cozy ambiance. Enjoy specialty coffee, vegan options, and more."
        />
        <meta
          name="keywords"
          content="Restobar, Meeting place, Coffee shop near me, Best coffee near me, Specialty coffee, Organic coffee, Cold brew, Espresso bar, Cozy café, Vegan coffee, Latte art, café in Visakhapatnam" />
          <link rel="canonical" href="https://beanvantage.vercel.app/" />

        <meta property="og:title" content="Bean Vantage - Best Coffee Near You" />
        <meta
          property="og:description"
          content="Visit Our Coffee Shop for the best freshly brewed coffee, artisanal espresso, and cozy meeting place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beanvantage.vercel.app/" />
        <meta property="og:image" content="https://beanvantage.vercel.app/og-image.jpg" />
        <meta property="og:site_name" content="Bean Vantage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bean Vantage - Best Coffee Near You" />
        <meta
          name="twitter:description"
          content="Visit Our Coffee Shop for the best freshly brewed coffee, artisanal espresso, and cozy meeting place."
        />
        <meta name="twitter:image" content="https://beanvantage.vercel.app/twitter-image.jpg" />
      </Helmet>

      <Nav />

      <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>

      <Footer />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Bean Vantage",
            "image": "/coffee_logo.png",
            "description": "Visit Our Coffee Shop for the best freshly brewed coffee, artisanal espresso, and cozy meeting place.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 9, Sector 1, MVP Colony",
                "addressLocality": "Visakhapatnam",
                "postalCode": "530017",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.72839488842437",
                "longitude": "83.30634742272619"
              }
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:00",
              "closes": "20:00"
            }
          }
        `}
      </script>
    </Router>
  );
};

export default App;