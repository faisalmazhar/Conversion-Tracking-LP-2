import Image from "next/image";

const services = [
    {
        className: "cte-service-card-compact",
        tag: "Postback Chain",
        platforms: [
            { name: "Voluum", logo: "/images/logos/voluum-logo.webp" },
            { name: "RedTrack", logo: "/images/logos/redtrack-logo.jpg" },
            { name: "ClickFlare", logo: "/images/logos/click-flare-logo.webp" },
            { name: "Keitaro", logo: "/images/logos/Keitaro-logo.webp" },
            { name: "Funnel Flux", logo: "/images/logos/FunnelFluxlogo.webp" },
        ],
        title: "Ad Tracker and Postback Fix",
        audience: "For affiliate marketers and media buyers",
        line: "Full chain fixed from source to offer to conversion so both numbers match.",
        outcome:
            "No more discrepancies. No more paying for traffic you cannot prove converted.",
    },
    {
        className: "cte-service-card-wide",
        tag: "Affiliate Network Ops",
        platforms: [
            { name: "Everflow", logo: "/images/logos/everflow-logo.webp" },
            { name: "Click Bank", logo: "/images/logos/click-bank-logo.webp" },
            { name: "Impact", logo: "/images/logos/impact-logo.webp" },
            { name: "Tune", logo: "/images/logos/tune-logos.webp" },
            { name: "Cake", logo: "/images/logos/cake-logos.webp" },
        ],
        title: "Affiliate Platform Tracking",
        audience: "For affiliate networks and managers",
        line: "Pixel firing, payout rules, publisher dashboard — all reflecting reality.",
        outcome:
            "Accurate data for your affiliates means they send more volume to your offers.",
    },
    {
        className: "cte-service-card-featured",
        tag: "Signal Engine",
        platforms: [
            { name: "Google Ads", logo: "/images/logos/google-ads-logo.webp" },
            { name: "Meta Ads", logo: "/images/logos/meta-ads-logo.webp" },
            { name: "Outbrain", logo: "/images/logos/outbrain-logo.webp" },
            { name: "Taboola", logo: "/images/logos/taboola-logo.webp" },
            { name: "Snapchat", logo: "/images/logos/snapchat-logo.webp" },
        ],
        title: "Paid Ads Conversion Tracking",
        audience: "For Ecommerce and lead gen",
        line: "Every click matched to a real purchase, call, or form fill in your CRM.",
        outcome:
            "Your algorithm gets real signal. ROAS goes up without touching a single ad.",
    },
    {
        className: "cte-service-card-compact",
        tag: "Analytics Core",
        platforms: [
            { name: "GA4", logo: "/images/logos/google-analytics-logo.webp" },
            { name: "GTM", logo: "/images/logos/google-tag-manager-logo.webp" },
            { name: "Data Studio", logo: "/images/logos/google-data-studio.webp" },
            { name: "Stape", logo: "/images/logos/stape-logos.webp" },
            { name: "Tiktok Ads", logo: "/images/logos/tiktok-ads-logo.webp" },
        ],
        title: "GA4 and Analytics Setup",
        audience: "For anyone running paid traffic",
        line: "Every event your funnel needs — configured, clean, and connected to your ad platforms.",
        outcome:
            "Your team, your agency, and your reports all see the same number.",
    },
];

