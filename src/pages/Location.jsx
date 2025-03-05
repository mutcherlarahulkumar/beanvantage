import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

const Maps = lazy(() => import("../components/Maps"));

const Location = () => {
  return (
    <div className="py-10 bg-[#FEFAE0]">
      <Helmet>
        <title>Find Bean Vantage - Your Cozy Coffee Spot</title>
        <meta
          name="description"
          content="Find Bean Vantage, the best coffee shop near you. Visit us for freshly brewed coffee, artisanal espresso, and a cozy meeting place."
        />
        <meta
          name="keywords"
          content="coffee shop near me, best coffee in Visakhapatnam, Bean Vantage location, cozy café, artisanal espresso"
        />
        <link rel="canonical" href="https://www.beanvantage.com/location" />

        {/* Open Graph (OG) for Facebook & social sharing */}
        <meta property="og:title" content="Find Bean Vantage - Your Cozy Coffee Spot" />
        <meta property="og:description" content="Visit Bean Vantage for freshly brewed coffee, artisanal espresso, and a cozy meeting place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beanvantage.com/location" />
        <meta property="og:image" content="https://www.beanvantage.com/location-image.jpg" />
        <meta property="og:site_name" content="Bean Vantage" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find Bean Vantage - Your Cozy Coffee Spot" />
        <meta name="twitter:description" content="Visit Bean Vantage for freshly brewed coffee, artisanal espresso, and a cozy meeting place." />
        <meta name="twitter:image" content="https://www.beanvantage.com/location-image.jpg" />

        {/* Structured Data for SEO (WebPage) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bean Vantage Location - Find Us Near You",
            "description": "Find Bean Vantage, the best coffee shop near you. Visit us for freshly brewed coffee, artisanal espresso, and a cozy meeting place.",
            "url": "https://www.beanvantage.com/location",
            "image": "https://www.beanvantage.com/location-image.jpg",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.beanvantage.com/location"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bean Vantage",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.beanvantage.com/logo.jpg"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Find Us!</h1>
          <p className="text-lg text-gray-800">Come visit us at Bean Vantage!</p>
        </div>

        <Suspense fallback={<div className="text-center text-gray-600">Loading Map...</div>}>
          <Maps />
        </Suspense>
      </div>
    </div>
  );
};

export default Location;
