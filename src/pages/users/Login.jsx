import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Alert from '../../Components/Alert';
import { loginUser } from "../../controllers/usersController";
import { UserContext } from "../../contexts/userContexts";


const Login = ()=>{

    //Use user context
    const { setUser } = useContext(UserContext) 

    //Use navigate
    const navigate = useNavigate();

    //Error state
    const [error, setError] = useState(null);

    //Form dara state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Handle login
    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            //login user
            await loginUser(email, password)
            //update the user state
            setUser({email, posts: []})
            //Navigate
            navigate('/dashboard')
        }catch(error){
            setError(error.message)
        }
        
    }

    return(
        <section className='card'>
            <h1 className='title'>Login to your account</h1>
            <form onSubmit={handleLogin}>
             <input
              type='email'
              placeholder='Email adress'
              className='input'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              autoFocus/>
             <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='input'
             />
             <button className='btn'>Login</button>
            </form>
            { error && <Alert msg={error}/> }
        </section>
    )
}

export default Login;