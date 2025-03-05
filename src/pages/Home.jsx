import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bean Vantage - Best Coffee Near You</title>
        <meta
          name="description"
          content="Visit Bean Vantage for the best freshly brewed coffee, artisanal espresso, and a cozy meeting place. Explore our specialty coffee, vegan options, and gluten-free menu."
        />
        <meta
          name="keywords"
          content="Restobar, Meeting place, Meeting place near me, Best coffee near me, Best coffee shop in visakhapatnam, Coffee near visakapatnam, Café in visakhapatnam, Best cafe in visakhapatnam"
        />
        <link rel="canonical" href="https://beanvantage.vercel.app/" />

        <meta property="og:title" content="Bean Vantage - Best Coffee Near You" />
        <meta
          property="og:description"
          content="Visit Bean Vantage for the best freshly brewed coffee, artisanal espresso, and a cozy meeting place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beanvantage.vercel.app/" />
        <meta property="og:image"  content="https://beanvantage.vercel.app/og-image.jpg" />
        <meta property="og:image:alt"  content="Bean Vantage - Best Coffee" />
        <meta property="og:site_name" content="Bean Vantage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bean Vantage - Best Coffee Near You" />
        <meta
          name="twitter:description"
          content="Visit Bean Vantage for the best freshly brewed coffee, artisanal espresso, and a cozy meeting place."
        />
        <meta name="twitter:image" content="https://beanvantage.vercel.app/twitter-image.jpg" />
        <meta property="twitter:image:alt"  content="Bean Vantage - Best Coffee" />
      </Helmet>

      <Hero />
      <Services />
      <Testimonial />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bean Vantage - Best Coffee Near You",
            "description": "Visit Bean Vantage for the best freshly brewed coffee, artisanal espresso, and a cozy meeting place.",
            "url": "https://beanvantage.vercel.app/",
            "image": "/coffee_logo.png",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://beanvantage.vercel.app/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bean Vantage",
              "logo": {
                "@type": "ImageObject",
                "url": "/coffee_logo.png"
              }
            }
          }
        `}
      </script>
    </div>
  );
};

export default Home;