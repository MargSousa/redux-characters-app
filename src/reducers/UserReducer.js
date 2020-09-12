const initialState = {
  users: [
    {
      id: '1',
      nickname: 'Yoshi Manga',
      avatar: 'Batman',
      text: 'Some quick example text to build, Some quick example text to build',
      date: '12-09-2010'
    },
    {
      id: '2',
      nickname: 'Gabba Bucho',
      avatar: 'Zombie',
      text: 'Some quick example text to build',
      date: '10-09-2010'
    },
    {
      id: '3',
      nickname: 'Mexican Fighter',
      avatar: 'Fighter',
      text: 'Some quick example text to build',
      date: '01-09-2010'
    },
  ]
};

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DELETE_USER':
      let newUsers = state.users.filter(user => user.id !== action.id );
      return {
        ...state,
        users: newUsers
      }
    default:
      return state
  }
}

export default UserReducer;
