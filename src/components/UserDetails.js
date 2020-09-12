import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const UserDetails = (props) => {

  const handleDelete = (event) => {
    props.deleteUser(event.target.id);
  }

  return (
    <div className="UserDetails">
      <Card border="dark" style={{ width: '18rem' }} className="user-card">
        <Card.Header>
          <Card.Img variant="left" className="user-avatar" src={`${window.location.origin}/images/avatars/${props.user.avatar}.png`} />
        </Card.Header>
        <Card.Body>
          <Card.Title># {props.user.nickname}</Card.Title>
          <Card.Text>
            {props.user.text}
          </Card.Text>
          <Card.Text className="user-card-info">
            <div>Joined in {props.user.date}</div>
            <div>
              <button id={props.user.id} className="user-delete-icon" onClick={handleDelete} />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch({ type: 'DELETE_USER', id: id}),
  }
};

export default connect(null, mapDispatchToProps)(UserDetails);
 