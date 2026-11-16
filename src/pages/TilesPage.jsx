import React from "react";
import ServiceDetailPage from "../components/ServiceDetailPage.jsx";

const service = {
  eyebrow: "Tile installation",
  title: "Tiles, fitted with precision.",
  heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
  heroAlt: "Contemporary living space with carefully aligned floor tiles",
  intro: "Considered tile layouts and careful installation for the rooms you live in every day.",
  featureEyebrow: "Our tile work",
  featureTitle: "The right finish for every room.",
  featureDescription: "From surface preparation to the final grout line, we focus on the details that make a tiled space feel complete.",
  features: [
    { title: "Floor tiles", description: "Precise setting-out and clean finishes for interior floor surfaces." },
    { title: "Wall tiles", description: "Balanced layouts and carefully finished edges for walls and feature areas." },
    { title: "Bathroom tiles", description: "Thoughtful tile installation for bathroom walls, floors and wet areas." },
    { title: "Kitchen tiles", description: "Practical, tidy tilework for kitchen floors and splashbacks." },
    { title: "Living room tiles", description: "Large-format and stone-look tile installation for open, connected spaces." },
  ],
  galleryEyebrow: "Selected work",
  galleryTitle: "Tile installation gallery",
  galleryDescription: "A few examples of the surfaces and spaces that inspire our work.",
  gallery: [
    {
      title: "Open-plan floor",
      category: "Floor tiles",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      alt: "Open-plan living room with a light tiled floor",
    },
    {
      title: "Bathroom finish",
      category: "Wall and floor",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      alt: "Modern bathroom with stone-look tiled surfaces",
    },
    {
      title: "Stone-inspired interior",
      category: "Living room",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      alt: "Contemporary home interior with a refined stone floor",
    },
  ],
};

export default function TilesPage() {
  return <ServiceDetailPage service={service} />;
}
