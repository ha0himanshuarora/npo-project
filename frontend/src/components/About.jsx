import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          Our organization was founded with the mission to protect and preserve our planet for future generations. Through educational resources, hands-on initiatives, and community-driven action, we empower individuals and communities to make sustainable choices. We believe that through collective effort, we can address the pressing environmental challenges of today, from climate change to biodiversity loss, and create a more sustainable world. Join us in our commitment to conservation, as we work to safeguard natural habitats, promote renewable energy, and foster a culture of sustainability.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
