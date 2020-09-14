import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import unknownAvatar from '../images/unknownAvatar.png';

const UserNewCard = () => {
  return (
    <div className="UserDetails">
      <Link to="/new">
        <Card border="dark" style={{ height: '253px' }} className="user-card">
          <Card.Header>
            <Card.Img variant="left" className="user-avatar" src={unknownAvatar} />
          </Card.Header>
          <Card.Body>
            <Card.Title># Create New Character</Card.Title>
            <Card.Text>
              Try it out, click here to create a new character and add to the list !
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default UserNewCard;
 