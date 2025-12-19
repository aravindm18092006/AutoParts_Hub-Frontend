import React, { useState } from "react";
import "./../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact AutoParts Pro</h1>
        <p>Get in touch with our expert team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <h3>📍 Head Office & Showroom</h3>
            <p>456 Automotive Boulevard, T. Nagar<br/>Chennai, Tamil Nadu 600017<br/>Landmark: Near Panagal Park Metro<br/>Parking: Available for 50+ vehicles</p>
          </div>
          <div className="info-item">
            <h3>📞 Contact Numbers</h3>
            <p>Sales: +91 98765 43210<br/>Service: +91 44 2851 9876<br/>Parts Inquiry: +91 98765 54321<br/>Toll-Free: 1800-123-AUTO</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email Support</h3>
            <p>General: info@autopartspro.in<br/>Technical: support@autopartspro.in<br/>Sales: sales@autopartspro.in<br/>Complaints: feedback@autopartspro.in</p>
          </div>
          <div className="info-item">
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM<br/>Saturday: 9:00 AM - 5:00 PM<br/>Sunday: 10:00 AM - 4:00 PM</p>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>
          {submitted && <div className="success-message">Message sent successfully!</div>}
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      


    </div>
  );
};

export default Contact;