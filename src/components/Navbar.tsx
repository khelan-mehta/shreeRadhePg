"use client";
import React, { useState } from "react";
import { User2, Menu, X, Home, Info, Hotel, Phone } from "lucide-react";
import { motion } from "framer-motion";
import NavLink from "./uiCustom/NavLinks";
import Link from "next/link";

const iconMap: any = {
  Home,
  Info,
  Hotel,
  Phone,
};

const navLinks = [
  { href: "/#home", text: "Home" },
  { href: "/#amenities", text: "Amenities" },
  { href: "/#location", text: "Location" },
  { href: "/#about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const mobileLinks = [
  { icon: "Home", text: "Home", href: "/#home" },
  { icon: "Info", text: "Amenities", href: "/#amenities" },
  { icon: "Hotel", text: "Location", href: "/#location" },
  { icon: "Info", text: "About", href: "/#about" },
  { icon: "Phone", text: "Contact", href: "/contact" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (target: string) => {
    let yOffset = 0; // Default scroll position

    switch (target) {
      case "home":
        yOffset = 0;
        break;
      case "about":
        yOffset = 800; // Adjust as needed
        break;
      case "amenities":
        yOffset = 1200; // Adjust as needed
        break;
      case "location":
        yOffset = 2100; // Adjust as needed
        break;

      default:
        break;
    }

    window.scrollTo({ top: yOffset, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 bg-background z-10 sm:px-0">
      <div
        className="flex flex-col w-screen pt-8 pb-3 px-6 sm:px-0 overflow-hidden z-[2]"
        style={{ zIndex: "100" }}
      >
        <div className="flex justify-between items-center px-3 sm:px-12">
          <div className="flex text-[26px] text-primary sm:text-[42px] font-extrabold roboto-slab self-center">
            SHREE RADHE
          </div>
          <div className="hidden text-secondary roboto-slab md:flex gap-8 uppercase items-center font-semibold text-[18px]">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                text={link.text}
                onClick={() => handleLinkClick(link.href.split("#")[1])}
              />
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="z-50 4 sm:mt-0">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-12 absolute top-24 left-0 text-[40px] font-semibold w-screen z-[1] p-12 bg-[#ECEAE5] mt-2 h-screen text-pretty italic"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col h-[90vh] overflow-hidden items-center gap-12 absolute left-0 text-[30px] font-semibold w-screen z-[1] px-12 py-2 text-pretty italic"
            >
              {mobileLinks.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="self-center flex justify-between w-full items-center gap-2"
                  >
                    {item.text === "Contact" ? (
                      <>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2"
                          onClick={() => {
                            setTimeout(() => {
                              setIsMenuOpen(false);
                            }, 300);
                          }}
                        >
                          <Icon size={40} /> {item.text}
                        </Link>
                      </>
                    ) : (
                      <>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href.split("#")[1]);
                            setTimeout(() => {
                              setIsMenuOpen(false);
                            }, 300);
                          }}
                          className="flex items-center gap-2"
                        >
                          <Icon size={40} /> {item.text}
                        </a>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
        <hr className="w-[70%] self-center mt-5" />
      </div>
    </div>
  );
};

export default Navbar;
