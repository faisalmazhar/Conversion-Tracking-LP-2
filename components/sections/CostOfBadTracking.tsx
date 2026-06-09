import Link from "next/link";

const costStats = [
    {
        number: "40%",
        text: "of conversions are misattributed in the average ad account running default pixel tracking",
    },
    {
        number: "3.2×",
        text: "higher ROAS seen by businesses after fixing server-side tracking versus running browser-only pixels",
    },
];

export default function CostOfBadTracking() {
    return (
        <section className="cte-cost-section">
            <div className="cte-cost-container">
                <div className="cte-cost-left">
                    <span className="cte-cost-eyebrow">The Cost of Doing Nothing</span>

                    <h2 className="cte-cost-title">
                        Every Month You Run Ads With{" "}
                       Broken Tracking, You Are Paying
                        Full Price for Half the Results.
                    </h2>

                    <p className="cte-cost-text">
                        Brands spending serious money on ads do not guess which campaign
                        worked. They track every click to every sale and let that data tell
                        their algorithm exactly who to find next.
                    </p>
                </div>

                <div className="cte-cost-right">
                    <div className="cte-cost-stats">
                        {costStats.map((stat) => (
                            <div className="cte-cost-stat" key={stat.number}>
                                <strong>{stat.number}</strong>
                                <p>{stat.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cte-loss-box">
                        <span>What broken tracking really costs</span>
                        <p>
                            Bad data does not just hide sales. It teaches your ad platforms to
                            optimize for the wrong people, the wrong campaigns, and the wrong
                            decisions every month.
                        </p>
                    </div>

                    <div className="cte-cost-action">
                        <Link href="#final-cta" className="cte-cost-button" data-hubspot-popup>
                            Schedule Free Audit Call
                        </Link>

                        <p className="cte-cost-note">
                            Find out what your broken tracking has cost you so far.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}