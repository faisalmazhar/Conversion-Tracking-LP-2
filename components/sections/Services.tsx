import Image from "next/image";

type ServiceLogo = {
  src: string;
  alt: string;
};

type Service = {
  number: string;
  title: string;
  audience: string;
  desc: string;
  outcome: string;
  logos: ServiceLogo[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Paid Ads Conversion Tracking",
    audience: "For Ecommerce and lead gen",
    desc: "Every click matched to a real purchase, call, or form fill in your CRM.",
    outcome:
      "Your algorithm gets real signal. ROAS goes up without touching a single ad.",
    logos: [
      { src: "/images/logos/google-ads-logo.webp", alt: "Google Ads" },
      { src: "/images/logos/meta-ads-logo.webp", alt: "Meta Ads" },
      { src: "/images/logos/tiktok-ads-logo.webp", alt: "TikTok Ads" },
      { src: "/images/logos/bing-logo.webp", alt: "Bing Ads" },
    ],
  },
  {
    number: "02",
    title: "GA4 and Analytics Setup",
    audience: "For anyone running paid traffic",
    desc: "Every event your funnel needs — configured, clean, and connected to your ad platforms.",
    outcome:
      "Your team, your agency, and your reports all see the same number.",
    logos: [
      { src: "/images/logos/google-analytics-logo.webp", alt: "GA4" },
      { src: "/images/logos/google-tag-manager-logo.webp", alt: "GTM" },
      { src: "/images/logos/google-data-studio.webp", alt: "Looker Studio" },
      { src: "/images/logos/google-big-query-logos.webp", alt: "BigQuery" },
    ],
  },
  {
    number: "03",
    title: "Ad Tracker and Postback Fix",
    audience: "For affiliate marketers and media buyers",
    desc: "Full chain fixed from source to offer to conversion so both numbers match.",
    outcome:
      "No more discrepancies. No more paying for traffic you cannot prove converted.",
    logos: [
      { src: "/images/logos/voluum-logo.webp", alt: "Voluum" },
      { src: "/images/logos/redtrack-logo.jpg", alt: "RedTrack" },
      { src: "/images/logos/click-flare-logo.webp", alt: "ClickFlare" },
      { src: "/images/logos/Keitaro-logo.webp", alt: "Keitaro" },
    ],
  },
  {
    number: "04",
    title: "Affiliate Platform Tracking",
    audience: "For affiliate networks and managers",
    desc: "Pixel firing, payout rules, publisher dashboard — all reflecting reality.",
    outcome:
      "Accurate data for your affiliates means they send more volume to your offers.",
    logos: [
      { src: "/images/logos/everflow-logo.webp", alt: "Everflow" },
      { src: "/images/logos/impact-logo.webp", alt: "Impact" },
      { src: "/images/logos/tune-logos.webp", alt: "Tune" },
      { src: "/images/logos/cake-logos.webp", alt: "Cake" },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card">
      <span className="service-number">{service.number}</span>

      <h3>{service.title}</h3>

      <p className="service-audience">{service.audience}</p>

      <div className="service-logo-row">
        {service.logos.map((logo) => (
          <div className="service-logo-pill" key={logo.alt} data-tooltip={logo.alt}>
            <Image src={logo.src} alt={logo.alt} width={80} height={36} />
          </div>
        ))}
      </div>

      <p className="service-desc">{service.desc}</p>

      <div className="service-outcome-box">
        <span>→</span>
        <p>{service.outcome}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <div>
            <span>What We Set Up</span>
            <h2>Tell Us What You&apos;re Running. We Handle Everything Else.</h2>
            <p>
              Every setup includes implementation, testing, and a live dashboard.
            </p>
          </div>

          <button type="button" className="services-top-link" data-hubspot-popup>
            View All Services →
          </button>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>

        <div className="services-mobile-slider">
          <div className="services-mobile-track">
            {[...services, ...services].map((service, index) => (
              <ServiceCard service={service} key={`${service.title}-${index}`} />
            ))}
          </div>
        </div>

        <div className="services-bottom">
          <p>Not sure which setup you need? We will tell you on the call.</p>

          <button type="button" className="btn-orange" data-hubspot-popup>
            Schedule Free Audit Call
          </button>
        </div>
      </div>
    </section>
  );
}