const whyItems = [
    {
      number: "01",
      title: "You See What Is Broken Before You Pay Anything",
      text: "We audit your full setup on the first call and show you every gap before you spend a dollar.",
    },
    {
      number: "02",
      title: "We Have Fixed This Exact Problem Hundreds of Times",
      text: "Every iOS update, every GA4 migration, every postback chain — solved before you. You are not our learning curve.",
    },
    {
      number: "03",
      title: "You Own Everything. Forever.",
      text: "We build it, test it, hand it to you fully working. If a platform updates and breaks something, we fix it.",
    },
  ];
  
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "5 Days",
      label: "Avg Setup",
    },
    {
      number: "$0",
      label: "Audit Cost",
    },
    {
      number: "100+",
      label: "Accounts Fixed",
    },
  ];
  
  export default function WhyUs() {
    return (
      <section className="cte-why-section">
        <div className="cte-why-container">
          <div className="cte-why-header">
            <span className="cte-why-eyebrow">What Makes Us Different</span>
  
            <h2 className="cte-why-title">
              This Is Why Our Clients Never Go Back to Guessing.
            </h2>
          </div>
  
          <div className="cte-why-layout">
            <div className="cte-why-left">
              {whyItems.map((item) => (
                <article className="cte-why-item" key={item.number}>
                  <span className="cte-why-watermark">{item.number}</span>
  
                  <div className="cte-why-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
  
            <div className="cte-why-right">
              <div className="cte-why-stat-card">
                {stats.map((stat) => (
                  <div className="cte-why-stat" key={stat.label}>
                    <strong>{stat.number}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="cte-why-action">
            <button type="button" className="cte-why-button" data-hubspot-popup>
              Schedule Free Audit Call
            </button>
  
            <p className="cte-why-note">
              Free audit. No commitment. We show you what is broken before you pay
              anything.
            </p>
          </div>
        </div>
      </section>
    );
  }