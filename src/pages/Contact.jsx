import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Handshake, Send, CheckCircle, AlertCircle } from "lucide-react";

const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";

import "../CSS/Contact.css";
import '../index.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus({ text: "Please fill in all fields.", type: "error" });
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus({ text: "Please enter a valid email or phone number.", type: "error" });
      return;
    }

    setStatus({ text: "Sending...", type: "info" });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ text: "Message sent successfully!", type: "success" });
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus({ text: "Failed to send. Try again later.", type: "error" });
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/nikhileswarb7-dotcom" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/nikhileswar-behera/" },
    { img: gmailLogo, title: "Email", link: "mailto:nikhileswarb7@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/917684023522" },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
        className="contact-title"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}
      >
        <Handshake size={36} style={{ color: "var(--accent)" }} /> Let’s Connect & Collaborate
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.15 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.22 }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button 
          type="submit" 
          className="contact-btn" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <Send size={16} /> Send Message
        </motion.button>

        {status && (
          <motion.p 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className={`contact-status ${status.type}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: status.type === "success" ? "#4ade80" : status.type === "error" ? "#f87171" : "#aaf",
              marginTop: 15
            }}
          >
            {status.type === "success" && <CheckCircle size={16} />}
            {status.type === "error" && <AlertCircle size={16} />}
            {status.text}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
