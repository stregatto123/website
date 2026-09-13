/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Fondali caldi (carta / avorio)
        paper: "#FBF7F0",
        "paper-2": "#F4EDE1",
        surface: "#FFFFFF",
        line: "#E5DDCE",

        // Testo
        ink: "#17201C",
        "ink-soft": "#53605A",

        // Brand — verde bottiglia
        brand: {
          50: "#EEF5F2",
          100: "#DCEAE4",
          200: "#B6D2C7",
          300: "#7FB2A0",
          500: "#1E6B58",
          700: "#134438",
          900: "#0C2B24",
        },

        // Accento — terracotta (usato per le CTA)
        accent: {
          DEFAULT: "#B04A22",
          bright: "#D9663A",
          soft: "#F3E0D5",
        },

        // Ottone — dettagli decorativi su fondo scuro
        brass: {
          DEFAULT: "#C89A3C",
          soft: "#E6CE95",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
      maxWidth: {
        shell: "1180px",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23,32,28,0.04), 0 8px 24px -12px rgba(23,32,28,0.18)",
        lifted: "0 2px 4px rgba(23,32,28,0.05), 0 24px 48px -20px rgba(23,32,28,0.32)",
        ring: "0 0 0 1px rgba(23,32,28,0.06)",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "translateY(12px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        /* Variante per i dialoghi centrati con translate(-50%,-50%): il
           keyframe deve riportare anche la centratura, altrimenti la
           transform dell'animazione sovrascrive le utility di posizione. */
        "modal-in": {
          from: {
            opacity: "0",
            transform: "translate(-50%, calc(-50% + 12px)) scale(0.97)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.5s ease both",
        "scale-in": "scale-in 0.24s cubic-bezier(0.22,1,0.36,1) both",
        "modal-in": "modal-in 0.24s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
