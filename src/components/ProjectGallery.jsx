import React from "react";

export default function ProjectGallery({ projects, variant = "" }) {
  return (
    <div className={`project-gallery${variant ? ` ${variant}` : ""}`}>
      {projects.map((project) => (
        <figure className="gallery-item" key={project.title}>
          <img src={project.image} alt={project.alt} loading="lazy" />
          <figcaption>
            <span className="gallery-category">{project.category}</span>
            <span className="gallery-title">{project.title}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
