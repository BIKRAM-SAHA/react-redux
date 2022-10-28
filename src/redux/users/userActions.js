import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

//async action-creator -> returns a func which doesnt need to be pure and recieves `dispatch` as arg
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((err) => {
        // dispatch(fetchUserFailure(err));
      });
  };
};
