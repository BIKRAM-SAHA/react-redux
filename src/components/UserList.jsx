import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/users/userActions";
import User from "./User";

function UserList({ fetchUsers, users, loading }) {
  useEffect(() => {
    //fetch users
    fetchUsers();
  }, []);
  return loading ? (
    <div>"LOADING..."</div>
  ) : (
    <div>
      {users.map((user) => {
        return (
          <User
            id={user.id}
            name={user.name}
            username={user.username}
            key={user.id}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.user.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
