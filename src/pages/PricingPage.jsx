import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import TiltCard from "../components/TiltCard";
import { pricingPlans, pricingComparison, faqs } from "../data/content";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly
  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="MEMBERSHIP TIERS"
        subtitle="INVEST IN MAXIMUM PHYSICAL RETURN. ZERO LOCK-IN TRAPS."
        breadcrumb="PRICING"
        driftWord="UNCOMPROMISING"
        bgImage="/images/programs/conditioning.jpg"
      />

      {/* Pricing Cards Section */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="INVESTMENT" opacity={0.03} top="15%" />

        {/* Billing Toggle */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#D62020",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            FLEXIBLE COMMITMENT
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#EDEDED",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            CHOOSE YOUR <span style={{ color: "#D62020" }}>INTENSITY LEVEL</span>
          </h2>

          {/* Toggle pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#141414",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "30px",
              padding: "4px",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: billingCycle === "monthly" ? "#EDEDED" : "#8A8A8A",
                background: billingCycle === "monthly" ? "#D62020" : "transparent",
                border: "none",
                borderRadius: "24px",
                padding: "0.6rem 1.4rem",
                cursor: "none",
                transition: "all 0.25s ease",
              }}
            >
              MONTHLY BILLING
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: billingCycle === "yearly" ? "#EDEDED" : "#8A8A8A",
                background: billingCycle === "yearly" ? "#D62020" : "transparent",
                border: "none",
                borderRadius: "24px",
                padding: "0.6rem 1.4rem",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.25s ease",
              }}
            >
              ANNUAL BILLING
              <span
                style={{
                  background: "#EDEDED",
                  color: "#0A0A0A",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.45rem",
                  borderRadius: "10px",
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
            alignItems: "stretch",
          }}
          className="pricing-page-grid"
        >
          {pricingPlans.map((plan) => {
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <TiltCard
                key={plan.id}
                style={{
                  background: plan.featured ? "#1A1A1A" : "#141414",
                  border: plan.featured
                    ? "2px solid #D62020"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "4px",
                  padding: "2.75rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                {/* Badge if featured */}
                {plan.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      background: "#D62020",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "2px",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "#EDEDED",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <p
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.25em",
                      color: plan.featured ? "#D62020" : "#8A8A8A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {plan.name}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.3rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(3.5rem, 6vw, 4.8rem)",
                        color: "#EDEDED",
                        lineHeight: 1,
                      }}
                    >
                      ${price}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        color: "#8A8A8A",
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#8A8A8A",
                      lineHeight: 1.6,
                      marginBottom: "2rem",
                      paddingBottom: "1.75rem",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Included features */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "#EDEDED",
                          lineHeight: 1.45,
                        }}
                      >
                        <Check
                          size={15}
                          color="#D62020"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        {feat}
                      </li>
                    ))}

                    {plan.notIncluded?.map((notFeat, j) => (
                      <li
                        key={`not-${j}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "#555555",
                          lineHeight: 1.45,
                        }}
                      >
                        <X
                          size={15}
                          color="#555555"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        {notFeat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.18em",
                    color: "#EDEDED",
                    background: plan.featured ? "#D62020" : "transparent",
                    border: plan.featured
                      ? "1px solid #D62020"
                      : "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                    borderRadius: "2px",
                    width: "100%",
                    marginTop: "1.5rem",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FF2D2D";
                    e.currentTarget.style.borderColor = "#FF2D2D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = plan.featured
                      ? "#D62020"
                      : "transparent";
                    e.currentTarget.style.borderColor = plan.featured
                      ? "#D62020"
                      : "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  {plan.cta} <ArrowUpRight size={14} />
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table Section */}
      <section
        style={{
          background: "#141414",
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#D62020",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              SIDE BY SIDE
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "0.04em",
                color: "#EDEDED",
                lineHeight: 0.95,
              }}
            >
              COMPLETE FEATURE <span style={{ color: "#D62020" }}>BREAKDOWN</span>
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              background: "#0A0A0A",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "700px",
                borderCollapse: "collapse",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th
                    style={{
                      padding: "1.5rem",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      color: "#8A8A8A",
                    }}
                  >
                    FEATURE
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.4rem",
                      color: "#EDEDED",
                    }}
                  >
                    STARTER
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.4rem",
                      color: "#D62020",
                    }}
                  >
                    PRO (POPULAR)
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.4rem",
                      color: "#EDEDED",
                    }}
                  >
                    ELITE
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                      background: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.015)",
                    }}
                  >
                    <td
                      style={{
                        padding: "1.25rem 1.5rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#EDEDED",
                        fontWeight: 500,
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "1.25rem 1.5rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#8A8A8A",
                      }}
                    >
                      {row.starter}
                    </td>
                    <td
                      style={{
                        padding: "1.25rem 1.5rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#FF6666",
                        fontWeight: 600,
                      }}
                    >
                      {row.pro}
                    </td>
                    <td
                      style={{
                        padding: "1.25rem 1.5rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#EDEDED",
                      }}
                    >
                      {row.elite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#D62020",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            CLARITY
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#EDEDED",
              lineHeight: 0.95,
            }}
          >
            FREQUENTLY ASKED <span style={{ color: "#D62020" }}>QUESTIONS</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => {
            const isExpanded = expandedFaq === i;
            return (
              <div
                key={i}
                style={{
                  background: "#141414",
                  border: isExpanded
                    ? "1px solid #D62020"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    color: "#EDEDED",
                    cursor: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.4rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    color="#D62020"
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isExpanded && (
                  <div
                    style={{
                      padding: "0 2rem 1.75rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#8A8A8A",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .pricing-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
