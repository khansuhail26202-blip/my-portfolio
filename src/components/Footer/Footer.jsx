import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Suhail khan 👨‍💻</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
          
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTelegram />, link: "https://t.me/Suhailraja_000/" },
            { icon: <FaFacebook />, link: "https://www.faceboocom/suhail-khan/" },
            { icon: <FaWhatsapp />, link: "http://wa.me/919760409576/" },
            { icon: <FaLinkedin />, link: " https://www.linkedin.com/in/suhailkhan-developer" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/Suhailraja_000/" },
            { icon: <FaYoutube />, link: "https://youtube.com/@ronaldo_cristiano_sk?si=4eWs-apXVUN2PF0S" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 suhail khan ❣️. All rights reserved❣️.
        </p>
    
      </div>
    </footer>
  );
};

export default Footer;
