import React from "react";
import { motion } from "framer-motion";
import { FileText, User, MapPin, Mail, Phone, GraduationCap, Briefcase, Cpu, Settings, Download, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(var(--accent-rgb), 0.08)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "var(--accent)", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}
        >
          <FileText size={28} /> Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "var(--accent)", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <User size={24} /> NIKHILESWAR BEHERA
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              Computer Science & Engineering Student | Andhra University
            </p>
            <p style={{ margin: "6px 0", fontSize: 14, color: "#aaa", display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={14} style={{ color: "var(--accent)" }} /> Visakhapatnam, Andhra Pradesh, India
            </p>
            <p style={{ margin: "6px 0", fontSize: 14, color: "#aaa", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <Mail size={14} style={{ color: "var(--accent)" }} /> nikhileswarb7@gmail.com
              <span style={{ color: "#555", margin: "0 4px" }}>|</span>
              <Phone size={14} style={{ color: "var(--accent)" }} /> +91 7684023522
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, rgba(var(--accent-rgb), 0.25), #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "var(--accent)" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Computer Science student with hands-on experience in Artificial Intelligence, Machine Learning, Embedded Systems, IoT, and mobile app development. Skilled in building real-time intelligent systems using Flutter, Firebase, computer vision, and automation technologies, with strong problem solving skills, teamwork, and project leadership abilities.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <GraduationCap size={20} /> Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Technology in Computer Science & Engineering</strong> — Andhra University, 2023–Present <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.55</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Senior Secondary Education (12th Grade)</strong> — Narayana College (APSCHE Board, 2021–2022) <br />
              <span style={{ color: "#aaa" }}>CGPA: 9.32</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Secondary Education (10th Grade)</strong> — St. Joseph's School (ICSE Board, 2012–2020) <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.7</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <Briefcase size={20} /> Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>AI/ML Intern</strong> — NIT Tadepalligudem (05/2026 – Present) <br />
              <span style={{ color: "#ccc" }}>Developing embedded AI solutions and building AI-driven career guidance models using profile and hiring intelligence datasets.</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Core Member & Team Lead</strong> — CodeIAM Club Vizag (12/2023 – Present) <br />
              <span style={{ color: "#ccc" }}>Led a team of 10+ students in collaborative project development. Participated in 5+ collaborative coding events and workshops on Firebase, DSA, and game development.</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Member & Lead</strong> — Google Developer Group On Campus (GDGOC) Vizag (11/2025 – 12/2025) <br />
              <span style={{ color: "#ccc" }}>Helped organize coding sessions and resource-sharing initiatives, improving developer community participation by 30%.</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <Cpu size={20} /> Projects
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--accent)", fontWeight: "bold" }}>•</span> CareerCompass AI: AI/ML Based Career Roadmap and Guidance System</li>
            <li style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--accent)", fontWeight: "bold" }}>•</span> AquaSentinel: AI - Edge Drowning Prevention System</li>
            <li style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--accent)", fontWeight: "bold" }}>•</span> Swachh Netra: IoT Based Municipality Cleaning System</li>
            <li style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--accent)", fontWeight: "bold" }}>•</span> NexoTrack: AI Noise Detection Using Heatmaps</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <Settings size={20} /> Skills
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C",
              "Java",
              "SQL",
              "JavaScript",
              "Flutter",
              "Firebase",
              "Git",
              "GitHub",
              "TensorFlow",
              "REST APIs",
              "Game Development",
              "IoT",
              "Embedded Systems",
              "Computer Vision",
              "Data Structures & Algorithms",
              "OOPs",
              "DBMS",
              "Operating Systems",
              "Teamwork",
              "Problem Solving",
              "Project Leadership",
              "Communication"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent-rgb), 0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "GitHub", link: "https://github.com/nikhileswarb7-dotcom", icon: <Github size={16} /> },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/nikhileswar-behera/", icon: <Linkedin size={16} /> },
            { name: "Email", link: "mailto:nikhileswarb7@gmail.com", icon: <Mail size={16} /> },
            { name: "WhatsApp", link: "https://wa.me/917684023522", icon: <MessageSquare size={16} /> },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {site.icon}
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Nikhileswar Behera Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 20,
            background: "var(--accent)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          <Download size={18} /> Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
