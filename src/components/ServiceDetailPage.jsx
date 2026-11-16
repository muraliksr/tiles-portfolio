import React from "react";
import FeatureGrid from "./FeatureGrid.jsx";
import ProjectGallery from "./ProjectGallery.jsx";
import SectionHeading from "./SectionHeading.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function ServiceDetailPage({ service }) {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={service.heroImage} alt={service.heroAlt} />
        <div className="page-hero-shade" />
        <div className="page-hero-copy">
          <p className="eyebrow eyebrow-light">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <WhatsAppButton className="button button-gold" message={`Hello MK Tiles, I'm interested in ${service.title.toLowerCase()}.`}>
            Request a consultation <span aria-hidden="true">↗</span>
          </WhatsAppButton>
        </div>
      </section>

      <section className="content-section section-pad">
        <SectionHeading eyebrow={service.featureEyebrow} title={service.featureTitle} description={service.featureDescription} />
        <FeatureGrid items={service.features} />
      </section>

      <section className="gallery-section section-pad">
        <SectionHeading eyebrow={service.galleryEyebrow} title={service.galleryTitle} description={service.galleryDescription} />
        {service.galleryNote && <p className="gallery-note">{service.galleryNote}</p>}
        <ProjectGallery projects={service.gallery} />
      </section>

      <section className="contact-banner section-pad">
        <div>
          <p className="eyebrow eyebrow-light">Start a conversation</p>
          <h2>Let’s talk about your project.</h2>
          <p>Tell us what you have in mind and we’ll help you plan the next step.</p>
        </div>
        <WhatsAppButton className="button button-light" message={`Hello MK Tiles, I'd like to discuss ${service.title.toLowerCase()}.`}>
          Contact us on WhatsApp <span aria-hidden="true">↗</span>
        </WhatsAppButton>
      </section>
    </>
  );
}
