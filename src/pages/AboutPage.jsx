import React from "react";
import FeatureGrid from "../components/FeatureGrid.jsx";
import ProjectGallery from "../components/ProjectGallery.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const services = [
  { title: "Tile installation", description: "Floor, wall, bathroom, kitchen and living room tilework." },
  { title: "Grouting & epoxy", description: "Grout application, replacement and epoxy finishing." },
  { title: "Tile cleaning", description: "Tile and grout cleaning, restoration and post-installation care." },
];

const commitments = [
  { title: "Careful planning", description: "We take time to understand the room, the surface and the finish you want." },
  { title: "Neat workmanship", description: "We work with care and keep the details and the work area in mind." },
  { title: "Clear communication", description: "We explain the process and help you choose suitable materials for your project." },
];

const projects = [
  {
    title: "Warm, open living space",
    category: "Tile installation",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    alt: "Warm open living space with a stone-look tiled floor",
  },
  {
    title: "Bathroom tile finish",
    category: "Grouting & detail",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern bathroom with carefully finished tile surfaces",
  },
  {
    title: "Light-filled interior",
    category: "Floor care",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary interior featuring a light stone floor",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img
          className="page-hero-image"
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88"
          alt="A thoughtfully finished home interior with a light stone floor"
        />
        <div className="page-hero-shade" />
        <div className="page-hero-copy">
          <p className="eyebrow eyebrow-light">About MK Tiles</p>
          <h1>Careful hands. Lasting results.</h1>
          <p>We help create clean, durable and beautiful tiled spaces through thoughtful planning, skilled installation and attention to detail.</p>
          <WhatsAppButton className="button button-gold">Talk about your project <span aria-hidden="true">↗</span></WhatsAppButton>
        </div>
      </section>

      <section className="about-intro content-section section-pad">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>Tile work that feels considered from start to finish.</h2>
        </div>
        <div className="about-intro-copy">
          <p>MK Tiles provides tile installation, grouting and tile care for homes and other spaces. We believe a great finish comes from sound preparation, clear communication and care at every stage.</p>
          <p>From selecting a layout to completing the final joints, our focus is on dependable workmanship and a tidy result that suits the space.</p>
        </div>
      </section>

      <section className="about-experience section-pad">
        <p className="eyebrow">Experience &amp; expertise</p>
        <h2>Practical knowledge, from preparation to the final finish.</h2>
        <p>Our work spans tile installation, grout finishing and tile care. We consider the surface, setting-out, materials and room use before choosing the right approach for each project.</p>
      </section>

      <section className="content-section section-pad section-warm">
        <SectionHeading eyebrow="What we do" title="Services for the whole tile project." />
        <FeatureGrid items={services} />
      </section>

      <section className="content-section section-pad">
        <SectionHeading eyebrow="Why choose us" title="Quality is in the details." description="A practical, detail-focused approach helps every stage of your project run smoothly." />
        <FeatureGrid items={commitments} />
      </section>

      <section className="gallery-section section-pad">
        <SectionHeading eyebrow="Selected spaces" title="Completed project gallery" description="A selection of interior and tilework references that reflect the finish we aim for." />
        <p className="gallery-note">Representative imagery. Replace these references with your completed project photographs.</p>
        <ProjectGallery projects={projects} />
      </section>

      <section className="about-contact-section section-pad">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Have a tile project in mind?</h2>
          <p>Tell us a little about the space and the work you need.</p>
        </div>
        <div className="about-contact-details">
          <a href="tel:+918248504272">Call 82485 04272</a>
          <WhatsAppButton>Contact us on WhatsApp <span aria-hidden="true">↗</span></WhatsAppButton>
        </div>
      </section>
    </>
  );
}
