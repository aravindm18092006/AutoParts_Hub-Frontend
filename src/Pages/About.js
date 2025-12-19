import React from "react";
import "./../Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About AutoParts Pro</h1>
        <p>Your trusted automotive parts partner since 2020</p>
      </div>

      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>AutoParts Pro was founded in 2020 with a mission to provide genuine automotive parts at competitive prices. We are a family-owned business serving customers across Chennai and Tamil Nadu.</p>
        </section>

        <section className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Genuine Quality:</h3>
              <p>We partner with OEM manufacturers and certified suppliers to ensure every part meets original specifications and quality standards</p>
            </div>
            <div className="value-card">
              <h3>Fast Delivery:</h3>
              <p>Same-day dispatch for Chennai, 24-48 hour delivery across Tamil Nadu, and nationwide shipping with real-time tracking</p>
            </div>
            <div className="value-card">
              <h3>Fair Pricing:</h3>
              <p>Transparent pricing with no hidden costs, bulk discounts for garages, and price matching guarantee on competitor rates</p>
            </div>
            <div className="value-card">
              <h3>Customer First:</h3>
              <p>Expert technical support, installation guidance, and comprehensive warranty coverage on all products</p>
            </div>
            <div className="value-card">
              <h3>Sustainability:</h3>
              <p>Eco-friendly packaging, old parts recycling program, and promoting sustainable automotive practices</p>
            </div>
            <div className="value-card">
              <h3>Knowledge:</h3>
              <p>Technical expertise, installation tutorials, and maintenance tips to help customers make informed decisions</p>
            </div>
          </div>
        </section>


        

      </div>
    </div>
  );
};

export default About;