import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, rgba(13, 13, 13, 0.4), rgba(0, 0, 0, 0.6))",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(var(--accent-rgb), 0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Nikhileswar Behera</strong> — a passionate{" "}
          <strong>Computer Science & Engineering student</strong> and{" "}
          <strong>AI/ML & IoT developer</strong> who loves turning complex ideas
          into intelligent, real-world systems. I’m deeply fascinated by how data,
          embedded sensors, and machine learning models can be integrated to solve
          critical challenges in smart cities, computer vision, and edge automation.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond writing code, I enjoy leading developer communities, collaborating on open-source projects,
          and designing scalable software architecture. My experience spans mobile development with Flutter,
          cloud synchronization with Firebase, and edge computing. I seek to build technical solutions that
          are not only highly accurate, but also user-centric and responsive.
        </p>

        <p>
          Computer Science student with hands-on experience in Artificial Intelligence, Machine Learning, Embedded Systems, IoT, and mobile app development. Skilled in building real-time intelligent systems using Flutter, Firebase, computer vision, and automation technologies, with strong problem solving skills, teamwork, and project leadership abilities.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 0 25px rgba(var(--accent-rgb), 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(var(--accent-rgb), 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor of Technology in Computer Science and Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Andhra University</strong> — Visakhapatnam, Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Pursuing | CGPA: 8.55
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>10/2023 – Present</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 0 25px rgba(var(--accent-rgb), 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(var(--accent-rgb), 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Senior Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Narayana College</strong> — Visakhapatnam, Andhra Pradesh (APSCHE Board)
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  CGPA: 9.32
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed: 01/2021 – 07/2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 0 25px rgba(var(--accent-rgb), 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(var(--accent-rgb), 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>St. Joseph’s School</strong> — Paralakhemundi, Odisha (ICSE Board)
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  CGPA: 8.7
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed: 04/2012 – 07/2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
