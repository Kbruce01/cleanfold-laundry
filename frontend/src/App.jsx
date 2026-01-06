import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px 40px',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 'bold',
            color: '#6366f1',
            textDecoration: 'none'
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              CleanFold
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}
          className="desktop-nav"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            
            <Link to="/booking" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(99, 102, 241, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{
                  backgroundColor: '#6366f1',
                  color: 'white',
                  padding: '10px 24px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    pointerEvents: 'none',
                  }}
                />
                <span style={{ position: 'relative', zIndex: 1 }}>Schedule Pickup</span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#374151'
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid #e5e7eb'
            }}
            className="mobile-menu"
          >
            <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </MobileNavLink>
            <Link to="/booking" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: '#6366f1',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                Schedule Pickup
              </motion.div>
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Animated Nav Link Component for Desktop
function NavLink({ to, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: 'none',
        color: '#374151',
        fontSize: '16px',
        fontWeight: '500',
        position: 'relative',
        padding: '8px 16px',
        display: 'inline-block',
      }}
    >
      <motion.div
        animate={{
          backgroundColor: isHovered || isActive ? '#f3f4f6' : 'transparent',
          borderRadius: isHovered || isActive ? '12px' : '0px',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <motion.span
        animate={{
          color: isHovered || isActive ? '#6366f1' : '#374151',
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: isActive ? 1 : 0 }}
        animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: '4px',
          left: '16px',
          right: '16px',
          height: '2px',
          backgroundColor: '#6366f1',
          transformOrigin: 'left',
        }}
      />
    </Link>
  );
}

// Animated Nav Link Component for Mobile
function MobileNavLink({ to, onClick, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick} style={{ textDecoration: 'none' }}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          color: isActive ? '#6366f1' : '#374151',
          fontSize: '16px',
          fontWeight: isActive ? '600' : '500',
          padding: '8px 16px',
          borderRadius: '8px',
          backgroundColor: isActive ? '#f3f4f6' : 'transparent',
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

export default App;