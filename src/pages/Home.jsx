import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Mail } from 'lucide-react'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Static Assets URLs
const photo = '/photo.jpg'
const githubLogo = '/github.png'
const linkedinLogo = '/linkedin.png'
const gmailLogo = '/gmail.png'
const whatsappLogo = '/whatsapp.png'
const instagramLogo = '/insta.png'
const facebookLogo = '/facebook.png'

const infoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
};

const infoItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 }
  }
};

export default function Home() {
  const professions = [
    'AI/ML Developer',
    'IoT Developer',
    'Computer Science Student',
    'Embedded Systems Enthusiast',
    'Computer Vision Practitioner',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/nikhileswarb7-dotcom' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/nikhileswar-behera/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:nikhileswarb7@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/917684023522' },
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Nikhileswar Behera"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          variants={infoContainerVariants}
          initial="hidden"
          animate="visible"
          className="home-info"
        >
          <motion.h1 variants={infoItemVariants} className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Nikhileswar Behera
            </motion.span>
          </motion.h1>

          {/* Typing Animated Text */}
          <motion.p variants={infoItemVariants} className="typing-effect">
            Computer Science Student | AI/ML & IoT Developer
          </motion.p>

          {/* Profession Tags */}
          <motion.div variants={infoItemVariants} className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={infoItemVariants} className="info-cards">
            {[
              { icon: <MapPin size={18} style={{ color: 'var(--accent)', marginBottom: '6px' }} />, label: 'Location', value: 'Visakhapatnam, AP, India' },
              { icon: <Briefcase size={18} style={{ color: 'var(--accent)', marginBottom: '6px' }} />, label: 'Expertise', value: 'AI/ML, IoT, Embedded Systems' },
              { icon: <Mail size={18} style={{ color: 'var(--accent)', marginBottom: '6px' }} />, label: 'Contact', value: 'nikhileswarb7@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {info.icon}
                  <strong style={{ fontSize: '15px' }}>{info.label}</strong>
                </div>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div 
        className="quick-links"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.8 }}
      >
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
