import { FaCoffee, FaRegClock, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0F0A0A] text-[#F8EDE3]">
      <Helmet>
        <title>Beanvantage Blog | Premium Meeting Place & Coffee Expertise</title>
        <meta 
          name="description" 
          content="Discover why Beanvantage is the ultimate meeting place near you. Explore coffee culture, business networking tips, and premium Restobar experiences in our expert blog." 
        />
        <meta 
          name="keywords" 
          content="Beanvantage, Restobar, meeting place, meeting place near me, coffee shop, business meetings, coworking space" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Beanvantage coffee shop interior"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D4A76A] to-[#C18948] bg-clip-text text-transparent">
            <FaCoffee className="inline mr-3 mb-2" />
            Beanvantage Chronicles
          </h1>
          <p className="text-xl text-[#EAD8C0] max-w-2xl mx-auto">
            Your Ultimate Guide to Premium Coffee Culture & Productive Meeting Spaces
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <article className="mb-20 bg-[#1A1212] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="../src/assets/bussiness_meet.jpg" 
            alt="Business meeting at Beanvantage"
            className="w-full h-96 object-cover"
            loading="lazy"
          />
          <div className="p-8 md:p-12">
            <span className="text-[#D4A76A] font-semibold">FEATURED POST</span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Why Beanvantage is the Best Meeting Place Near You for Productive Discussions
            </h2>
            <div className="flex items-center text-[#EAD8C0] mb-8">
              <span className="flex items-center mr-6">
                <FaRegClock className="mr-2" /> 8 min read
              </span>
              <span className="flex items-center">
                <FaUsers className="mr-2" /> Business Tips
              </span>
            </div>
            <div className="space-y-6 text-lg text-[#EAD8C0]">
              <p>
                In today's fast-paced business world, finding the perfect <strong>meeting place near me</strong> 
                that combines professionalism with comfort can be challenging. At Beanvantage, we've 
                redefined the concept of a Restobar to create the ultimate environment for productive 
                meetings and creative collaborations.
              </p>

              <h3 className="text-2xl font-bold text-[#D4A76A] mt-8 mb-4">
                <FaMapMarkerAlt className="inline mr-2" />
                Key Features of Our Meeting Spaces
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#2A2020] p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-3">Premium Acoustics</h4>
                  <p>Sound-engineered spaces ensuring private conversations in our Restobar environment</p>
                </div>
                <div className="bg-[#2A2020] p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-3">Tech-Ready Setup</h4>
                  <p>High-speed WiFi, charging stations, and presentation facilities</p>
                </div>
              </div>

              <img 
                src="../src/assets/cafe_tech.jpg" 
                alt="Coffee and workspace at Beanvantage"
                className="rounded-xl my-8 w-full h-50" 
                loading="lazy"
              />

              <h3 className="text-2xl font-bold text-[#D4A76A]">The Beanvantage Difference</h3>
              <p>
                Unlike typical coffee shops, our Restobar concept combines:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Specialty coffee bar with professional baristas</li>
                <li>Flexible seating arrangements for groups of all sizes</li>
                <li>Quiet zones for focused work</li>
                <li>Networking-friendly lounge areas</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
