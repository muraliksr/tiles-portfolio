import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found section-pad">
      <p className="eyebrow">404 · Page not found</p>
      <h1>We can’t find that page.</h1>
      <Link className="button button-dark" to="/">Return to the homepage <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
