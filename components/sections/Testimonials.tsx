const TRUSTPILOT_URL = "https://www.trustpilot.com/review/conversiontrackingexperts.com";

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "He went through my RedTrack setup, found the errors in 20 minutes that I had spent 3 weeks trying to debug, and explained exactly what was wrong. Then we tested live purchases to make sure everything worked.",
    name: "Jay Amin",
    detail: "Media Buyer, United Kingdom",
  },
  {
    stars: "★★★★★",
    quote:
      "ClickMagick, RedTrack, Funnelish, Shopify — every platform set up with zero errors. He handled advanced affiliate and ecommerce setups I had never seen done cleanly before. Absolute pro.",
    name: "George",
    detail: "Ecommerce and Affiliate, United Kingdom",
  },
  {
    stars: "★★★★★",
    quote:
      "Retreaver, Ringba, Unbounce, custom landing pages — Muhammad delivered top results on every single one. His technical skill is unlike anyone I have worked with in this space.",
    name: "Jonathan",
    detail: "Performance Marketing, USA",
  },
];

export default function Testimonials() {
  return (
    <section className="cte-testimonials-section">
      <div className="cte-testimonials-container">
        <div className="cte-testimonials-header">
          <span className="cte-testimonials-eyebrow">From Our Clients</span>

          <h2 className="cte-testimonials-title">
            What They Said After Their{" "} Tracking Was Fixed
          </h2>
        </div>

        <div className="cte-testimonials-grid">
          {testimonials.map((item) => (
            <article className="cte-testimonial-card" key={item.name}>
              <div className="cte-testimonial-stars" aria-label="5 star review">
                {item.stars}
              </div>

              <blockquote className="cte-testimonial-quote">
                “{item.quote.replace(/^"|"$/g, "")}”
              </blockquote>

              <div className="cte-testimonial-author">
                <strong>{item.name}</strong>

                <p>
                  {item.detail}
                  <span className="cte-trustpilot-verified">
                    <span className="cte-trustpilot-mark">★</span>
                    Verified on Trustpilot
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="cte-testimonials-link-wrap">
          <a
            href={TRUSTPILOT_URL}
            className="cte-testimonials-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Trustpilot
          </a>
        </div>

        <div className="cte-testimonials-growth-note">
          <strong>Review growth note:</strong> You currently have 5 reviews and
          a 4.1 score. Before scaling spend on this page, aim for at least 15
          reviews by sending every past client a direct Trustpilot review link.
        </div>
      </div>
    </section>
  );
}