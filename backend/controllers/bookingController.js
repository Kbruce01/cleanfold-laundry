import supabase from '../config/supabase.js'

export async function bookings(req, res) {
  const {
    name,
    email,
    phone,
    pickup_address,
    delivery_address,
    pickup_date,
    delivery_date,
    notes,
    items
  } = req.body

  const { data: customer, error: customerError } = await supabase
    .from('customers')
    .insert({ name, email, phone })
    .select()
    .single()

  if(customerError) return res.status(400).json({ error: customerError.message })

  const { data: booking, error: bookingError } = await supabase
    .from('bookings')
    .insert({
      customer_id: customer.id,
      pickup_address,
      delivery_address,
      pickup_date,
      delivery_date,
      notes,
      items: items ? items.length : 0
    })
  .select()
  .single()

  if (bookingError) return res.status(400).json({ error: bookingError.message })

  // create booking items
  if (items && Array.isArray(items) && items.length) {
    const { error: itemsError } = await supabase
      .from('booking_items')
      .insert(items.map(item => ({
        booking_id: booking.id,
        ...item
        
      })))

      console.log(itemsError)

    if (itemsError) return res.status(400).json({ error: itemsError.message })
  }

  res.status(201).json({ message: 'Booking created successfully', booking })
}


