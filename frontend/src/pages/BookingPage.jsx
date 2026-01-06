import { useState, useEffect } from 'react';

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pickupDate: '',
    pickupTime: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // EmailJS Public Key
      window.emailjs.init('iDC5YNSsaxOEWy6vw');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Date is required';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(formData.pickupDate);
      if (selected < today) {
        newErrors.pickupDate = 'Please select a future date';
      }
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Please select a time';
    }

    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // email formating
    const servicesText = selectedServices.map(service => 
      `${service.name} - $${service.price} ${service.unit}`
    ).join('\n');
    
    // estimated total of service
    const estimatedTotal = selectedServices.reduce((sum, service) => 
      sum + service.price, 0
    ).toFixed(2);
    
    // email template parameters
    const templateParams = {
      customer_name: formData.name,
      customer_phone: formData.phone,
      customer_email: formData.email,
      customer_address: formData.address,
      selected_services: servicesText,
      pickup_date: formData.pickupDate,
      pickup_time: formData.pickupTime,
      additional_notes: formData.notes || 'None',
      estimated_total: estimatedTotal,
      booking_date: new Date().toLocaleString()
    };
    
    try {
      // email using emailjs
      if (window.emailjs) {
        await window.emailjs.send(
          'service_ejvyyd3',
          'template_sz4yjc9',
          templateParams
        );
        
        alert('Booking submitted successfully! We will contact you soon.');
        
        // the form reset
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          pickupDate: '',
          pickupTime: '',
          notes: ''
        });
        setSelectedServices([]);
      } else {
        throw new Error('EmailJS not loaded');
      }
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to submit booking. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { 
      id: 'wash-fold', 
      name: 'Wash & Fold', 
      price: 1.50, 
      unit: 'per lb',
      description: 'Your clothes washed, dried, and neatly folded'
    },
    { 
      id: 'dry-clean', 
      name: 'Dry Cleaning', 
      price: 8.99, 
      unit: 'per item',
      description: 'Professional dry cleaning for delicate items'
    },
    { 
      id: 'premium-care', 
      name: 'Premium Care', 
      price: 15.99, 
      unit: 'per item',
      description: 'Delicate handling with hand finishing'
    },
    { 
      id: 'ironing', 
      name: 'Ironing', 
      price: 1.50, 
      unit: 'per item',
      description: 'Crisp and wrinkle-free clothes'
    },
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) => {
      const exists = prev.find(s => s.id === service.id);
      
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
    
    // Clear service error when user selects a service
    if (errors.services) {
      setErrors(prev => ({
        ...prev,
        services: ''
      }));
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Book Your Service
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 18px)',
            color: '#6b7280'
          }}>
            Fill in the details below and we'll take care of the rest
          </p>
        </div>

        {/* Form */}
        <div style={{
          backgroundColor: 'white',
          padding: 'clamp(30px, 6vw, 50px)',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
        }}>
          {/* Personal Information Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #e5e7eb'
            }}>
              Personal Information
            </h2>

            {/* Name */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Full Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Kelvin Bruce"
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 2vw, 14px)',
                  border: errors.name ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = errors.name ? '#ef4444' : '#d1d5db'}
              />
              {errors.name && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '6px'
                }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Phone Number <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (234) 567-8900"
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 2vw, 14px)',
                  border: errors.phone ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = errors.phone ? '#ef4444' : '#d1d5db'}
              />
              {errors.phone && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '6px'
                }}>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Email Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="brucekelvin742@gmail.com"
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 2vw, 14px)',
                  border: errors.email ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : '#d1d5db'}
              />
              {errors.email && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '6px'
                }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Address */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Pickup Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                placeholder="123 Main Street, Apt 4B, Toronto, ON"
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 2vw, 14px)',
                  border: errors.address ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = errors.address ? '#ef4444' : '#d1d5db'}
              />
              {errors.address && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '6px'
                }}>
                  {errors.address}
                </p>
              )}
            </div>
          </div>

          {/* Service Details Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #e5e7eb'
            }}>
              Service Details
            </h2>

            {/* Services (Checkboxes) */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '12px'
              }}>
                Select Services <span style={{ color: '#ef4444' }}>*</span>
              </label>
              
              <div style={{
                display: 'grid',
                gap: '12px'
              }}>
                {serviceOptions.map((service) => {
                  const isSelected = selectedServices.find(s => s.id === service.id);
                  
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service)}
                      style={{
                        border: isSelected ? '2px solid #6366f1' : '1px solid #d1d5db',
                        borderRadius: '12px',
                        padding: 'clamp(14px, 3vw, 18px)',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? '#eff6ff' : 'white',
                        transition: 'all 0.2s',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: isSelected ? '2px solid #6366f1' : '2px solid #d1d5db',
                          borderRadius: '4px',
                          backgroundColor: isSelected ? '#6366f1' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          {isSelected && (
                            <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                          )}
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '6px'
                          }}>
                            <h3 style={{
                              fontSize: 'clamp(15px, 2.5vw, 17px)',
                              fontWeight: '600',
                              color: '#111827'
                            }}>
                              {service.name}
                            </h3>
                            <span style={{
                              fontSize: 'clamp(15px, 2.5vw, 17px)',
                              fontWeight: 'bold',
                              color: '#6366f1',
                              whiteSpace: 'nowrap',
                              marginLeft: '12px'
                            }}>
                              ${service.price} {service.unit}
                            </span>
                          </div>
                          <p style={{
                            fontSize: 'clamp(13px, 2vw, 14px)',
                            color: '#6b7280',
                            margin: 0
                          }}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {errors.services && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '8px'
                }}>
                  {errors.services}
                </p>
              )}
              
              {selectedServices.length > 0 && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  border: '1px solid #86efac'
                }}>
                  <p style={{
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#166534',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    ✓ {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected: {' '}
                    {selectedServices.map(s => s.name).join(', ')}
                  </p>
                </div>
              )}
            </div>

            {/* Date and Time Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {/* Pickup Date */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Pickup Date <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 14px)',
                    border: errors.pickupDate ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = errors.pickupDate ? '#ef4444' : '#d1d5db'}
                />
                {errors.pickupDate && (
                  <p style={{
                    color: '#ef4444',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    marginTop: '6px'
                  }}>
                    {errors.pickupDate}
                  </p>
                )}
              </div>

              {/* Pickup Time */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Pickup Time <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: 'clamp(12px, 2vw, 14px)',
                    border: errors.pickupTime ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    outline: 'none',
                    backgroundColor: 'white',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = errors.pickupTime ? '#ef4444' : '#d1d5db'}
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.pickupTime && (
                  <p style={{
                    color: '#ef4444',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    marginTop: '6px'
                  }}>
                    {errors.pickupTime}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
              placeholder="Any special instructions or preferences..."
              style={{
                width: '100%',
                padding: 'clamp(12px, 2vw, 14px)',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: 'clamp(14px, 2vw, 16px)',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              width: '100%',
              background: isSubmitting 
                ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' 
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: 'clamp(14px, 3vw, 18px)',
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
          </button>

          {/* Info Text */}
          <p style={{
            textAlign: 'center',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            color: '#6b7280',
            marginTop: '20px'
          }}>
            By submitting, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}