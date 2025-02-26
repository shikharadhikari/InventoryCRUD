import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          border: "1px solid white",
          padding: "5px",
        }}
      >
        List
      </Link>
      <Link
        to="/form"
        style={{
          color: "white",
          textDecoration: "none",
          border: "1px solid white",
          padding: "5px",
        }}
      >
        Form
      </Link>
    </nav>
  );
};

export default Navbar;
