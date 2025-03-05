import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "/src/assets/coffee-footer.jpg";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/#blog" },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <div style={bgImage} className="w-full">
      <div className="bg-black/50 min-h-[400px] text-white">
        <div className="container mx-auto grid md:grid-cols-3 pb-16 pt-5 px-6">
          {/* Company details */}
          <div className="py-8">
            <a href="#" className="font-semibold text-3xl tracking-wide">
              Bean Vantage
            </a>
            <p className="pt-4 text-sm">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 gap-6">
            <div className="py-8">
              <h1 className="text-lg font-semibold mb-3">Important Links</h1>
              <ul className="space-y-2">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="hover:text-primary transition-colors duration-200"
                      aria-label={data.title}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8">
              <h1 className="text-lg font-semibold mb-3">Quick Links</h1>
              <ul className="space-y-2">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="hover:text-primary transition-colors duration-200"
                      aria-label={data.title}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 col-span-2 sm:col-auto">
              <h1 className="text-lg font-semibold mb-3">Address</h1>
              <p className="mb-2 text-sm">Angola, Luanda</p>
              <p className="text-sm">+244 123456789</p>

              {/* Social Media Links */}
              <div className="flex items-center gap-4 mt-4">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-2xl hover:text-primary transition-all duration-300" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-2xl hover:text-primary transition-all duration-300" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl hover:text-primary transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
