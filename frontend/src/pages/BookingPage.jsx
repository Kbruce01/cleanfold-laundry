import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function BookingPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Booking data:', data);
    
    // Simulate API call
    setTimeout(() => {
      alert('Booking submitted successfully! (This will connect to backend later)');
      setIsSubmitting(false);
    }, 1000);
  };

  const serviceOptions = [
    { value: 'wash-fold', label: 'Wash & Fold - $1.50/lb' },
    { value: 'dry-clean', label: 'Dry Cleaning - $8.99/item' },
    { value: 'premium-care', label: 'Premium Care - $15.99/item' },
    { value: 'ironing', label: 'Ironing - $1.50/item' },
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
  ];

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
        <form onSubmit={handleSubmit(onSubmit)} style={{
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
                {...register('name', { required: 'Name is required' })}
                type="text"
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
                  {errors.name.message}
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
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9+\s()-]+$/,
                    message: 'Invalid phone number'
                  }
                })}
                type="tel"
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
                  {errors.phone.message}
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
                {...register('address', { required: 'Address is required' })}
                rows="3"
                placeholder="123 Main Street, Apt 4B, Accra"
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
                  {errors.address.message}
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

            {/* Service Type */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Service Type <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select
                {...register('serviceType', { required: 'Please select a service' })}
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 2vw, 14px)',
                  border: errors.serviceType ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  outline: 'none',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = errors.serviceType ? '#ef4444' : '#d1d5db'}
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p style={{
                  color: '#ef4444',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  marginTop: '6px'
                }}>
                  {errors.serviceType.message}
                </p>
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
                  {...register('pickupDate', { 
                    required: 'Date is required',
                    validate: (value) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const selected = new Date(value);
                      return selected >= today || 'Please select a future date';
                    }
                  })}
                  type="date"
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
                    {errors.pickupDate.message}
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
                  {...register('pickupTime', { required: 'Please select a time' })}
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
                    {errors.pickupTime.message}
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
              {...register('notes')}
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
            type="submit"
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
        </form>
      </div>
    </div>
  );
}