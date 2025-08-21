import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // pure black
        color: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          padding: "50px 40px",
          borderRadius: "14px",
          boxShadow: "0 8px 24px rgba(255, 255, 255, 0.08)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "15px", fontWeight: "700" }}>
          404
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", fontWeight: "500" }}>
          Oops! Something went wrong.
        </h2>

        {error && (
          <p style={{ fontSize: "1rem", color: "#aaa", marginBottom: "20px" }}>
            {error.data || error.statusText || error.message}
          </p>
        )}

        <p style={{ fontSize: "1rem", color: "#888", marginBottom: "30px" }}>
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#333";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#000";
          }}
        >
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
