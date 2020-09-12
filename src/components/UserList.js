import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';
import UserNew from '../components/UserNew'

const UserList = (props) => {

  const { userList } = props;

  return (
    <div className="UserList">
      <div>
        { userList.length > 0 ? 
          (<div className="user-list-content">
            { userList.map((user) =>
              <UserDetails key={user.id} user={user} />
            )}
            <UserNew />
          </div>)
        : 
          (<div className="user-list-content">No users registered...</div>)
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