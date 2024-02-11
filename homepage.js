
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSort = event => {
    setSortBy(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = sortBy
    ? filteredUsers.slice().sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'email') {
          return a.email.localeCompare(b.email);
        } else if (sortBy === 'company') {
          return a.company.name.localeCompare(b.company.name);
        }
      })
    : filteredUsers;

  return (
    <Container>
      <UserForm />
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSort}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>
      <Grid container spacing={3}>
        {sortedUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
