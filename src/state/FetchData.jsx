import React from 'react'
import {useState,useEffect} from 'react'

function FetchData() {
    
    const [user,setUser] =useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUser(data))

    },[])
 return (
    <div>
      {user.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid black", margin: "10px" }}
        >
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.website}</p>
        </div>
      ))}
    </div>
  );
}


export default FetchData
