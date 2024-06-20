import {  useNavigate } from 'react-router-dom';
import './index.css'
import { useState } from 'react';
import axios from 'axios';
function Register (){

    const [user, setUser] = useState({firstName:'', lastName:'', email:'', password:''})

    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate("/auth/login");
    }

    const handleRegister = async ()=>{
        try {
            console.log("Registering")
            const response = await axios.post('http://localhost:3001/auth/register', user);
            const data = response.data;
            console.log("data->", data)
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.error("Error registering:", error);
        }
    }

    return(
        <>
            <section className="loginPage">
                <div className="loginDiv">
                    <h1>Register</h1>
                    <p>Please enter your login and password</p><br></br>
                    <div className='nameInput'>
                        <input type='text' value={user.fName} placeholder='First Name' onChange={(e)=>setUser({...user, firstName:e.target.value}) }/>
                        <input className='lastName' value={user.lName} type='text' placeholder='Last Name' onChange={(e)=>setUser({...user, lastName:e.target.value}) } />
                    </div>
                    <input type='text' value={user.email} placeholder='Email' onChange={(e)=>setUser({...user, email:e.target.value}) } />
                    <input type='password' placeholder='Password' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                    
                    <div className='loginButtons' style={{marginTop:"1rem"}}>
                        <button className='loginButton' onClick={handleLogin}>Login</button>
                        <button style={{borderColor:"#27ae60"}} className='RegisterButton' onClick={handleRegister}>Register</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;