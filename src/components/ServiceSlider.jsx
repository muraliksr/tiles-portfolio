import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";

const services = [
  {
    title: "Tiles",
    description: "Floor, wall and room-by-room tile installation, carefully planned and neatly finished.",
    to: "/tiles",
    image: "photo-1600607687920-4e2a09cf159d",
    alt: "Bright contemporary room with a large-format tile floor",
  },
  {
    title: "Grouting & Epoxy",
    description: "Consistent grout joints and epoxy finishing for a clean, durable tiled surface.",
    to: "/grouting",
    image: "photo-1600566753086-00f18fb6b3ea",
    alt: "Bathroom tilework with clean grout joints",
  },
  {
    title: "Cleaning",
    description: "Tile and grout cleaning to refresh floors and bring back a cared-for finish.",
    to: "/cleaning",
    image: "photo-1600607687644-c7171b42498f",
    alt: "Clean, light tiled floor in a contemporary home",
  },
  {
    title: "About Us",
    description: "Meet the team and learn about our approach to careful tile contracting.",
    to: "/about",
    image: "photo-1600210492486-724fe5c67fb0",
    alt: "Warm modern home with a light stone floor",
  },
];

export default function ServiceSlider() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = [...track.children];
    const trackLeft = track.getBoundingClientRect().left;
    const nextIndex = slides.reduce((closestIndex, slide, index) => {
      const closestDistance = Math.abs(slides[closestIndex].getBoundingClientRect().left - trackLeft);
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      return distance < closestDistance ? index : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
    setCanGoBack(track.scrollLeft > 2);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }, []);

  function move(direction) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  }

  function goToSlide(index) {
    const slide = trackRef.current?.children[index];
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }

  return (
    <section className="service-slider section-pad" id="services" aria-labelledby="services-title">
      <SectionHeading
        eyebrow="Explore MK Tiles"
        title="Services for Every Surface"
        titleId="services-title"
        description="Thoughtful work. A precise finish. Spaces that feel right."
      />
      <div className="slider-controls">
        <p className="slider-hint">Choose a service to explore</p>
        <div className="slider-arrows">
          <button
            className="slider-arrow"
            type="button"
            aria-label="Previous services"
            disabled={!canGoBack}
            onClick={() => move(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="slider-arrow"
            type="button"
            aria-label="Next services"
            disabled={!canGoForward}
            onClick={() => move(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div
        className="slider-track"
        ref={trackRef}
        role="region"
        aria-label="Our services"
        tabIndex={0}
        onScroll={updatePosition}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {services.map((service, index) => (
          <article className="slider-card" key={service.to}>
            <Link className="slider-card-link" to={service.to} aria-label={`Explore ${service.title}`}>
              <img
                src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1100&q=88`}
                alt={service.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="slider-card-shade" />
              <span className="slider-card-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="slider-card-copy">
                <span className="slider-card-title">{service.title}</span>
                <span className="slider-card-description">{service.description}</span>
                <span className="slider-card-more">Explore More <span aria-hidden="true">↗</span></span>
              </span>
            </Link>
          </article>
        ))}
      </div>
      <div className="slider-pagination" aria-label="Select a service slide">
        {services.map((service, index) => (
          <button
            className={`slider-dot${index === activeIndex ? " is-active" : ""}`}
            type="button"
            key={service.to}
            aria-label={`Show ${service.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
