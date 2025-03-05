import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";

const ReviewData = [
  {
    "id": 1,
    "name": "Emma Brewster",
    "text": "Coffee Café has transformed our morning routine! Their freshly roasted beans deliver a rich, smooth flavor that keeps our customers coming back. The quality and consistency are unmatched!",
    "img": "https://picsum.photos/101/101"
  },
  {
    "id": 2,
    "name": "James Cartwright",
    "text": "As a coffee shop owner, finding the perfect espresso blend was crucial. Coffee Café’s premium beans provide a bold, aromatic taste that elevates every cup. Highly recommended for coffee lovers!",
    "img": "https://picsum.photos/102/102"
  },
  {
    "id": 3,
    "name": "Sophia Lane",
    "text": "From their robust cold brews to smooth lattes, Coffee Café consistently delivers top-tier quality. Their sustainable sourcing and fresh roasts make them my go-to coffee supplier.",
    "img": "https://picsum.photos/104/104"
  },
  {
    "id": 4,
    "name": "Ethan Roberts",
    "text": "Since switching to Coffee Café’s beans, our café has received countless compliments on our cappuccinos and mochas. The depth of flavor and freshness set them apart from other suppliers.",
    "img": "https://picsum.photos/103/103"
  },
  {
    "id": 5,
    "name": "Liam Bennett",
    "text": "The moment you open a Coffee Café bag, the aroma tells you it’s something special. Their single-origin beans and rich espresso blends have made our coffee shop stand out.",
    "img": "https://picsum.photos/105/105"
  },
  {
    "id": 6,
    "name": "Olivia Pearson",
    "text": "Coffee Café’s commitment to ethically sourced, high-quality coffee is impressive. Every sip is packed with flavor, making our café’s drinks a customer favorite!",
    "img": "https://picsum.photos/106/106"
  },
  {
    "id": 7,
    "name": "Daniel White",
    "text": "I was searching for the best coffee supplier, and Coffee Café exceeded my expectations. Their dark roast is smooth and never bitter – a must-have for any coffee enthusiast.",
    "img": "https://picsum.photos/107/107"
  },
  {
    "id": 8,
    "name": "Amelia Clarke",
    "text": "Their mocha blend is absolutely delicious! Coffee Café’s freshly ground beans create a smooth, balanced taste that makes my mornings so much better.",
    "img": "https://picsum.photos/108/108"
  },
  {
    "id": 9,
    "name": "Noah Mitchell",
    "text": "As a restaurant owner, we needed a reliable coffee supplier. Coffee Café’s beans have helped us craft the best lattes, espressos, and americanos. Our customers love them!",
    "img": "https://picsum.photos/109/109"
  }
];

// Utility to simulate WebP conversion (pre-convert images in production)
const convertToWebP = (url) => url.replace(/\.(jpg|png)$/i, ".webp");

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(ReviewData);

  // Memoize reviews to prevent unnecessary re-renders
  const memoizedReviews = useMemo(() => reviews, [reviews]);

  const handleSubmit = () => {
    if (name.trim() && review.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name,
        text: review,
        img: `https://picsum.photos/10${reviews.length + 1}/10${reviews.length + 1}`,
      };
      setReviews([newReview, ...reviews]);
      setShowForm(false);
      setName("");
      setReview("");
    }
  };

  // Structured Data (Schema Markup)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Restobar Coffee Café",
    description: "Premium coffee shop and meeting place with exceptional reviews",
    review: memoizedReviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: memoizedReviews.length.toString(),
    },
  };

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Customer Reviews - Restobar Coffee Café | Best Meeting Place</title>
        <meta
          name="description"
          content="Read authentic customer reviews about Restobar Coffee Café's premium coffee and cozy meeting space. Perfect meeting place near you."
        />
        <meta
          name="keywords"
          content="Restobar, Meeting place, Meeting place near me, Coffee Reviews, Coffee Shop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/reviews" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customer Reviews - Restobar Coffee Café" />
        <meta
          property="og:description"
          content="Discover why customers love our premium coffee and meeting space at Restobar Coffee Café."
        />
        <meta property="og:image" content={convertToWebP("https://picsum.photos/600/400")} />
        <meta property="og:url" content="https://yourwebsite.com/reviews" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Reviews - Restobar Coffee Café" />
        <meta
          name="twitter:description"
          content="Discover why customers love our premium coffee and meeting space."
        />
        <meta name="twitter:image" content={convertToWebP("https://picsum.photos/600/400")} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

        {/* Preload critical resources */}
        <link rel="preload" href={convertToWebP("https://picsum.photos/101/101")} as="image" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
      </Helmet>

      <section className="py-10 bg-[#FEFAE0] relative">
        <div className="container mx-auto px-6">
          <header className="mb-10 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">Customer Reviews</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#D4A373] hover:bg-[#C08E66] text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
              aria-label="Write a review about Restobar Coffee Café"
            >
              Write a Review
            </button>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoizedReviews.map((data) => (
              <article
                key={data.id}
                className="flex flex-col items-center text-center gap-4 shadow-lg py-6 px-4 rounded-xl bg-white"
              >
                <picture>
                  <source srcSet={convertToWebP(data.img)} type="image/webp" />
                  <img
                    src={data.img}
                    alt={`Profile photo of ${data.name}, a satisfied Restobar Coffee Café customer`}
                    className="rounded-full w-20 h-20 object-cover"
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                  />
                </picture>
                <blockquote className="text-sm text-gray-600">{data.text}</blockquote>
                <h2 className="text-lg font-bold text-gray-800">{data.name}</h2>
                <span className="text-black/20 text-6xl font-serif">,,</span>
              </article>
            ))}
          </section>
        </div>

        {showForm && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-form-title"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-xl w-80 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="review-form-title" className="text-xl font-bold text-gray-800 mb-4">
                Write a Review
              </h2>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373] mb-3"
                aria-required="true"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                aria-required="true"
                required
              />

              <div className="flex justify-end mt-4 gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Cancel review submission"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-[#D4A373] hover:bg-[#C08E66] text-white px-4 py-2 rounded-md"
                  aria-label="Submit your review"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Reviews;