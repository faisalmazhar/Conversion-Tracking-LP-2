"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function HubSpotPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handlePopupClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest("[data-hubspot-popup]");

      if (!button) return;

      event.preventDefault();
      setIsOpen(true);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handlePopupClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handlePopupClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("cte-popup-open");
    } else {
      document.body.classList.remove("cte-popup-open");
    }

    return () => {
      document.body.classList.remove("cte-popup-open");
    };
  }, [isOpen]);

  return (
    <>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245852015.js"
        strategy="afterInteractive"
      />

      <div
        className={`cte-popup-overlay ${isOpen ? "cte-popup-active" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="cte-popup-backdrop" onClick={closePopup}></div>

        <div className="cte-popup-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="cte-popup-close"
            onClick={closePopup}
            aria-label="Close popup"
          >
            ×
          </button>

          <div className="cte-popup-header">
            <span className="cte-popup-eyebrow">Free Tracking Audit</span>
            <h2>See What Is Broken Before You Spend Another Dollar.</h2>
            <p>
              Fill out the form and we’ll review your tracking setup, attribution
              gaps, and conversion data issues.
            </p>
          </div>

          <div className="hubspot-form-box">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="64663604-3c3e-4a8b-adfc-fdc261176010"
              data-portal-id="245852015"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}