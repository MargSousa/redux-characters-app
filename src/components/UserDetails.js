import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const UserDetails = (props) => {

  const handleDelete = (event) => {
    props.deleteUser(event.target.id);
  }

  return (
    <div className="UserDetails">
      <Card border="dark" className="user-card">
        <Card.Header>
          <Card.Img variant="left" className="user-avatar" src={`${window.location.origin}${props.user.avatar}`} />
        </Card.Header>
        <Card.Body>
          <Card.Title># {props.user.nickname}</Card.Title>
          <Card.Text style={{ height: '50px' }}>
            {props.user.description}
          </Card.Text>
          <Card.Text className="user-card-info">
            <div>Joined in {props.user.date}</div>
            <div>
              <button id={props.user.id} className="delete-user-icon" onClick={handleDelete} />
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
 