
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
      <p>{user.company.name}</p>
    </div>
  );
};

export default UserDetailsPage;
