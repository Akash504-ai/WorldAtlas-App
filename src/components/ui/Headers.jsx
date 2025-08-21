import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // import motion
import "./Headers.css";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for nav links animation
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    }),
  };

  return (
    <motion.header
      className="container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </motion.div>

        {/* Hamburger button (only on mobile) */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links with animation */}
        <AnimatePresence>
          {(isOpen || window.innerWidth > 768) && (
            <motion.nav
              className={`nav-links ${isOpen ? "open" : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ul>
                {["Home", "About", "Country", "Contact"].map((text, i) => (
                  <motion.li
                    key={text}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {text}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Headers;
