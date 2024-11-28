
import '../App.css';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './SignUp.css';


export default function SignUp() {
  const button = true;

    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {  
      e.preventDefault();  
      console.log({ username, email, password });  
  };  
   
  return (<>  
        <div className="signup-container">  
            <h1>Sign Up</h1>  
            <form onSubmit={handleSubmit}>  
                <div className="form-group">  
                    <label htmlFor="username">Username</label>  
                    <input  
                        type="text"  
                        id="username"  
                        value={username}  
                        onChange={(e) => setUsername(e.target.value)}  
                        required  
                    />  
                </div>  
                <div className="form-group">  
                    <label htmlFor="email">Email</label>  
                    <input  
                        type="email"  
                        id="email"  
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                        required  
                    />  
                </div>  
                <div className="form-group">  
                    <label htmlFor="password">Password</label>  
                    <input  
                        type="password"  
                        id="password"  
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}  
                        required  
                    />  
                </div>  
                <button type="submit">Sign Up</button>    {button && <Button buttonStyle=''>Track</Button>}
            </form>  
        </div>  
    
  <Footer />
  </>
  );
}

