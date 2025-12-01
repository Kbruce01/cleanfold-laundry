import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Services from './pages/services';
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
              Services
            </NavLink>
            <NavLink to="/pricing" style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Pricing
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
            <NavLink to="/pricing" onClick={() => setMenuOpen(false)} style={{
              textDecoration: 'none',
              color: '#374151',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Pricing
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

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
  <Route path="/pricing" element={<HomePage initialHash="pricing" />} />
  <Route path="/services" element={<Services />} />
  <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;