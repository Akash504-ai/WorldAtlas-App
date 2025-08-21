import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion"; // import framer motion
import earth from "../assets/earth.png";
import "./Home.css";
import About from "./About.jsx";
import { NavLink } from "react-router-dom";

const Home = () => {
  // Parent animation (stagger children)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  // Child animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <motion.main
      className="hero-section"
      initial={{ opacity: 0, y: 50 }} // start state
      animate={{ opacity: 1, y: 0 }} // final state
      transition={{ duration: 1 }} // smooth effect
    >
      <div className="containerr">
        {/* LEFT SIDE (Staggered Reveal) */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Explore the World, One Country at a Time
          </motion.h1>

          <motion.p variants={itemVariants}>
            Discover the history, culture, and beauty of every nation. Sort,
            search and filter through countries to find the details you need.
          </motion.p>

          <NavLink to="/country" className="explore-btn">
            {/* Use motion for button animation */}
            <motion.button variants={itemVariants}>
              Start Exploring <IoArrowForwardOutline />
            </motion.button>
          </NavLink>
        </motion.div>

        {/* RIGHT SIDE (Rotating Earth) */}
        <div className="hero-right">
          <motion.img
            src={earth}
            alt="Earth"
            className="earth-img"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity, // infinite loop
              repeatType: "loop",
              duration: 5, // adjust speed
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.main>
    
    <About />
    </>
  );
};

export default Home;
