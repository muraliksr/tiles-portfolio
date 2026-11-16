import React from "react";
import ServiceDetailPage from "../components/ServiceDetailPage.jsx";

const service = {
  eyebrow: "Tile cleaning & care",
  title: "Bring your tiled surfaces back to life.",
  heroImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2200&q=88",
  heroAlt: "Bright tiled interior with clean, polished surfaces",
  intro: "Careful tile and grout cleaning for a fresher finish and a more inviting space.",
  featureEyebrow: "Our cleaning services",
  featureTitle: "A thorough clean, with care for the surface.",
  featureDescription: "We tailor the cleaning approach to the tile and the type of marks, then leave the work area neat.",
  features: [
    { title: "Bathroom tile cleaning", description: "Tile and grout cleaning for bathroom walls, floors and shower areas." },
    { title: "Floor deep cleaning", description: "A thorough clean for tiled floors in homes and shared spaces." },
    { title: "Stain removal", description: "Targeted cleaning to address suitable stains without overlooking the tile material." },
    { title: "Tile polishing", description: "Careful surface care to refresh the appearance of suitable tile and stone finishes." },
  ],
  galleryEyebrow: "Tile care",
  galleryTitle: "Cleaning gallery",
  galleryDescription: "Representative examples of the surfaces we help care for.",
  galleryNote: "Before-and-after examples are representative imagery, not photographs of the same project.",
  gallery: [
    {
      title: "Before cleaning",
      category: "Floor care",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      alt: "Stone-look tiled floor prior to a cleaning service",
    },
    {
      title: "Tile and grout",
      category: "Deep cleaning",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      alt: "Bathroom tile and grout surfaces",
    },
    {
      title: "After cleaning",
      category: "Surface care",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
      alt: "Bright tiled interior after surface care",
    },
  ],
};

export default function CleaningPage() {
  return <ServiceDetailPage service={service} />;
}
