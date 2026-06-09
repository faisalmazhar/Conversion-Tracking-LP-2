import Image from "next/image";

const showRealLogos = true;

const logos = [
  "/images/logos/activecampaign-logo.webp",
    "/images/logos/impact-logo.webp",
    "/images/logos/tune-logos.webp",
    "/images/logos/cake-logos.webp",
    "/images/logos/stape-logos.webp",
    "/images/logos/marketcall-logos.webp",
    "/images/logos/callgrid-logos.webp",
    "/images/logos/ringba-logos.webp",
    "/images/logos/newsbreak-logo.webp",
    "/images/logos/snapchat-logo.webp",


    "/images/logos/outbrain-logo.webp",
    "/images/logos/taboola-logo.webp", 
    "/images/logos/klaviyo-logo.webp",
    "/images/logos/gesresponse-logo.webp", 
    "/images/logos/framer-logo.webp",
    "/images/logos/activecampaign-logo.webp",
    "/images/logos/unbounce-logo.webp", 
    "/images/logos/sendgrid-logo.webp",
    "/images/logos/google-sheet-logo.webp", 
    "/images/logos/google-big-query-logos.webp",


    "/images/logos/google-tag-manager-logo.webp", 
    "/images/logos/google-analytics-logo.webp",
    "/images/logos/merchant-center-logo.webp", 
    "/images/logos/bing-logo.webp",
    "/images/logos/hubspot-logo.webp",
    "/images/logos/zapier-logo.webp", 
    "/images/logos/meta-ads-logo.webp",
    "/images/logos/tiktok-ads-logo.webp", 
    "/images/logos/google-ads-logo.webp",


    "/images/logos/shopify-logo.webp",
    "/images/logos/wordpress-logo.webp", 
    "/images/logos/woocommerce-logo.webp",
    "/images/logos/webflow-logo.webp", 
    "/images/logos/clickfunnel-logo.webp",
    "/images/logos/funnelish-logo.webp",
    "/images/logos/checkoutchamp-logo.webp", 
    "/images/logos/voluum-logo.webp",
    "/images/logos/redtrack-logo.jpg", 
    "/images/logos/click-flare-logo.webp",

    "/images/logos/Keitaro-logo.webp", 
    "/images/logos/FunnelFluxlogo.webp",
];

function getLogoAlt(logo: string) {
  return logo
    .split("/")
    .pop()
    ?.replace(/\.(webp|jpg|jpeg|png|svg)$/i, "")
    .replace(/-/g, " ")
    .replace(/logo|logos/gi, "")
    .trim() || "Partner logo";
}

export default function LogoBrands() {
  return (
    <section className="cte-logo-brands">
      <div className="cte-logo-brands-container">

        <p className="cte-logo-brands-label">
          Trusted by owners spending <span>millions</span> in ads
        </p>

        {showRealLogos ? (
          <div className="cte-logo-slider" aria-label="Trusted platform logos">
            <div className="cte-logo-slider-track">
              {[...logos, ...logos].map((logo, index) => (
                <div className="cte-logo-slider-item" key={`${logo}-${index}`}>
                  <Image
                    src={logo}
                    alt={getLogoAlt(logo)}
                    width={180}
                    height={70}
                    className="cte-slider-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h2 className="cte-logo-fallback-text">
            We have fixed tracking for 100+ ad accounts across Google, Meta,
            TikTok, and affiliate networks.
          </h2>
        )}
      </div>
    </section>
  );
}