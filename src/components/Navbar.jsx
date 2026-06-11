import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Blog", id: "blog" },
  { label: "Resume", id: "resume" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // Check if links overflow nav width (to show hamburger)
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Intersection Observer to track scroll positions and update active nav tab
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when section intersects the center area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      
      // Quietly push the hash to URL
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* --- Navbar --- */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          fontFamily: "inherit",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "var(--accent)",
            }}
          >
            NB
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: 14 }}>Nikhileswar Behera</h1>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              AI/ML • IoT • Developer
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleLinkClick(e, l.id)}
                style={{
                  position: "relative",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "white" }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        {showButton && (
          <div className="mobile-btn">
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.8rem",
                cursor: "pointer",
                zIndex: 10000,
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {links.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleLinkClick(e, l.id)}
                  style={{
                    color: isActive ? "var(--accent)" : "#fff",
                    textDecoration: "none",
                    padding: "1rem 0",
                    width: "100%",
                    textAlign: "center",
                    fontSize: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
