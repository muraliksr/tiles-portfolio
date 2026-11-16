import React from "react";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Hero({ image, imageAlt, eyebrow, title, copy, action, actionHref = "#services" }) {
  return (
    <section className="hero" aria-label={title}>
      <img className="hero-image" src={image} alt={imageAlt} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{copy}</p>
        <div className="hero-actions">
          <a className="button button-gold" href={actionHref}>
            {action} <span aria-hidden="true">↓</span>
          </a>
          <WhatsAppButton className="button button-outline">
            Contact Us on WhatsApp <span aria-hidden="true">↗</span>
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
