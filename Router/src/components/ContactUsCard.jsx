
import React from "react";
import "./ContactUsCard.css";

const ContactUsCard = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you!</p>

        {/* Contact Info */}
        <div className="contact-info">
          <p>📧 contact@example.com</p>
          <p>📞 +1 234 567 890</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsCard;
