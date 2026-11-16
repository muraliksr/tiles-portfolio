import React from "react";
import Hero from "../components/Hero.jsx";
import ServiceSlider from "../components/ServiceSlider.jsx";

export default function HomePage() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88"
        imageAlt="Warm contemporary living room with a large-format stone tile floor"
        eyebrow="Tile Fitting · Grouting · Floor Care"
        title="Precision in Every Tile. Perfection in Every Detail."
        copy="Professional tile installation, epoxy grouting and floor cleaning for beautiful, long-lasting spaces."
        action="Explore Our Services"
        actionHref="#services"
      />
      <ServiceSlider />
    </>
  );
}
