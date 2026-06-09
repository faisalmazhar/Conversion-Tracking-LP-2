const processSteps = [
  {
    step: "01",
    label: "Day 1",
    title: "We Find Every Gap",
    description:
      "We audit your GA4, GTM, pixels, CRM, and ad platforms and show you exactly what is broken within 24 hours.",
  },
  {
    step: "02",
    label: "Day 2",
    title: "We Map What to Track",
    description:
      "We define every event that matters and you approve the plan before we touch anything.",
  },
  {
    step: "03",
    label: "Days 3 to 4",
    title: "We Build It",
    description: "We implement everything.",
    highlight: "You do not touch a single thing.",
  },
  {
    step: "04",
    label: "Day 5",
    title: "You Wake Up to Clean Data",
    description:
      "We test every event, fix every error, and hand you a live dashboard.",
  },
];

export default function Process() {
  return (
    <section className="cte-process-section">
      <div className="cte-process-container">
        <div className="cte-process-layout">
          <div className="cte-process-left">
            <span className="cte-process-eyebrow">The Setup</span>

            <h2 className="cte-process-title">
              Done in 5 Days.
            </h2>

            <p className="cte-process-intro">
              A clean tracking system without dragging your team into technical
              chaos. We audit, map, build, test, and hand over the setup ready to
              scale.
            </p>

            <div className="cte-process-summary-card">
              <span>Setup Timeline</span>
              <strong>Audit → Map → Build → Test</strong>
              <p>
                You see what is broken first. Then we fix the full chain from ad
                click to real revenue.
              </p>
            </div>
          </div>

          <div className="cte-process-right">
            <div className="cte-process-timeline">
              <div className="cte-process-timeline-line" aria-hidden="true"></div>

              {processSteps.map((item) => (
                <article className="cte-process-step-card" key={item.step}>
                  <div className="cte-process-step-marker">
                    <span>{item.step}</span>
                  </div>

                  <div className="cte-process-step-content">
                    <div className="cte-process-step-top">
                      <span className="cte-process-step-label">
                        Step {item.step}
                      </span>

                      <span className="cte-process-day-pill">{item.label}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
                      {item.highlight && (
                        <>
                          {" "}
                          <strong>{item.highlight}</strong>
                        </>
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="cte-process-action">
          <button type="button" className="cte-process-button" data-hubspot-popup>
            Schedule Free Audit Call
          </button>

          <p className="cte-process-note">
            We tell you what is broken before you spend a dollar with us.
          </p>
        </div>
      </div>
    </section>
  );
}

// const processSteps = [
//     {
//       step: "Step 01",
//       title: "We Find Every Gap",
//       day: "Day 1",
//       description:
//         "We audit your GA4, GTM, pixels, CRM, and ad platforms and show you exactly what is broken within 24 hours.",
//     },
//     {
//       step: "Step 02",
//       title: "We Map What to Track",
//       day: "Day 2",
//       description:
//         "We define every event that matters and you approve the plan before we touch anything.",
//     },
//     {
//       step: "Step 03",
//       title: "We Build It",
//       day: "Days 3 to 4",
//       description: "We implement everything.",
//       highlight: "You do not touch a single thing.",
//     },
//     {
//       step: "Step 04",
//       title: "You Wake Up to Clean Data",
//       day: "Day 5",
//       description:
//         "We test every event, fix every error, and hand you a live dashboard.",
//     },
//   ];
  
//   export default function Process() {
//     return (
//       <section className="cte-process-section">
//         <div className="cte-process-container">
//           <div className="cte-process-header">
//             <span className="cte-process-eyebrow">The Setup</span>
  
//             <h2 className="cte-process-title">
//               Done in <span className="cte-curve-highlight">5 Days</span>.
//             </h2>
//           </div>
  
//           <div className="cte-process-grid">
//             {processSteps.map((item, index) => (
//               <div className="cte-process-card-wrap" key={item.step}>
//                 <div className="cte-process-card">
//                   <div className="cte-process-top">
//                     <span className="cte-process-step">{item.step}</span>
//                     <span className="cte-process-day">{item.day}</span>
//                   </div>
  
//                   <h3>{item.title}</h3>
  
//                   <p>
//                     {item.description}
//                     {item.highlight && (
//                       <>
//                         {" "}
//                         <strong>{item.highlight}</strong>
//                       </>
//                     )}
//                   </p>
//                 </div>
  
//                 {index !== processSteps.length - 1 && (
//                   <div className="cte-process-arrow" aria-hidden="true">
//                     →
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
  
//           <div className="cte-process-action">
//             <button type="button" className="cte-process-button" data-hubspot-popup>
//               Schedule Free Audit Call
//             </button>
  
//             <p className="cte-process-note">
//               We tell you what is broken before you spend a dollar with us.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }