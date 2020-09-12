import React from 'react';
import { Card } from 'react-bootstrap';
import unknown from '../images/Unknown2.png';

const UserDetails = () => {

  const handleCreate = (event) => {
    console.log("delete user", event.target.id)
  }

  return (
    <div className="UserDetails">
      <Card border="dark" style={{ width: '18rem', height: '253px' }} className="user-card">
        <Card.Header>
          <Card.Img variant="left" className="user-avatar" src={unknown} />
        </Card.Header>
        <Card.Body>
          <Card.Title># Add New User</Card.Title>
          <Card.Text>
            Try it out, click here to create and add a new user !
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetails;
 