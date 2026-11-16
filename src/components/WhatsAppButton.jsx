import React from "react";

const WHATSAPP_PHONE = "918248504272";

export default function WhatsAppButton({ children, message, className = "button button-dark", onClick }) {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    message || "Hello MK Tiles, I'd like to discuss a project.",
  )}`;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
