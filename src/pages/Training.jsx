import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Dumbbell, Heart, User, Flame, Zap, Shield, Clock, MapPin } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import TiltCard from "../components/TiltCard";
import { programs, weeklySchedule } from "../data/content";

const iconMap = {
  dumbbell: Dumbbell,
  heart: Heart,
  user: User,
  flame: Flame,
  zap: Zap,
  shield: Shield,
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Training() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredPrograms =
    selectedFilter === "ALL"
      ? programs
      : programs.filter((p) => p.tag === selectedFilter);

  const filterTags = ["ALL", "POWER", "ENDURANCE", "ELITE", "METABOLIC", "FIGHT", "RECOVERY"];

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="TRAINING PROGRAMS"
        subtitle="NO GIMMICKS. NO BULLSHIT. JUST METHODICAL PROGRESSION."
        breadcrumb="TRAINING"
        driftWord="STRENGTH"
        bgImage="/images/programs/strength.jpg"
      />

      {/* Program Cards Grid Section */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="DOMINATE" opacity={0.03} top="20%" />

        {/* Filter Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#D62020",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              DISCIPLINES
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.04em",
                color: "#EDEDED",
                lineHeight: 0.95,
              }}
            >
              SELECT YOUR <span style={{ color: "#D62020" }}>WEAPON</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  color: selectedFilter === tag ? "#EDEDED" : "#8A8A8A",
                  background: selectedFilter === tag ? "#D62020" : "#141414",
                  border:
                    selectedFilter === tag
                      ? "1px solid #D62020"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "0.5rem 1rem",
                  borderRadius: "2px",
                  cursor: "none",
                  transition: "all 0.25s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Program Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="training-programs-grid"
        >
          {filteredPrograms.map((prog) => {
            const Icon = iconMap[prog.icon] || Dumbbell;
            return (
              <TiltCard
                key={prog.id}
                style={{
                  background: "#141414",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Photo with Overlay */}
                  <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, #141414 0%, rgba(10, 10, 10, 0.4) 60%, transparent 100%)",
                      }}
                      aria-hidden="true"
                    />

                    {/* Red Icon Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        width: "36px",
                        height: "36px",
                        background: "#D62020",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#EDEDED",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Level Pill */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(10, 10, 10, 0.75)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "2px",
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        color: "#EDEDED",
                      }}
                    >
                      {prog.level}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "1.75rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "1.8rem",
                          letterSpacing: "0.05em",
                          color: "#EDEDED",
                          margin: 0,
                        }}
                      >
                        {prog.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "0.68rem",
                          letterSpacing: "0.15em",
                          color: "#D62020",
                        }}
                      >
                        INTENSITY: {prog.intensity}
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#8A8A8A",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {prog.description}
                    </p>

                    {/* Features checklist */}
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        marginBottom: "1.5rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      {prog.features.map((feat, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.8rem",
                            color: "#CCCCCC",
                          }}
                        >
                          <Check size={13} color="#D62020" style={{ flexShrink: 0 }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Schedule & CTA */}
                <div
                  style={{
                    padding: "1rem 1.75rem 1.5rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Clock size={13} color="#8A8A8A" />
                    <span
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        color: "#8A8A8A",
                      }}
                    >
                      {prog.schedule}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#D62020",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#EDEDED",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#FF2D2D")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Interactive Timetable Schedule Section */}
      <section
        style={{
          background: "#141414",
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              TIMETABLE
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
              WEEKLY TRAINING <span style={{ color: "#D62020" }}>SCHEDULE</span>
            </h2>
          </div>

          {/* Days Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  color: selectedDay === d ? "#EDEDED" : "#8A8A8A",
                  background: selectedDay === d ? "#D62020" : "#0A0A0A",
                  border:
                    selectedDay === d
                      ? "1px solid #D62020"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "2px",
                  cursor: "none",
                  transition: "all 0.25s ease",
                }}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Classes List */}
          <div
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {weeklySchedule[selectedDay]?.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1.5fr 1fr 1fr auto",
                  alignItems: "center",
                  padding: "1.25rem 2rem",
                  borderBottom:
                    idx === weeklySchedule[selectedDay].length - 1
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.06)",
                  gap: "1rem",
                }}
                className="timetable-row"
              >
                {/* Time */}
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                    color: "#D62020",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Clock size={14} />
                  {item.time}
                </div>

                {/* Class Name */}
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.05em",
                    color: "#EDEDED",
                  }}
                >
                  {item.class}
                </div>

                {/* Coach */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#8A8A8A",
                  }}
                >
                  Coach: <strong style={{ color: "#CCCCCC" }}>{item.coach}</strong>
                </div>

                {/* Room */}
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#8A8A8A",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <MapPin size={13} color="#D62020" />
                  {item.room}
                </div>

                {/* Intensity Tag */}
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "2px",
                    background:
                      item.intensity === "Max" || item.intensity === "Extreme"
                        ? "rgba(214, 32, 32, 0.2)"
                        : "rgba(255, 255, 255, 0.08)",
                    color:
                      item.intensity === "Max" || item.intensity === "Extreme"
                        ? "#FF4D4D"
                        : "#EDEDED",
                    border:
                      item.intensity === "Max" || item.intensity === "Extreme"
                        ? "1px solid rgba(214, 32, 32, 0.4)"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {item.intensity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .training-programs-grid { grid-template-columns: 1fr !important; }
          .timetable-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .training-programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
