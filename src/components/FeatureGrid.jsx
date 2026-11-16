import React from "react";

export default function FeatureGrid({ items, className = "" }) {
  return (
    <div className={`feature-grid${className ? ` ${className}` : ""}`}>
      {items.map((item, index) => (
        <article className="feature-card" key={item.title}>
          <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
