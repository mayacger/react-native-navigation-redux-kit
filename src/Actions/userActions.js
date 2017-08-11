export function setUserInfo(userInfo) {
  console.log("now: " + userInfo);
    return {
        type : 'SET_USER_INFO',
        userInfo
    };
};


export function userInfoFetchRequested(username) {
  console.log(username,"username");
    return {
        type : 'USER_FETCH_REQUESTED',
        payload: {username}
    };
};
