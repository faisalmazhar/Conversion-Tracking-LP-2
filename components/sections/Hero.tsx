import Image from "next/image";
import Link from "next/link";
import LogoBrands from "@/components/sections/LogoBrands";

const reviewBadges = [
    {
      platform: "Trustpilot",
      rating: 4.1,
    },
    {
      platform: "Clutch",
      rating: 4.5,
    },
    {
      platform: "Google Reviews",
      rating: 5,
    },
  ];

export default function Hero() {
  return (
    <section className="cte-hero">
      <div className="cte-hero-container">
        <div className="cte-hero-content">
          <span className="cte-hero-eyebrow">
            <span className="cte-eyebrow-eye" aria-hidden="true"></span>
            Conversion Tracking Setup
          </span>

          <h1 className="cte-hero-title">
            You're Burning. Ad Budget on Campaigns You Can't Prove Are
            Working.
          </h1>

          <p className="cte-hero-text">
            We set up your complete tracking in 5 days so you know exactly which
            ad made the sale and what to scale.
          </p>

          <div className="cte-hero-action">
            <Link href="#final-cta" className="cte-hero-button" data-hubspot-popup>
              Schedule Free Audit Call
            </Link>

            {/* <p className="cte-hero-note">
              Free audit. No commitment. We show you what is broken before you
              pay anything.
            </p> */}
          </div>

          
          <div className="cte-hero-reviews">
            {reviewBadges.map((review) => (
                <div className="cte-review-badge" key={review.platform}>
                <span className="cte-star-rating" aria-label={`${review.rating} stars`}>
                    <span className="cte-star-base">★★★★★</span>
                    <span
                    className="cte-star-fill"
                    style={{ width: `${(review.rating / 5) * 100}%` }}
                    >
                    ★★★★★
                    </span>
                </span>

                <span className="cte-review-platform">{review.platform}</span>
                </div>
            ))}
            </div>

          
        </div>

        <div className="cte-hero-image-wrap">
          <Image
            src="/images/hero.png"
            alt="Conversion tracking hero image"
            width={900}
            height={900}
            priority
            className="cte-hero-image"
          />
        </div>
      </div>
      <LogoBrands />
    </section>
  );
}