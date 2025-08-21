import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    marginTop: "40px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: "0 -4px 12px rgba(0,0,0,0.2)",
  };

  const linkContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "15px",
  };

  const linkStyle = {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const activeStyle = {
    color: "#fff",
    fontWeight: "bold",
    borderBottom: "2px solid #fff",
    paddingBottom: "2px",
  };

  return (
    <footer style={footerStyle}>
      <h2 style={{ marginBottom: "10px" }}>🌍 WorldAtlas</h2>
      <p style={{ fontSize: "14px", color: "#ccc" }}>
        Explore the world, one country at a time
      </p>

      <div style={linkContainer}>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          About
        </NavLink>
        <NavLink
          to="/country"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Country
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          Contact
        </NavLink>
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#aaa" }}>
        © {new Date().getFullYear()} WorldAtlas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
