import React, { useEffect, useState } from 'react';







const UserProfile = () => {

    const [user, setUser] = useState('');
   

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const user = await fetch('http://localhost:8000/profile');
          // convert the data to json
          const json = await user.json();
      
          // set state with the result
          setUser(json.email);

        }
      
        // call the function
        const result = fetchData()
          // make sure to catch any error
          .catch(console.error);;
          console.log(result);
      }, [])

    return (
        <div>
            <h1>User Profile</h1>
            
            <p>user: {user}</p>	
            

        </div>
    )

      
}






  




export default UserProfile;
