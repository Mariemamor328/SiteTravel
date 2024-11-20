// Contact.js
import React from 'react';
import './contact.css';

const Contact = ({ ping,setping }) => {
  return (
    <div className="contact-page">
    
      <section className="hero-section">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour vous aider dans toutes vos aventures de voyage !</p>
      </section>

   
      <section className="contact-form-section">
        <h2>Envoyez-nous un message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nom complet" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
