import supabase from '../config/supabase.js'

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] 

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }

  req.user = data.user 
  next() 
}


export const staffMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) return res.status(401).json({ error: 'No token provided' })

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) return res.status(401).json({ error: 'Invalid or expired token' })

  // is user in the backoffice staff table?
  const { data: staff, error: staffError } = await supabase
    .from('back_office_staff')
    .select()
    .eq('auth_user_id', data.user.id)
    .single()

  if (staffError || !staff) return res.status(403).json({ error: 'Access denied' })

  req.user = data.user
  next()
}