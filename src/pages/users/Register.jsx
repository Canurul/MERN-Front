import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Alert from '../../Components/Alert';
import { registerUser } from "../../controllers/usersController";
import { UserContext } from "../../contexts/userContexts";

const Register = ()=>{

    //use user context

    const {user, setUser} = useContext(UserContext)

    //Error state
    const [error, setError] = useState(null);

     //Use navigate
     const navigate = useNavigate();

    //Form dara state
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        passwordConfirm:''
    })

    //Handle login
    const handleRegister = async (e) =>{
        e.preventDefault();
        try{
            //Register the user
            await registerUser(formData.email, formData.password, formData.passwordConfirm)
        setUser({email: formData.email, posts: []})
        //Navigate
        navigate('/dashboard')
        }catch(error){
        setError(error.message)
        }
    }

    return(
        <section className='card'>
            <h1 className='title'>Create a new account</h1>
            <form onSubmit={handleRegister}>
             <input
              type='email'
              placeholder='Email adress'
              className='input'
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email:e.target.value})}
              />
             <input
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={(e)=>setFormData({...formData, password:e.target.value})}
              className='input'
             />
               <input
              type='password'
              placeholder='Confirm Password'
              value={formData.passwordConfirm}
              onChange={(e)=>setFormData({...formData, passwordConfirm:e.target.value})}
              className='input'
             />
             <button className='btn'>Register</button>
            </form>
            { error && <Alert msg={error}/> }
        </section>
    )
}

export default Register;