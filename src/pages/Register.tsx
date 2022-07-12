import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/signup', {
   
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
             
        body: JSON.stringify({
                
                email,
                password,
                
            })
          
        
        });
        
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            navigate('/login');
        }
        
        

        
        
    }
    

    

    
        
  return (
    <form onSubmit={submit}>
   
    <h1 className="h3 mb-3 fw-normal">Please register</h1>
    
     
  
    <div className="form-floating">
      <input type="email" className="form-control"  placeholder="name@example.com" required
            onChange={(e) => setEmail(e.target.value)}      />
     
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" placeholder="Password" required
            onChange={(e) => setPassword(e.target.value)}      />
      
    </div>
    

    <div className="checkbox mb-3">
     
      
      
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    
  </form>
  );
}



export default Register;