export default function Services() {
    return (
        <section className="cte-services-section">
            <div className="cte-services-container">
                <div className="cte-services-header">
                    <span className="cte-services-eyebrow">What We Set Up</span>

                    <h2 className="cte-services-title">
                        Tell Us What You&apos;re Running. We Handle Everything Else.
                    </h2>

                    <p className="cte-services-subtitle">
                        Every setup includes implementation, testing, and a live dashboard.
                    </p>
                </div>

                <div className="cte-services-bento">
                    {services.map((service, index) => (
                        <article
                            className={`cte-service-bento-card ${service.className}`}
                            key={service.title}
                        >
                            <div className="cte-service-card-bg-number">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="cte-service-card-inner">
                                <div className="cte-service-card-top">
                                    <span className="cte-service-tag">{service.tag}</span>

                                    <div className="cte-service-platforms">
                                        {service.platforms.map((platform) => (
                                            <span className="cte-service-logo-chip" key={platform.name}>
                                                <Image
                                                    src={platform.logo}
                                                    alt={platform.name}
                                                    width={120}
                                                    height={42}
                                                    className="cte-service-logo"
                                                />
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="cte-service-main">
                                    <h3>{service.title}</h3>
                                    <p className="cte-service-audience">{service.audience}</p>
                                    <p className="cte-service-line">{service.line}</p>
                                </div>

                                <div className="cte-service-signal-panel">
                                    <span className="cte-service-arrow">→</span>
                                    <p>{service.outcome}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="cte-services-action">
                    <button
                        type="button"
                        className="cte-services-button"
                        data-hubspot-popup
                    >
                        Schedule Free Audit Call
                    </button>

                    <p className="cte-services-note">
                        Not sure which setup you need? We will tell you on the call.
                    </p>
                </div>
            </div>
        </section>
    );
}




// import Image from "next/image";



// const services = [
//     {
//         platforms: [
//             { name: "Voluum", logo: "/images/logos/voluum-logo.webp" },
//             { name: "RedTrack", logo: "/images/logos/redtrack-logo.jpg" },
//             { name: "ClickFlare", logo: "/images/logos/click-flare-logo.webp" },
//             { name: "Keitaro", logo: "/images/logos/Keitaro-logo.webp" },
//             { name: "Funnel Flux", logo: "/images/logos/FunnelFluxlogo.webp" },
//         ],
//         title: "Ad Tracker and Postback Fix",
//         audience: "For affiliate marketers and media buyers",
//         line: "Full chain fixed from source to offer to conversion so both numbers match.",
//         outcome:
//             "No more discrepancies. No more paying for traffic you cannot prove converted.",
//     },
//     {
//         platforms: [
//             { name: "Everflow", logo: "/images/logos/everflow-logo.webp" },
//             { name: "Click Bank", logo: "/images/logos/click-bank-logo.webp" },
//             { name: "Impact", logo: "/images/logos/impact-logo.webp" },
//             { name: "Tune", logo: "/images/logos/tune-logos.webp" },
//             { name: "Cake", logo: "/images/logos/cake-logos.webp" },
//         ],
//         title: "Affiliate Platform Tracking",
//         audience: "For affiliate networks and managers",
//         line: "Pixel firing, payout rules, publisher dashboard — all reflecting reality.",
//         outcome:
//             "Accurate data for your affiliates means they send more volume to your offers.",
//     },
//     {
//         platforms: [
//             { name: "Google Ads", logo: "/images/logos/google-ads-logo.webp" },
//             { name: "Meta Ads", logo: "/images/logos/meta-ads-logo.webp" },
//             { name: "Outbrain", logo: "/images/logos/outbrain-logo.webp" },
//             { name: "Taboola", logo: "/images/logos/taboola-logo.webp" },
//             { name: "Snapchat", logo: "/images/logos/snapchat-logo.webp" },
//             { name: "News Break", logo: "/images/logos/newsbreak-logo.webp" },
//         ],
//         title: "Paid Ads Conversion Tracking",
//         audience: "For Ecommerce and lead gen",
//         line: "Every click matched to a real purchase, call, or form fill in your CRM.",
//         outcome:
//             "Your algorithm gets real signal. ROAS goes up without touching a single ad.",
//     },
//     {
//         platforms: [
//             { name: "GA4", logo: "/images/logos/google-analytics-logo.webp" },
//             { name: "GTM", logo: "/images/logos/google-tag-manager-logo.webp" },
//             { name: "Data Studio", logo: "/images/logos/google-data-studio.webp" },
//             { name: "Stape", logo: "/images/logos/stape-logos.webp" },
//             { name: "Tiktok Ads", logo: "/images/logos/tiktok-ads-logo.webp" },
//         ],
//         title: "GA4 and Analytics Setup",
//         audience: "For anyone running paid traffic",
//         line: "Every event your funnel needs — configured, clean, and connected to your ad platforms.",
//         outcome:
//             "Your team, your agency, and your reports all see the same number.",
//     },
// ];

// export default function Services() {
//     return (
//         <section className="cte-services-section">
//             <div className="cte-services-container">
//                 <div className="cte-services-header">
//                     <span className="cte-services-eyebrow">What We Set Up</span>

//                     <h2 className="cte-services-title">
//                         Tell Us What You&apos;re Running. We Handle Everything Else.
//                     </h2>

//                     <p className="cte-services-subtitle">
//                         Every setup includes implementation, testing, and a live dashboard.
//                     </p>
//                 </div>

//                 <div className="cte-services-list">
//                     {services.map((service) => (
//                         <article className="cte-service-card" key={service.title}>
//                             <div className="cte-service-platforms">
//                             {service.platforms.map((platform) => (
//                                 <span className="cte-service-logo-chip" key={platform.name}>
//                                 <Image
//                                     src={platform.logo}
//                                     alt={platform.name}
//                                     width={110}
//                                     height={40}
//                                     className="cte-service-logo"
//                                 />
//                                 </span>
//                             ))}
//                             </div>

//                             <div className="cte-service-content">
//                                 <h3>{service.title}</h3>
//                                 <p className="cte-service-audience">{service.audience}</p>
//                                 <p className="cte-service-line">{service.line}</p>
//                             </div>

//                             <div className="cte-service-outcome">
//                                 <span>→</span>
//                                 <p>{service.outcome}</p>
//                             </div>
//                         </article>
//                     ))}
//                 </div>

//                 <div className="cte-services-action">
//                     <button
//                         type="button"
//                         className="cte-services-button"
//                         data-hubspot-popup
//                     >
//                         Schedule Free Audit Call
//                     </button>

//                     <p className="cte-services-note">
//                         Not sure which setup you need? We will tell you on the call.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

