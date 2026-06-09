const mirrorRows = [
    {
      left: "Google Ads shows 40 conversions. Your CRM shows 11.",
      right:
        "One number. The real one. You know exactly how many sales your ads made.",
    },
    {
      left: "Your Meta pixel fires but never sends a real purchase event.",
      right:
        "Meta gets 95%+ match rate data. The algorithm finds buyers not clickers.",
    },
    {
      left: "You paused a campaign thinking it failed. It was your best one.",
      right:
        "You see which ad made which sale. You scale what works and stop bleeding on what does not.",
    },
    {
      left: "Your agency report never matches GA4. Nobody explains why.",
      right:
        "Every number ties back to real revenue. Your agency has nothing to hide behind.",
    },
    {
      left: "You scale on gut feel because the data cannot be trusted.",
      right:
        "Your budget goes to the campaigns that are actually making you money. Not the ones that look like they are.",
    },
  ];
  
  export default function Mirror() {
    return (
      <section className="cte-mirror-section">
        <div className="cte-mirror-container">
          <div className="cte-mirror-header">
            <span className="cte-mirror-eyebrow">Sound Familiar?</span>
  
            <h2 className="cte-mirror-title">
              Stop Burning Ad Budget on Broken Tracking.
            </h2>
          </div>
  
          <div className="cte-mirror-board">
            <div className="cte-mirror-label cte-mirror-label-left">
              What&apos;s happening right now
            </div>
  
            <div className="cte-mirror-label cte-mirror-label-right">
              What happens after we fix it
            </div>
  
            {mirrorRows.map((row, index) => (
              <div className="cte-mirror-row" key={index}>
                <div className="cte-mirror-cell cte-mirror-cell-left">
                  <span className="cte-mirror-icon cte-mirror-x">×</span>
                  <span>{row.left}</span>
                </div>
  
                <div className="cte-mirror-cell cte-mirror-cell-right">
                  <span className="cte-mirror-icon cte-mirror-check">✓</span>
                  <span>{row.right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }