const initialState = {
  users: [
    {
      id: '1',
      nickname: 'Yoshi Manga',
      avatar: '/images/avatars/Batman.png',
      description: `I have a butler named Alfred and I like to eat mangos.`,
      date: '04-07-2020'
    },
    {
      id: '2',
      nickname: 'Gabba Bucho',
      avatar: '/images/avatars/Zombie.png',
      description: 'Need some brains, where are the brains ?',
      date: '14-08-2020'
    },
    {
      id: '3',
      nickname: 'Mexican Fighter',
      avatar: '/images/avatars/Fighter.png',
      description: `I'm ready for a fight, don't mess with me.`,
      date: '13-09-2010'
    },
    {
      id: '4',
      nickname: 'Heisenberg',
      avatar: '/images/avatars/Heisenberg.png',
      description: `I am the danger. Say my name.`,
      date: '14-09-2010'
    },
  ]
};

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      let newData = state.users;
      newData.push(action.user);
      console.log("new", newData);
      return {
        ...state,
        users: newData
      }
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
