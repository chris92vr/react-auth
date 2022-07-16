import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/fontawesome-free-solid'
import { useNavigate } from 'react-router-dom';
import React, { SyntheticEvent, useState } from 'react';



const ProfileButton = () => {
    const navigate = useNavigate();
    

    const submit = async (e: SyntheticEvent) => {

        e.preventDefault();

        const response = await fetch('http://localhost:8000/profile', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',

        });

        if (response.status === 200) {

            const data = await response.json();
            console.log(data);
            navigate('/profile');
        }
    }

    return (
        <form onSubmit={submit}  >
        <button  className="profile-button border-0 bg-white  " type="submit">
        Profile   <FontAwesomeIcon icon={faUser as IconProp} />
        </button>
        </form>
    );
    
    }
    export default ProfileButton;
// }
