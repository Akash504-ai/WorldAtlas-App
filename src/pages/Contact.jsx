import React, { useState } from 'react';
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handelFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);

    // Show success message
    setSuccess(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <h2 className="container-title"> Contact Us </h2>
      <section className="section-contact">
        <form action={handelFormSubmit}>
          <input 
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input 
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea 
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          />

          <button type="submit">
            Send
          </button>
        </form>

        {/* Success Message (animated from top) */}
        <AnimatePresence>
          {success && (
            <motion.div
              key="success-popup"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="success-popup"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Contact;
