import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'wash-fold',
      name: 'Wash & Fold',
      price: '$1.50 / lb',
      description: 'Quick, affordable wash and fold service — washed, dried and neatly folded.'
    },
    {
      id: 'dry-clean',
      name: 'Dry Cleaning',
      price: '$8.99 / item',
      description: 'Professional dry cleaning for suits, dresses and delicate garments.'
    },
    {
      id: 'premium-care',
      name: 'Premium Care',
      price: '$15.99 / item',
      description: 'Hand-finished, delicate handling and premium packaging.'
    },
    {
      id: 'ironing',
      name: 'Ironing & Pressing',
      price: '$1.50 / item',
      description: 'Crisp, wrinkle-free results for shirts, trousers and linens.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(40px, 8vw, 80px)', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: '#0f172a' }}>Our Services</h1>
          <p style={{ color: '#475569', marginTop: '8px' }}>Select the service that fits your needs — book online and get free pickup & delivery.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {services.map(s => (
            <div key={s.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(99,102,241,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>{s.name}</h3>
                  <p style={{ margin: '8px 0', color: '#64748b' }}>{s.description}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', color: '#6366f1', fontSize: '16px' }}>{s.price}</div>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button onClick={() => navigate('/booking')} style={{ background: 'transparent', border: '1px solid #e6eefc', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', color: '#475569' }}>Learn more</button>
                <button onClick={() => navigate('/booking')} style={{ background: '#6366f1', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: '48px', background: 'linear-gradient(90deg, #eef2ff, #f8fafc)', padding: '24px', borderRadius: '12px' }}>
          <h4 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>Why choose CleanFold?</h4>
          <ul style={{ marginTop: '12px', color: '#475569', lineHeight: 1.8 }}>
            <li>Free pickup & delivery at your doorstep</li>
            <li>Eco-friendly detergents and responsible cleaning</li>
            <li>Fast turnaround and professional finishing</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
      