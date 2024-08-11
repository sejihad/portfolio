import React from "react";
import "./Contact.css";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "c807b9c8-c90a-476d-b66c-e321219552d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };
  return (
    <section className="contact section" id="contact">
      <h3 className="section__subtitle">
        Get In <span>Touch</span>
      </h3>

      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <form onSubmit={onSubmit} className="contact__form" id="contact-form">
          <div className="contact__group">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="contact__input"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="contact__input"
            />
          </div>

          <textarea
            name="user_project"
            required
            placeholder="Enter your message"
            className="contact__input"
          ></textarea>

          <p className="contact__message" id="contact-message"></p>

          <button type="submit" className="button contact__button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
