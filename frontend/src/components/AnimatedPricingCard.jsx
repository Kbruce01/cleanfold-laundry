import { motion } from "framer-motion";

export default function AnimatedPricingCard({ title, price, unit, features, isActive, onActivate }) {
  const activeBackground = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

  return (
    <motion.div
      layout
      onMouseEnter={onActivate}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{
        y: -25,
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(102, 126, 234, 0.25)",
        transition: { 
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      style={{
        background: isActive ? activeBackground : "white",
        color: isActive ? "white" : "#111827",
        padding: "clamp(35px, 5vw, 55px) clamp(30px, 4vw, 45px)",
        borderRadius: "24px",
        border: isActive ? "none" : "2px solid #e5e7eb",
        cursor: "pointer",
        textAlign: "left",
        position: "relative",
        minWidth: "320px",
        maxWidth: "420px",
        width: "100%",
        flex: "1 1 350px",
        overflow: "visible",
        marginTop: isActive ? "25px" : "0",
      }}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: isActive ? 0 : 0.05 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          pointerEvents: "none",
          borderRadius: "24px",
        }}
      />

      {/* Floating particles effect */}
      {isActive && (
        <>
          <motion.div
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "20%",
              right: "10%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
          />
          <motion.div
            animate={{
              y: [-30, -50, -30],
              x: [10, -10, 10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{
              position: "absolute",
              top: "60%",
              left: "15%",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
        </>
      )}

      {/* Most Popular Badge */}
      {isActive && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          style={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fbbf24",
            color: "#111827",
            padding: "8px 24px",
            borderRadius: "20px",
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(251, 191, 36, 0.4)",
            zIndex: 10,
          }}
        >
          ⭐ Most Popular
        </motion.div>
      )}

      <motion.h3
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          fontSize: "clamp(22px, 3vw, 26px)",
          fontWeight: "bold",
          marginBottom: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {title}
      </motion.h3>

      <motion.div
        style={{ marginBottom: "35px", position: "relative", zIndex: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span
          style={{
            fontSize: "clamp(40px, 6vw, 52px)",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          {price}
        </motion.span>
        <motion.span
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            opacity: 0.8,
            marginLeft: "4px",
          }}
        >
          {unit}
        </motion.span>
      </motion.div>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: "40px", position: "relative", zIndex: 1 }}>
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
            style={{
              marginBottom: "16px",
              fontSize: "clamp(15px, 2vw, 17px)",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <motion.span
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{
                display: "inline-block",
                fontSize: "18px",
              }}
            >
              ✓
            </motion.span>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: isActive
            ? "0 8px 20px rgba(255, 255, 255, 0.3)"
            : "0 8px 20px rgba(102, 126, 234, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{
          width: "100%",
          backgroundColor: isActive ? "white" : "#667eea",
          color: isActive ? "#667eea" : "white",
          padding: "clamp(14px, 2vw, 18px)",
          fontSize: "clamp(15px, 2vw, 17px)",
          fontWeight: "600",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          position: "relative",
          zIndex: 1,
        }}
      >
        Get Started →
      </motion.button>
    </motion.div>
  );
}