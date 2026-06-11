import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FolderGit2 } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      mass: 0.8,
    }
  }
};

const PROJECTS = [
  {
    title: 'CareerCompass AI',
    desc: 'Built an AI-powered Career Guidance Platform by analyzing 40+ real industry profiles and designing a PostgreSQL database. Developed a recommendation engine that identifies skill gaps and generates personalized roadmaps using leading tech company transition data.',
    ss: '/careercompass.png',
    tech: ['Python', 'PostgreSQL', 'Recommendation Engine', 'Data Ingestion'],
    live: '#',
    code: 'https://github.com/nikhileswarb7-dotcom/career-compass-ai'
  },
  {
    title: 'AquaSentinel: AI Edge Drowning Prevention',
    desc: 'Engineered an AI-based drowning detection system achieving 94% detection accuracy using computer vision and motion analysis. Integrated real-time emergency alerts and intelligent underwater activity anomaly detection.',
    ss: '/aquasentinel.png',
    tech: ['Computer Vision', 'OpenCV', 'Motion Analysis', 'Edge AI', 'Python'],
    live: '#',
    code: 'https://github.com/nikhileswarb7-dotcom/aqua-sentinel'
  },
  {
    title: 'NexoTrack: AI Noise Detection Heatmaps',
    desc: 'Developed a Flutter and Firebase-based AI application with 92% sound classification accuracy for real-time noise monitoring. Implemented GPS-enabled heatmap visualization to analyze environmental noise pollution.',
    ss: '/nexotrack.png',
    tech: ['Flutter', 'Firebase', 'GPS Heatmaps', 'Signal Processing'],
    live: '#',
    code: 'https://github.com/nikhileswarb7-dotcom/nexotrack'
  },
  {
    title: 'Swachh Netra: IoT Municipal Waste System',
    desc: 'Designed an IoT-enabled waste monitoring system improving garbage collection efficiency by 50% using sensor-based automation. Implemented automated dispatch and alert mechanisms, reducing manual municipal workload by 60%.',
    ss: '/swachhnetra.png',
    tech: ['IoT', 'Embedded Systems', 'Sensors', 'Automation', 'Cloud Sync'],
    live: '#',
    code: 'https://github.com/nikhileswarb7-dotcom/swachh-netra'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 60, damping: 14 }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold mb-2"
          style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 10 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <FolderGit2 size={32} /> Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(var(--accent-rgb), 0.2)' }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(var(--accent-rgb), 0.15)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.08)',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(var(--accent-rgb), 0.05)',
                        border: '1px solid rgba(var(--accent-rgb), 0.15)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: 'var(--accent)',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(var(--accent-rgb), 0.15)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
