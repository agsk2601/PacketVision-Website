import '../css/Login.css';
import {useState} from 'react';
import {loginAuth} from '../services/api.jsx'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(loginAuth.username);
        if (username.trim() != "" && loginAuth.username == username && loginAuth.password == password){
            console.log("login successfull");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            navigate('/topology');
            
        }else {
            
        }
    }    

  return (
    <div className="Login-page">

      <div className='packet-background'>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className='packet'></span>
        ))}
      </div>

      <div className="login-hero">
        
        <h2>Packet <span>Vision</span></h2>
        <p>Visualize networks, simulate traffic, and detect threats in real-time.</p>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleForm}>
          <label htmlFor="form-email" >Username</label>
          <input type="text" id="form-email" onChange={(e)=>{setUsername(e.target.value)}}/>

          <label htmlFor="form-password">Password</label>
          <input type="password" id='form-password' onChange={(e)=>{setPassword(e.target.value)}}/>

          <a href="/">Forgot password?</a>
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
