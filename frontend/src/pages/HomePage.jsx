import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage({ initialHash }) {
  const location = useLocation();

  useEffect(() => {
    // prefer explicit hash in the URL; otherwise fall back to initialHash prop
    const hashFromLocation = location && location.hash ? location.hash.replace('#', '') : null;
    const targetId = hashFromLocation || initialHash || null;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, initialHash]);
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'clamp(400px, 70vh, 600px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}></div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          position: 'relative',
          zIndex: 1,
          color: 'white'
        }}>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Laundry Done<br />Right & Fast
          </h1>
          
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            marginBottom: '40px',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}>
            Experience premium laundry and dry cleaning delivered to your door. More time for what matters, perfectly clean clothes every time.
          </p>

          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <NavLink to="/booking" style={{
              backgroundColor: '#6366f1',
              color: 'white',
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '25px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer'
            }}>
              Schedule Pickup
            </NavLink>

            <NavLink to="/#pricing" style={{
              backgroundColor: 'white',
              color: '#374151',
              padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: '600',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}>
              View Pricing
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose CleanFold Section */}
      <section style={{
        backgroundColor: 'white',
        padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#111827'
        }}>
          Why Choose CleanFold?
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#6b7280',
          marginBottom: 'clamp(40px, 8vw, 60px)'
        }}>
          Premium service that fits your lifestyle
        </p>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
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
      <section style={{
        backgroundColor: '#f9fafb',
        padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#111827'
        }}>
          Simple as 1, 2, 3
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#6b7280',
          marginBottom: 'clamp(50px, 10vw, 80px)'
        }}>
          Get your laundry done in three easy steps
        </p>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
        className="responsive-grid-3"
        >
          <StepCard 
            number="1"
            title="Schedule"
            description="Book online in 60 seconds"
          />
          <StepCard 
            number="2"
            title="We Collect"
            description="Free pickup at your door"
          />
          <StepCard 
            number="3"
            title="Delivered Fresh"
            description="Clean clothes back to you"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        backgroundColor: 'white',
        padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#111827'
        }}>
          Transparent Pricing
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#6b7280',
          marginBottom: 'clamp(50px, 10vw, 80px)'
        }}>
          No hidden fees, just clean clothes
        </p>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
        className="responsive-pricing-grid"
        >
          <PricingCard 
            title="Wash & Fold"
            price="$ 1.50"
            unit="/per lb"
            features={[
              'Same-day available',
              'Eco-friendly detergent',
              'Folded & packaged'
            ]}
            isPopular={false}
          />
          
          <PricingCard 
            title="Wash & Fold"
            price="$ 8.99"
            unit="/per item"
            features={[
              'Expert pressing',
              'Stain removal',
              'Protective bags'
            ]}
            isPopular={true}
          />
          
          <PricingCard 
            title="Premium Care"
            price="$ 15.99"
            unit="/per item"
            features={[
              'Delicate handling',
              'Hand finishing',
              'Premium packaging'
            ]}
            isPopular={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: 'white',
        padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: 'clamp(40px, 8vw, 80px) clamp(30px, 6vw, 60px)',
          borderRadius: '24px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white'
          }}>
            Ready for Effortless Laundry?
          </h2>
          
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'white',
            marginBottom: '40px',
            opacity: 0.95
          }}>
            Join thousands of happy customers. First order gets 20% off!
          </p>

          <NavLink to="/booking" style={{
            backgroundColor: 'white',
            color: '#667eea',
            padding: 'clamp(12px, 2vw, 16px) clamp(30px, 5vw, 50px)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontWeight: '600',
            border: 'none',
            borderRadius: '30px',
            textDecoration: 'none',
            display: 'inline-block',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            Schedule Your First Pickup
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        padding: 'clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px) clamp(30px, 5vw, 40px)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>
            CleanFold
          </h3>
          
          <p style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: '#94a3b8',
            marginBottom: '40px'
          }}>
            Premium laundry delivery service
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(20px, 5vw, 40px)',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2vw, 16px)'
            }}>
              Privacy
            </a>
            <a href="#" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2vw, 16px)'
            }}>
              Terms
            </a>
            <a href="#" style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 2vw, 16px)'
            }}>
              Contact
            </a>
          </div>

          <p style={{
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            color: '#64748b'
          }}>
            © 2025 CleanFold. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div style={{
      padding: 'clamp(20px, 4vw, 30px)',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: 'clamp(36px, 6vw, 48px)',
        marginBottom: '20px'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 'clamp(18px, 2.5vw, 20px)',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#111827'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 'clamp(14px, 2vw, 16px)',
        color: '#6b7280',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: 'clamp(30px, 5vw, 50px) clamp(25px, 4vw, 40px)',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      textAlign: 'left'
    }}>
      <div style={{
        fontSize: 'clamp(48px, 10vw, 72px)',
        fontWeight: '300',
        color: '#e5e7eb',
        marginBottom: '20px'
      }}>
        {number}
      </div>
      <h3 style={{
        fontSize: 'clamp(20px, 3vw, 24px)',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#111827'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 'clamp(14px, 2vw, 16px)',
        color: '#6b7280',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
}

function PricingCard({ title, price, unit, features, isPopular }) {
  return (
    <div style={{
      backgroundColor: isPopular ? 'transparent' : 'white',
      background: isPopular ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
      padding: 'clamp(30px, 5vw, 50px) clamp(25px, 4vw, 40px)',
      borderRadius: '20px',
      boxShadow: isPopular ? '0 20px 40px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.05)',
      border: isPopular ? 'none' : '1px solid #e5e7eb',
      position: 'relative',
      textAlign: 'left',
      color: isPopular ? 'white' : '#111827'
    }}>
      {isPopular && (
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#fbbf24',
          color: '#111827',
          padding: '6px 20px',
          borderRadius: '20px',
          fontSize: 'clamp(12px, 1.5vw, 14px)',
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>
          Most Popular
        </div>
      )}
      
      <h3 style={{
        fontSize: 'clamp(20px, 3vw, 24px)',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        {title}
      </h3>
      
      <div style={{ marginBottom: '30px' }}>
        <span style={{
          fontSize: 'clamp(36px, 6vw, 48px)',
          fontWeight: 'bold'
        }}>
          {price}
        </span>
        <span style={{
          fontSize: 'clamp(14px, 2vw, 18px)',
          opacity: 0.8
        }}>
          {unit}
        </span>
      </div>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginBottom: '40px'
      }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            marginBottom: '12px',
            fontSize: 'clamp(14px, 2vw, 16px)',
            opacity: 0.9
          }}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <button style={{
        width: '100%',
        backgroundColor: isPopular ? 'white' : '#667eea',
        color: isPopular ? '#667eea' : 'white',
        padding: 'clamp(12px, 2vw, 16px)',
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: '600',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  );
}