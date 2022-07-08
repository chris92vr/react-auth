import React, { SyntheticEvent, useState } from "react";

import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const submit = async (e: SyntheticEvent) => {
      e.preventDefault();

      const response = await fetch('http://localhost:8000/users/login', {
       
      method: 'POST',
      
          headers: {'Content-Type': 'application/json'},
          
          credentials: 'include',
          body: JSON.stringify({
              email,
              password
          })
      });
      
      if (response.status === 200) {
          const data = await newFunction(response);
          console.log(data);
          navigate('/');
      }
  }
    return (
      <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
}



export default Login;

async function newFunction(response: Response) {
    return await response.json();
}