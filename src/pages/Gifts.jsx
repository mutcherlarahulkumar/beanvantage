import { FaGift, FaRegEnvelope, FaShippingFast, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const gifts = [
  { 
    name: "Executive Coffee Gift Box", 
    description: "Premium coffee selection perfect for corporate gifting at Restobar meetings", 
    price: 499, 
    bg: "bg-[#382E2E]" 
  },
  { 
    name: "Personalized Coffee Experience", 
    description: "Custom-branded coffee packages ideal for networking events and meetups", 
    price: 299, 
    bg: "bg-[#4A3A3A]" 
  },
  { 
    name: "Luxury Coffee & Dessert Set", 
    description: "Gourmet pairing for business discussions at your favorite meeting place", 
    price: 599, 
    bg: "bg-[#332929]" 
  },
  { 
    name: "Flexible Gift Card", 
    description: "Perfect choice for clients meeting at Restobar - let them select their favorite brew", 
    price: "Custom", 
    bg: "bg-[#543D3D]" 
  },
];

export default function GiftPage() {
  const [selectedGift, setSelectedGift] = useState(null);

  // Structured Data for Gift Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCollectionPage",
    "name": "Premium Coffee Gifts for Business Meetings | Restobar",
    "description": "Discover curated coffee gifts perfect for corporate meetings and networking at Restobar - your premium meeting place near you. Ideal for client gifts and business discussions.",
    "url": "https://www.restobar.com/gifts",
    "image": "https://www.restobar.com/gift-image.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.restobar.com/gifts",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Restobar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.restobar.com/logo.jpg",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1A1212] text-[#F8EDE3]">
      {/* SEO Meta Tags for Gift Page */}
      <Helmet>
        <title>Premium Coffee Gifts for Business Meetings | Restobar</title>
        <meta 
          name="description" 
          content="Discover curated coffee gifts perfect for corporate meetings and networking at Restobar - your premium meeting place near you. Ideal for client gifts and business discussions." 
        />
        <meta 
          name="keywords" 
          content="Restobar, meeting place, meeting place near me, corporate gifts, coffee gifts, business meetings, client gifts, premium coffee, networking gifts" 
        />
        <link rel="canonical" href="https://www.restobar.com/gifts" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Premium Coffee Gifts for Business Meetings | Restobar" />
        <meta 
          property="og:description" 
          content="Discover curated coffee gifts perfect for corporate meetings and networking at Restobar - your premium meeting place near you. Ideal for client gifts and business discussions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.restobar.com/gifts" />
        <meta property="og:image" content="https://www.restobar.com/gift-image.jpg" />
        <meta property="og:site_name" content="Restobar" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Coffee Gifts for Business Meetings | Restobar" />
        <meta 
          name="twitter:description" 
          content="Discover curated coffee gifts perfect for corporate meetings and networking at Restobar - your premium meeting place near you. Ideal for client gifts and business discussions." 
        />
        <meta name="twitter:image" content="https://www.restobar.com/gift-image.jpg" />
      </Helmet>

      {/* Structured Data (Schema Markup) for Gift Page */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <header className="text-center pt-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4A76A] to-[#C18948] bg-clip-text text-transparent">
          <FaMapMarkerAlt className="inline mr-2 mb-1" />
          Restobar - Premium Meeting Place Gifts
        </h1>
        <p className="text-lg md:text-xl text-[#EAD8C0] max-w-3xl mx-auto mb-8">
          Elevate your business meetings and client relationships with artisanal coffee gifts from Restobar, 
          the perfect meeting place near you. Ideal for corporate gifting, networking events, and professional gatherings.
        </p>
      </header>

      <main className="py-12 px-6 max-w-7xl mx-auto">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {gifts.map((gift, index) => (
            <article 
              key={index}
              className={`p-6 rounded-xl shadow-2xl hover:shadow-lg transition-all cursor-pointer ${gift.bg} hover:translate-y-[-5px]`}
              onClick={() => setSelectedGift(gift)}
              aria-label={`Gift option: ${gift.name}`}
            >
              <div className="text-center">
                <h2 className="text-xl font-bold mb-3 text-[#F8EDE3]">{gift.name}</h2>
                <p className="text-sm mb-4 text-[#EAD8C0] min-h-[80px]">{gift.description}</p>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-lg mb-4 text-[#D4A76A]">
                    {typeof gift.price === 'number' ? `₹ ${gift.price}` : gift.price}
                  </span>
                  <button 
                    className="w-full bg-gradient-to-r from-[#C18948] to-[#D4A76A] text-[#1A1212] py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                    aria-label={`Customize ${gift.name}`}
                  >
                    Customize Gift
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {selectedGift && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-[#2A2020] p-8 rounded-xl max-w-md relative shadow-xl">
              <button 
                className="absolute top-4 right-4 text-[#EAD8C0] hover:text-[#D4A76A]"
                onClick={() => setSelectedGift(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-3 text-[#D4A76A]">{selectedGift.name}</h3>
              <p className="mb-4 text-[#EAD8C0]">{selectedGift.description}</p>
              <p className="text-lg font-semibold mb-6 text-[#D4A76A]">
                {typeof selectedGift.price === 'number' ? `₹ ${selectedGift.price}` : selectedGift.price}
              </p>
              <button 
                className="w-full bg-gradient-to-r from-[#C18948] to-[#D4A76A] text-[#1A1212] py-3 rounded-lg font-bold hover:opacity-90"
                aria-label="Proceed to checkout"
              >
                Complete Order
              </button>
            </div>
          </div>
        )}

        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#D4A76A] to-[#C18948] bg-clip-text text-transparent">
            Why Choose Restobar for Business Gifting?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-[#2A2020] rounded-xl">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-[#D4A76A]" />
              <h3 className="text-xl font-semibold mb-3">Central Meeting Place</h3>
              <p className="text-[#EAD8C0]">
                Conveniently located meeting place near you, perfect for corporate gatherings 
                and client meetings with premium amenities.
              </p>
            </div>
            <div className="p-6 bg-[#2A2020] rounded-xl">
              <FaGift className="text-4xl mx-auto mb-4 text-[#D4A76A]" />
              <h3 className="text-xl font-semibold mb-3">Professional Gifting</h3>
              <p className="text-[#EAD8C0]">
                Impress clients with curated gift sets designed for business relationships, 
                complete with corporate branding options.
              </p>
            </div>
            <div className="p-6 bg-[#2A2020] rounded-xl">
              <FaShippingFast className="text-4xl mx-auto mb-4 text-[#D4A76A]" />
              <h3 className="text-xl font-semibold mb-3">Reliable Delivery</h3>
              <p className="text-[#EAD8C0]">
                Timely delivery to any meeting location or office, with real-time tracking 
                and premium packaging options.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-[#D4A76A]">
              Perfect Meeting Place Near You
            </h3>
            <p className="text-[#EAD8C0] mb-8">
              Restobar isn't just a coffee shop - it's a premium destination for business meetings 
              and professional networking. As your local meeting place, we offer:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-left text-[#EAD8C0]">
              <li className="flex items-center">
                <span className="text-[#D4A76A] mr-2">✓</span>
                Professional meeting environment
              </li>
              <li className="flex items-center">
                <span className="text-[#D4A76A] mr-2">✓</span>
                Premium coffee and amenities
              </li>
              <li className="flex items-center">
                <span className="text-[#D4A76A] mr-2">✓</span>
                Central location with easy access
              </li>
              <li className="flex items-center">
                <span className="text-[#D4A76A] mr-2">✓</span>
                Custom corporate gifting solutions
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}