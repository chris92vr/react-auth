import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import { useNavigate } from "react-router-dom";
import React, { SyntheticEvent, useState } from "react";




const LogoutButton = () => {
    const navigate = useNavigate();
  
  

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
  
        const response = await fetch('http://localhost:8000/logout', {
          
         
        method: 'POST',
        
            headers: {'Content-Type': 'application/json'},
            
            credentials: 'include',
          
        });
        
        if (response.status === 200) {
            
              localStorage.setItem('loggedIn', 'false');
            navigate('/');
        }
    }
  
    return (
        <form onSubmit={submit}>
        <button  className="logout-button" type="submit">
        <FontAwesomeIcon icon={faSignOutAlt as IconProp} />
        </button>
        </form>
    );
    }

    export default LogoutButton;
// }
