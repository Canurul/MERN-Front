/***************** LOGIN USER ******************/

const loginUser = async (email, password) => {
    if (!email || !password) {
      throw new Error('All fields are required');
    }
  
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error);
    }
  
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
    return data;
  }

  /***************** REGISTER USER ******************/
  const registerUser = async (email, password, passwordConfirm)=>{
    if(!email || !password || !passwordConfirm){
      throw new Error('all fields are required')
    }
    if(password !== passwordConfirm){
      throw new Error('Passwords do not match')
    }

    const res = await fetch('/api/users',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })

  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error);
  }

  localStorage.setItem('token', data.token)
  localStorage.setItem('email', data.email)
  return data;
}
  
  export { loginUser, registerUser }