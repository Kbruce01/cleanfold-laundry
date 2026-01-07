import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
        backgroundColor: "#eef2ff",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        padding: 'clamp(20px, 4vw, 30px)',
        textAlign: 'center',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        backgroundColor: 'white',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          fontSize: 'clamp(36px, 6vw, 48px)',
          marginBottom: '20px',
        }}
      >
        {icon}
      </motion.div>

      <motion.h3
        whileHover={{ color: "#4f46e5" }}
        transition={{ type: "tween", duration: 0.3 }}
        style={{
          fontSize: 'clamp(18px, 2.5vw, 20px)',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#111827',
        }}
      >
        {title}
      </motion.h3>

      <motion.p
        whileHover={{ opacity: 0.95 }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: 'clamp(14px, 2vw, 16px)',
          color: '#6b7280',
          lineHeight: '1.6',
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
