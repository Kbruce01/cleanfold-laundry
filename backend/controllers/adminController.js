import supabase from '../config/supabase.js'

export async function getAllBookings(req, res) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, customers(*), booking_items(*)')
    .order('created_at', { ascending: false })

  if (error) return res.status(400).json({ error: error.message })

  res.status(200).json({ data })
}

export async function getSingleBooking(req, res) {
  const { id } = req.params

  const { data, error } = await supabase
    .from('bookings')
    .select('*, customers(*), booking_items(*)')
    .eq('id', id)
    .single()

  if (error) return res.status(400).json({ error: error.message })

  res.status(200).json({ data })
}
