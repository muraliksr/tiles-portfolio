import React from "react";

export default function SectionHeading({ eyebrow, title, description, light = false, titleId }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {description && <p className="heading-note">{description}</p>}
    </div>
  );
}
