import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Join Our Mission</h1>
        <h3>Be the Change</h3>
        <p>
          Your time and effort can make a lasting impact on our planet. Join us in protecting nature, supporting sustainability initiatives, and creating a greener future. Whether through volunteering, donations, or spreading awareness, every action counts!
        </p>
        <Link to={"/donate"} className="btn">
        Support Our Cause
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
