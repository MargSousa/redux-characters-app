import React from 'react';
import { Card } from 'react-bootstrap';


const UserDetails = () => {

  const handleDelete = (event) => {
    console.log("delete user", event.target.id)
  }

  return (
    <div className="UserDetails">
      <Card border="dark" style={{ width: '18rem' }} className="user-card">
        <Card.Header>
          <Card.Img variant="left" className="user-avatar" src="" />
        </Card.Header>
        <Card.Body>
          <Card.Title># ...</Card.Title>
          <Card.Text>
            Add new user
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetails;
 