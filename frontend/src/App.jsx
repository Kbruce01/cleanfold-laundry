import { BrowserRouter, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Services from './pages/services';
import BookingPage from './pages/BookingPage';
import ContactModal from './components/ContactModal';

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    setContactOpen(location.pathname === '/contact');
  }, [location.pathname]);

  function closeModal() {
    // If we have a background location, navigate back there; otherwise go to home
    if (location.state && location.state.background) {
      navigate(-1);
      return;
    }
    navigate('/', { replace: true });
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: 'white',
        padding: '20px 40px',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 'bold',
            color: '#6366f1',
            textDecoration: 'none'
          }}>
            CleanFold
          </NavLink>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}
          className="desktop-nav"
          >
            <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Home
            </NavLink>
            <NavLink to="/services" style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Pricing/Services
            </NavLink>
            <NavLink to="/contact" state={{ background: location }} style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Contact
            </NavLink>
            <NavLink to="/booking" style={{
              backgroundColor: '#6366f1',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Schedule Pickup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            display: 'none',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid #e5e7eb'
          }}
          className="mobile-menu"
          >
            <NavLink to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Services
            </NavLink>
            <NavLink to="/contact" state={{ background: location }} onClick={() => setMenuOpen(false)} className="pill-btn full-width" style={{ textDecoration: 'none' }}>
              Contact
            </NavLink>
            <NavLink to="/booking" onClick={() => setMenuOpen(false)} style={{
              backgroundColor: '#6366f1',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Schedule Pickup
            </NavLink>
          </div>
        )}
      </nav>

      {/* Routes (render background location when present so modal overlays on current page) */}
      <Routes location={background || location}>
        <Route path="/" element={<HomePage initialHash={undefined} />} />
        <Route path="/pricing" element={<HomePage initialHash="pricing" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Direct access to /contact should show HomePage as the background for now */}
        <Route path="/contact" element={<HomePage initialHash={undefined} />} />
      </Routes>
      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={closeModal} />

     
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;