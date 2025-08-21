import React from 'react';
import "./Contact.css"

const Contact = () => {

  const handelFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }

  return (
    <>
    <h2 className="container-title"> Contact Us </h2>
    <section 
    className="section-contact">
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
    </section>
    </>
  );
};

export default Contact;
