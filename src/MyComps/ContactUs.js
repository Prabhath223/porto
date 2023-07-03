import React, { useState } from "react";
import axios from "axios";
import './Contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("/send-email", formData);
      alert("Submitted Successfully. Our Team will contact you very soon");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Let's Contact With Us</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        <form onSubmit={handleFormSubmit} className="contact-form">
          {/* Form fields */}
          {/* ... */}
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              aria-label="name"
              placeholder="Your name*"
              required
              className="input-field"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              aria-label="email"
              placeholder="Email address*"
              required
              className="input-field"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="subject"
              aria-label="subject"
              placeholder="Subject"
              className="input-field"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="phone"
              aria-label="phone"
              placeholder="Phone number"
              className="input-field"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <textarea
            name="message"
            aria-label="message"
            placeholder="Your message...*"
            required
            className="input-field"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="terms_and_policy"
              id="terms"
              required
              className="checkbox"
            />
            <label htmlFor="terms" className="label">
              Accept <a href="#" className="label-link">Terms of Services</a> and <a href="#" className="label-link">Privacy Policy</a>
            </label>
          </div>
          {/* Submit button with custom spinner */}
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? (
              <div className="spinner-horizontal" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Rest of the component code */}
      </div>
    </section>
  );
}

export default Contact;
