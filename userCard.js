
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </Typography>
        <Typography variant="body2">
          {user.email}
        </Typography>
        <Typography variant="body2">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </Typography>
        <Typography variant="body2">
          {user.company.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
