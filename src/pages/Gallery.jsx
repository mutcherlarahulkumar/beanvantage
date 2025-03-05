import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";

// Use WebP images with lazy loading - Replace with actual WebP imports
import Event1 from "../assets/img1.jpg";
import Event2 from "../assets/img2.jpg";
import Event3 from "../assets/img3.jpg";
import Event4 from "../assets/img4.jpg";
import Event5 from "../assets/img5.jpg";

// Preload critical images or fonts if needed
const preloadImages = [Event1, Event2, Event3, Event4, Event5];

const Gallery = () => {
  const events = [
    {
      title: "Coffee Tasting at Bean Vantage Restobar",
      image: Event1,
      date: "15 March 2024",
      alt: "Coffee tasting event at Bean Vantage Restobar, a top meeting place near me",
    },
    {
      title: "Music Nights at Our Restobar",
      image: Event2,
      date: "15 June 2024",
      alt: "Live acoustic performance at Bean Vantage Restobar, perfect meeting place",
    },
    {
      title: "Barista Workshop",
      image: Event3,
      date: "22 March 2024",
      alt: "Learn latte art at Bean Vantage Restobar, a cozy meeting place near me",
    },
    {
      title: "Local Art Exhibition",
      image: Event4,
      date: "1-30 April 2024",
      alt: "Art display at Bean Vantage Restobar, ideal meeting place for creatives",
    },
    {
      title: "Spring Menu Launch",
      image: Event5,
      date: "10 April 2024",
      alt: "New seasonal drinks at Bean Vantage Restobar, best meeting place near me",
    },
  ];

  // Structured Data (Schema Markup) for Events
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bean Vantage Restobar",
    url: "https://beanvantage.com",
    description: "A premier restobar and meeting place offering coffee events, workshops, and live music.",
    event: events.map((event) => ({
      "@type": "Event",
      name: event.title,
      startDate: event.date,
      location: {
        "@type": "Place",
        name: "Bean Vantage Restobar",
        address: "123 Coffee Lane, Your City",
      },
      image: event.image,
      description: event.alt,
    })),
  };

  return (
    <div className="bg-gradient-to-b from-[#2C1D16] to-[#422E24] text-white min-h-screen py-10 relative overflow-hidden">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Events Gallery - Bean Vantage Restobar | Best Meeting Place Near Me</title>
        <meta
          name="description"
          content="Discover events at Bean Vantage Restobar, your go-to meeting place near me. Enjoy coffee tastings, live music, and workshops in our cozy restobar."
        />
        <meta
          name="keywords"
          content="restobar, meeting place, meeting place near me, coffee events, live music, workshops"
        />
        <link rel="canonical" href="https://beanvantage.com/gallery" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Events Gallery - Bean Vantage Restobar" />
        <meta
          property="og:description"
          content="Explore our restobar events - coffee tastings, live music, and more at Bean Vantage, the perfect meeting place near you."
        />
        <meta property="og:image" content={Event1} />
        <meta property="og:url" content="https://beanvantage.com/gallery" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events Gallery - Bean Vantage Restobar" />
        <meta
          name="twitter:description"
          content="Join us at Bean Vantage Restobar for coffee events and live music - your ideal meeting place."
        />
        <meta name="twitter:image" content={Event1} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

        {/* Preload critical resources */}
        <link rel="preload" href={Event1} as="image" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-12" role="banner">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-6">
              Restobar Events at Bean Vantage
            </h1>
            <p className="text-lg md:text-xl text-[#E2D5C6] max-w-2xl mx-auto">
              Discover why we’re the top meeting place near you with our exciting restobar events.
            </p>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="main">
          {events.map((event, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              aria-labelledby={`event-title-${index}`}
            >
              <figure className="aspect-square">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchpriority={index === 0 ? "high" : "low"}
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-[#2C1D16]/90 to-transparent flex items-end p-6">
                  <div className="text-[#E2D5C6]">
                    <h2 id={`event-title-${index}`} className="text-xl font-bold mb-2">
                      {event.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-[#FFD700]" aria-hidden="true" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </motion.article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 mb-12" role="complementary">
          <div className="bg-[#422E24] rounded-2xl p-8 md:p-12 border-2 border-[#FFD700]/20">
            <FaRegSmileBeam className="text-4xl text-[#FFD700] mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-[#FFD700] mb-4">
              Join Our Restobar Community
            </h2>
            <p className="text-[#E2D5C6] max-w-xl mx-auto mb-8">
              Visit Bean Vantage Restobar, the ultimate meeting place near you, for unforgettable events.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFAA00] text-[#2C1D16] px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-shadow"
              aria-label="View Event Calendar"
            >
              <Link to="/events" className="block w-full h-full">
                View Event Calendar
              </Link>
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;