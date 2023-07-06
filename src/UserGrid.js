import React, { useState } from 'react';
import './App.css';

function UserGrid() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  return (
    
    <>
      <div className="header">
        <h1>Aliza Ali</h1>
        <button onClick={getUsers}>Get Users</button>
        {isLoading && <div className="loader"></div>}
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt="User Avatar" /> 
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}


export default UserGrid;
