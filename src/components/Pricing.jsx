import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowUpRight } from "lucide-react";
import { pricingPlans } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(headingRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          const cards = sectionRef.current.querySelectorAll(".pricing-card");
          gsap.set(cards, { opacity: 0, y: 50 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        background: "#141414",
        padding: "clamp(5rem, 10vw, 9rem) 2rem",
        position: "relative",
      }}
      aria-labelledby="pricing-heading"
    >
      {/* Subtle red glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #D62020, transparent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <div ref={headingRef} style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#D62020",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            MEMBERSHIP PLANS
          </p>
          <h2
            id="pricing-heading"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "0.04em",
              color: "#EDEDED",
              lineHeight: 0.95,
            }}
          >
            INVEST IN YOUR{" "}
            <span style={{ color: "#D62020" }}>BEST SELF</span>
          </h2>
        </div>

        {/* Plans grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="pricing-grid"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-card"
              style={{
                background: plan.featured ? "#1A1A1A" : "#0A0A0A",
                border: plan.featured
                  ? "1px solid #D62020"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = plan.featured
                  ? "0 20px 60px rgba(214,32,32,0.2)"
                  : "0 20px 60px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Badge */}
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
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "#EDEDED",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <p
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  color: plan.featured ? "#D62020" : "#8A8A8A",
                  marginBottom: "0.75rem",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.25rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(3rem, 5vw, 4rem)",
                    color: "#EDEDED",
                    lineHeight: 1,
                  }}
                >
                  ${plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#8A8A8A",
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#8A8A8A",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
              >
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#EDEDED",
                      lineHeight: 1.5,
                    }}
                  >
                    <Check
                      size={14}
                      style={{
                        color: "#D62020",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  color: plan.featured ? "#EDEDED" : "#EDEDED",
                  background: plan.featured ? "#D62020" : "transparent",
                  border: plan.featured
                    ? "1px solid #D62020"
                    : "1px solid rgba(255,255,255,0.3)",
                  padding: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  borderRadius: "2px",
                  width: "100%",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = plan.featured
                    ? "#FF2D2D"
                    : "rgba(214,32,32,0.1)";
                  e.currentTarget.style.borderColor = "#D62020";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = plan.featured
                    ? "#D62020"
                    : "transparent";
                  e.currentTarget.style.borderColor = plan.featured
                    ? "#D62020"
                    : "rgba(255,255,255,0.3)";
                }}
              >
                {plan.cta}
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

