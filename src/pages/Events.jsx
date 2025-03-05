import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import eventImage from "../assets/event_image.jpg";

const events = [
  {
    id: 1,
    name: "Live Musical Fest",
    description: "Enjoy a night of live music with top artists performing at our café.",
    time: "March 20, 2025 | 7:00 PM - 10:00 PM",
    image: eventImage,
    calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=Live+Musical+Fest&dates=20250320T190000/20250320T220000"
  },
  {
    id: 2,
    name: "Exclusive Coffee Offer Days",
    description: "Get amazing discounts on your favorite coffee selections!",
    time: "April 5-10, 2025",
    image: eventImage,
    calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=Exclusive+Coffee+Offer+Days&dates=20250405T000000/20250410T235900"
  },
  {
    id: 3,
    name: "Barista Training Day",
    description: "Learn the art of making coffee from our expert baristas!",
    time: "May 15, 2025 | 10:00 AM - 4:00 PM",
    image: eventImage,
    calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=Barista+Training+Day&dates=20250515T100000/20250515T160000"
  }
];

const Events = () => {
  // Structured Data for Events Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Upcoming Events at Bean Vantage Café",
    "description": "Join us for exciting events, special offers, and fun activities at Bean Vantage Café!",
    "url": "https://beanvantage.vercel.app/events",
    "image": "https://beanvantage.vercel.app/event_image.jpg",
    "events": events.map(event => ({
      "@type": "Event",
      "name": event.name,
      "description": event.description,
      "startDate": event.time.split(" | ")[0],
      "endDate": event.time.split(" | ")[0],
      "image": event.image,
      "url": event.calendarLink,
    })),
  };

  return (
    <div className="container mx-auto p-6 bg-[#FEFAE0]">
      {/* SEO Meta Tags for Events Page */}
      <Helmet>
        <title>Events - Bean Vantage Café</title>
        <meta 
          name="description" 
          content="Stay updated with the latest events happening at Bean Vantage Café. Join us for live music, exclusive offers, and barista training sessions." 
        />
        <meta 
          name="keywords" 
          content="Bean Vantage events, coffee shop events, live music café, barista training, coffee offers, café near me, coffee shop activities" 
        />
        <link rel="canonical" href="https://beanvantage.vercel.app/events" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Events - Bean Vantage Café" />
        <meta 
          property="og:description" 
          content="Stay updated with the latest events happening at Bean Vantage Café. Join us for live music, exclusive offers, and barista training sessions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beanvantage.vercel.app/events" />
        <meta property="og:image" content="https://beanvantage.vercel.app/event_image.jpg" />
        <meta property="og:site_name" content="Bean Vantage Café" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events - Bean Vantage Café" />
        <meta 
          name="twitter:description" 
          content="Stay updated with the latest events happening at Bean Vantage Café. Join us for live music, exclusive offers, and barista training sessions." 
        />
        <meta name="twitter:image" content="https://beanvantage.vercel.app/event_image.jpg" />
      </Helmet>

      {/* Structured Data (Schema Markup) for Events Page */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="py-10 bg-[#3E2723] relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#D7CCC8]">Upcoming Events</h1>
          <p className="text-lg text-[#A67B5B] mb-12 max-w-2xl mx-auto">
            Join us for exciting events, special offers, and fun activities at Bean Vantage Café!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map(event => (
              <motion.div 
                key={event.id} 
                className="bg-[#D7CCC8] rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                aria-label={`Event: ${event.name}`}
              >
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-48 object-cover" 
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#2C1B18]">{event.name}</h2>
                  <p className="text-[#6D4C41] mt-2">{event.description}</p>
                  <p className="text-[#8D6E63] mt-2 font-light">{event.time}</p>
                  <a 
                    href={event.calendarLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-[#A67B5B] text-white py-2 px-4 rounded-md font-semibold mt-4 hover:bg-[#8B5E3B] transition-all"
                    aria-label={`Add ${event.name} to Google Calendar`}
                  >
                    Add to Google Calendar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;