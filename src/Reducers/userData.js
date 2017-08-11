const initialState = {
  userInfo: {},
};

export default function userData (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO' : {
      return {
          ...state,
          userInfo : action.userInfo
      };
    }

    case 'SET_USER_REPOS' :
        return {
            ...state,
            repos : action.repos
        };
    case 'SET_USER_NOTES' :
        return {
            ...state,
            notes : action.notes
        };

    default:
      return state;
  }
}
