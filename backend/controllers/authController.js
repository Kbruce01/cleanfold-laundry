import supabase from '../config/supabase.js'

//sign up a user
export async function signUp(req, res) {
  const { name, email, password, phone } = req.body

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if(error) return res.status(400).json({ error: error.message })

  //if signup is true
  const auth_user_id = data.user.id 

  // insert new user into customer table using the auth id 
  const { error: customerError } = await supabase
  .from('customers')
  .insert({
    auth_user_id,
    name,
    email,
    phone 
  })

  if(customerError) return res.status(400).json({ error: customerError.message })

  res.status(200).json({ message: 'Account created sucessfully'})
  
}


//login 
export async function login(req, res) {
  const { email, password } = req.body
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email, 
    password
  })

  if(error) return res.status(400).json({ error: error.message })

  //return sesssion token so the frontend can store for login
  res.status(200).json({
    message: 'Login Sucessfully',
    token: data.session.access_token,
    user: data.user
  })
}
