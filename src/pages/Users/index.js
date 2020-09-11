import React, { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar';

import axios from '../../services/axios';
import history from '../../services/history';

import { Pic, Main, User, UserInfo } from './styles';

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const { search } = props.match.params;
      const response = await axios.get(`/search/${search}`);
      setUsers(response.data);
    }
    getData();
  }, []);

  function handleClick(id) {
    history.push(`/user/${id}`);
  }
  return (
    <>
      <NavBar />
      <Main>
        {users.map((user) => {
          return (
            <User onClick={() => handleClick(user.id)}>
              <Pic />
              <UserInfo>
                <p>{user.user_name}</p>
                <p>{user.email}</p>
              </UserInfo>
            </User>
          );
        })}
      </Main>
    </>
  );
}

export default Users;
