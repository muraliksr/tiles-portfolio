import React from "react";
import ServiceDetailPage from "../components/ServiceDetailPage.jsx";

const service = {
  eyebrow: "Grouting & epoxy",
  title: "The detail between every tile.",
  heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88",
  heroAlt: "Bathroom interior with detailed tile and grout work",
  intro: "Neat, durable grout joints and epoxy finishes that complete a tile installation.",
  featureEyebrow: "Our grout work",
  featureTitle: "Clean joints. Considered materials.",
  featureDescription: "We match preparation and grout selection to the tiled surface and the product manufacturer’s guidance.",
  features: [
    { title: "Tile joint filling", description: "Consistent joint filling to complete new tile installations with a clean finish." },
    { title: "Epoxy grouting", description: "Epoxy grout application for projects where its performance and finish are appropriate." },
    { title: "Bathroom grouting", description: "Careful grout application and replacement for bathroom walls and floors." },
    { title: "Kitchen grouting", description: "Tidy joint finishing for kitchen floors, walls and splashback tilework." },
  ],
  galleryEyebrow: "Project details",
  galleryTitle: "Grouting & epoxy gallery",
  galleryDescription: "Examples of tile surfaces and joint finishes.",
  galleryNote: "Representative interior imagery. Project photographs can be added here as your portfolio grows.",
  gallery: [
    {
      title: "Before",
      category: "Joint preparation",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      alt: "Tile floor before grout joint finishing",
    },
    {
      title: "After",
      category: "Grouting",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      alt: "Finished bathroom tiles with neat grout joints",
    },
    {
      title: "Clean tile joints",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      alt: "Bathroom tilework with carefully finished joints",
    },
  ],
};

export default function GroutingPage() {
  return <ServiceDetailPage service={service} />;
}
