import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const services = [
    {
      id: 'wash-fold',
      name: 'Wash & Fold',
      price: '$1.29 / lb',
      description: 'Quick, affordable wash and fold service — washed, dried and neatly folded.',
      icon: '🧺'
    },
    {
      id: 'dry-clean',
      name: 'Dry Cleaning',
      price: '$4.99 / item',
      description: 'Professional dry cleaning for suits, dresses and delicate garments.',
      icon: '👔'
    },
    {
      id: 'premium-care',
      name: 'Premium Care',
      price: '$11.99 / item',
      description: 'Hand-finished, delicate handling and premium packaging.',
      icon: '✨'
    },
    {
      id: 'ironing',
      name: 'Ironing & Pressing',
      price: '$1.99 / item',
      description: 'Crisp, wrinkle-free results for shirts, trousers and linens.',
      icon: '👕'
    }
  ];

  const features = [
    { id: 'pickup', icon: '🚚', text: 'Free pickup & delivery at your doorstep' },
    { id: 'eco', icon: '♻️', text: 'Eco-friendly detergents and responsible cleaning' },
    { id: 'fast', icon: '⚡', text: 'Fast turnaround and professional finishing' }
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#f8f8f8ff ',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          padding: '60px 20px 40px',
          background: '#ffffffff',
          color: 'black'
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 15 }}>
          Our Services
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto', opacity: 0.95 }}>
          Select the service that fits your needs. book online and get free pickup & delivery.
        </p>
      </div>

      {/* Services */}
      <div style={{ padding: '60px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 30,
            maxWidth: 1400,
            margin: '0 auto'
          }}
        >
          {services.map(service => {
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  padding: '40px 30px',
                  minHeight: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'none',
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(102,126,234,0.3)'
                    : '0 4px 15px rgba(0,0,0,0.1)',
                  border: isHovered ? '2px solid #667eea' : '2px solid transparent',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: 20 }}>
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginBottom: 15,
                    color: isHovered ? '#667eea' : '#1f2937'
                  }}
                >
                  {service.name}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6b7280',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#667eea',
                    textAlign: 'center',
                    margin: '20px 0',
                    padding: 15,
                    background: 'rgba(102,126,234,0.1)',
                    borderRadius: 12
                  }}
                >
                  {service.price}
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  {['learn', 'book'].map(type => {
                    const key = `${service.id}-${type}`;
                    const btnHover = hoveredBtn === key;

                    return (
                      <button
                        key={type}
                        onMouseEnter={() => setHoveredBtn(key)}
                        onMouseLeave={() => setHoveredBtn(null)}
                        onClick={() => navigate('/booking')}
                        style={{
                          flex: 1,
                          padding: '14px 20px',
                          borderRadius: 12,
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: type === 'learn' ? '2px solid #e5e7eb' : 'none',
                          background:
                            type === 'learn'
                              ? btnHover
                                ? '#f9fafb'
                                : 'transparent'
                              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color:
                            type === 'learn'
                              ? btnHover
                                ? '#667eea'
                                : '#475569'
                              : '#fff',
                          transform: btnHover ? 'scale(1.06)' : 'scale(1)',
                          boxShadow:
                            type === 'book' && btnHover
                              ? '0 6px 25px rgba(102,126,234,0.6)'
                              : 'none',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {type === 'learn' ? 'Learn More' : 'Book Now'}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          background: '#fff',
          padding: '80px 40px',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 50,
            color: '#1f2937'
          }}
        >
          Why choose CleanFold?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
            maxWidth: 1200,
            margin: '0 auto'
          }}
        >
          {features.map(feature => {
            const isHovered = hoveredFeature === feature.id;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  padding: 30,
                  transform: isHovered ? 'translateY(-8px)' : 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: 15 }}>
                  {feature.icon}
                </div>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.6 }}>
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1e293b",
          padding:
            "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px) clamp(30px, 5vw, 40px)",
          textAlign: "center",
          color: "white"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: "bold",
              marginBottom: "12px"
            }}
          >
            CleanFold
          </h3>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#94a3b8",
              marginBottom: "40px"
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
              flexWrap: "wrap"
            }}
          >
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Terms
            </a>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Contact
            </a>
          </div>
          <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#64748b" }}>
            © 2025 CleanFold. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
