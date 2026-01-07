import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedPricingCard from "../components/AnimatedPricingCard.jsx";
import FeatureCard from "../components/FeatureCard.jsx";

export default function HomePage() {
  const [isPickupHovered, setIsPickupHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(2); 
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videos = [
    "https://video-previews.elements.envatousercontent.com/files/332e8cac-316b-4e67-ae53-6a5b5c3d442c/video_preview_h264.mp4",
    "https://video-previews.elements.envatousercontent.com/files/69b5f4b8-dc10-4feb-bd7a-227bd2643d6f/video_preview_h264.mp4",
    "https://elements.envato.com/caucasian-man-pulls-laundry-from-white-front-load--GFCJBYN",
    "https://elements.envato.com/man-holding-laundry-basket-and-loading-dirty-cloth-WLTQYEH"
  ];

  // Rotate videos when hovered
  useEffect(() => {
    let interval;
    if (isCtaHovered) {
      interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, 3000); // Change every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isCtaHovered]);

  const pricingCardsData = [
    {
      title: "Wash & Fold",
      price: "$ 1.29",
      unit: "/per lb",
      features: ["Same-day available", "Eco-friendly detergent", "Folded & packaged"],
    },
    {
      title: "Dry Cleaning",
      price: "$ 4.99",
      unit: "/per item",
      features: ["Expert pressing", "Stain removal", "Protective bags"],
    },
    {
      title: "Premium Care",
      price: "$ 11.99",
      unit: "/per item",
      features: ["Delicate handling", "Hand finishing", "Premium packaging"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "clamp(400px, 70vh, 600px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 40px)",
            position: "relative",
            zIndex: 1,
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Laundry Done
            <br />
            Right & Fast
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              marginBottom: "40px",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Experience premium laundry and dry cleaning delivered to your door.
            More time for what matters, perfectly clean clothes every time.
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <motion.button
              onMouseEnter={() => setIsPickupHovered(true)}
              onMouseLeave={() => setIsPickupHovered(false)}
              onClick={() => navigate('/booking')}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: isPickupHovered ? "#4f46e5" : "#6366f1",
                color: "white",
                padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: "600",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Schedule Pickup →
            </motion.button>
            <motion.button
              onClick={() => navigate('/services')}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f9fafb",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              style={{
                backgroundColor: "white",
                color: "#374151",
                padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: "600",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              View Pricing
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Choose CleanFold Section */}
      <section
        style={{
          backgroundColor: "white",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Why Choose CleanFold?
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#6b7280",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          Premium service that fits your lifestyle
        </p>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
          className="responsive-grid-4"
        >
          <FeatureCard
            icon="⏰"
            title="24-Hour Service"
            description="We work around your schedule"
          />
          <FeatureCard
            icon="🚚"
            title="Free Pickup & Delivery"
            description="Convenient door-to-door service"
          />
          <FeatureCard
            icon="♻️"
            title="Eco-Friendly"
            description="Sustainable cleaning practices"
          />
          <FeatureCard
            icon="🛡️"
            title="100% Guarantee"
            description="Your satisfaction is our top priority"
          />
        </div>
      </section>

      {/* Simple as 1, 2, 3 Section */}
      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Simple as 1, 2, 3
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#6b7280",
            marginBottom: "clamp(50px, 10vw, 80px)",
          }}
        >
          Get your laundry done in three easy steps
        </p>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
          className="responsive-grid-3"
        >
          <StepCard number="1" title="Schedule" description="Book online in 60 seconds" />
          <StepCard number="2" title="We Collect" description="Free pickup at your door" />
          <StepCard number="3" title="Delivered Fresh" description="Clean clothes back to you" />
        </div>
      </section>

      {/* Pricing Section */}
      <section
        style={{
          backgroundColor: "white",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Transparent Pricing
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#6b7280",
            marginBottom: "clamp(50px, 10vw, 80px)",
          }}
        >
          No hidden fees, just clean clothes
        </p>
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            padding: "50px 20px 0 20px",
          }}
        >
          {pricingCardsData.map((card, index) => (
            <AnimatedPricingCard
              key={index}
              title={card.title}
              price={card.price}
              unit={card.unit}
              features={card.features}
              isActive={activeCard === index}
              onActivate={() => setActiveCard(index)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "#fbfbfbff",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)",
        }}
      >
        <div
          onMouseEnter={() => setIsCtaHovered(true)}
          onMouseLeave={() => setIsCtaHovered(false)}
          style={{
            maxWidth: isCtaHovered ? "1200px" : "900px",
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 80px) clamp(30px, 6vw, 60px)",
            borderRadius: "24px",
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.5s ease",
          }}
        >
          {/* Video background */}
          {isCtaHovered && (
            <video
              key={currentVideoIndex}
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => {
                console.error('Video failed to load:', e);
                console.log('Current video URL:', videos[currentVideoIndex]);
              }}
              onLoadedData={() => console.log('Video loaded successfully')}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
                borderRadius: "24px",
                opacity: 0.7,
              }}
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>
          )}

          {/* Overlay for better text readability */}
          {isCtaHovered && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 0,
                borderRadius: "24px",
              }}
            />
          )}

          {/* CTA Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: isCtaHovered ? "800" : "bold",
                marginBottom: "20px",
                color: "white",
                textShadow: isCtaHovered ? "2px 2px 8px rgba(0,0,0,0.5)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              Ready for Effortless Laundry?
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "white",
                marginBottom: "40px",
                opacity: 0.95,
                fontWeight: isCtaHovered ? "600" : "normal",
                textShadow: isCtaHovered ? "1px 1px 4px rgba(0,0,0,0.5)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              Join thousands of happy customers. First order gets 20% off!
            </p>
            <button
              onClick={() => navigate('/booking')}
              style={{
                backgroundColor: isCtaHovered ? "rgba(255, 255, 255, 0.2)" : "white",
                color: isCtaHovered ? "white" : "#667eea",
                padding: "clamp(12px, 2vw, 16px) clamp(30px, 5vw, 50px)",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: isCtaHovered ? "700" : "600",
                border: isCtaHovered ? "2px solid rgba(255, 255, 255, 0.3)" : "none",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: isCtaHovered 
                  ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" 
                  : "0 4px 15px rgba(0,0,0,0.2)",
                backdropFilter: isCtaHovered ? "blur(10px)" : "none",
                WebkitBackdropFilter: isCtaHovered ? "blur(10px)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              Schedule Your First Pickup
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1e293b",
          padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px) clamp(30px, 5vw, 40px)",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            CleanFold
          </h3>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#94a3b8",
              marginBottom: "40px",
            }}
          >
            Premium laundry delivery service
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(20px, 5vw, 40px)",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              Terms
            </a>
            <a
              href="#"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              Contact
            </a>
          </div>
          <p
            style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#64748b",
            }}
          >
            © 2025 CleanFold. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// StepCard
function StepCard({ number, title, description }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "clamp(30px, 5vw, 50px) clamp(25px, 4vw, 40px)",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontSize: "clamp(48px, 10vw, 72px)",
          fontWeight: "300",
          color: "#e5e7eb",
          marginBottom: "20px",
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontSize: "clamp(20px, 3vw, 24px)",
          fontWeight: "bold",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "#6b7280",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}