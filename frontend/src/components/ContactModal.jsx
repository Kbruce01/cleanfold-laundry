import React, { useEffect, useState } from 'react';

function ContactModal({ isOpen, onClose }) {
  const CONTACT_EMAIL = 'support@cleanfold.com';
  const CONTACT_PHONE = '647-517-1033';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close contact">✕</button>
        <h2 style={{ marginTop: 0 }}>Contact CleanFold</h2>
        <p>Send us a message and we'll get back to you shortly.</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Open default mail client with prefilled subject and body
          const subject = encodeURIComponent('Contact from CleanFold website');
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
          const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
          window.location.href = mailto;
          onClose();
        }}>
          <div style={{ marginBottom: 8 }}>
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} type="text" name="name" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" name="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={labelStyle}>Message</label>
            <textarea style={{ ...inputStyle, height: 100 }} name="message" placeholder="How can we help?" required value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <p style={{ margin: 0, fontSize: 14, color: '#374151' }}>Or call us directly: <a href={`tel:${CONTACT_PHONE}`} style={{ color: '#6366f1', fontWeight: 600 }}>{CONTACT_PHONE}</a></p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button type="button" onClick={onClose} style={secondaryBtnStyle}>Cancel</button>
            <button type="submit" style={primaryBtnStyle}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Simple inline styles for the modal
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3000
};
const modalStyle = {
  background: 'white',
  borderRadius: 8,
  width: 'min(560px, 96%)',
  padding: 20,
  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
  position: 'relative'
};
const closeBtnStyle = {
  position: 'absolute',
  top: 12,
  right: 12,
  border: 'none',
  background: 'transparent',
  fontSize: 18,
  cursor: 'pointer'
};
const labelStyle = {
  display: 'block',
  fontSize: 13,
  marginBottom: 6,
  color: '#111827'
};
const inputStyle = {
  width: '100%',
  padding: '8px 10px',
  borderRadius: 6,
  border: '1px solid #e5e7eb',
  outline: 'none',
  boxSizing: 'border-box'
};
const primaryBtnStyle = {
  backgroundColor: '#6366f1',
  color: 'white',
  padding: '8px 14px',
  borderRadius: 8,
  border: 'none',
  cursor: 'pointer'
};
const secondaryBtnStyle = {
  backgroundColor: 'transparent',
  color: '#374151',
  padding: '8px 14px',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  cursor: 'pointer'
};

export default ContactModal;
