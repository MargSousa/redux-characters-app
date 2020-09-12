import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';

const UserList = (props) => {

  const { userList } = props;

  return (
    <div className="UserList">
      <div>
        { userList ? 
          <div className="user-list-content">
            { userList.map((user, index) =>
              <UserDetails key={user.id} user={user} />
            )}
          </div>
        : 
          <div className="user-list-content">No users registered...</div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userList: state.user.users,
  }
}
 
export default connect(mapStateToProps)(UserList);