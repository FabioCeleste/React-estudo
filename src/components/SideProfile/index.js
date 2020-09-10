import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import {
  Container,
  Main,
  ProfPic,
  Info,
  Buttons,
  Button,
  Form,
  Input,
  Edit,
  InputEdit,
} from './styles';

function SideProfile() {
  const dispatch = useDispatch();

  const [user, SetUser] = useState('');
  const [followsUser, SetFollowsUser] = useState([]);
  const [wishList, SetWishList] = useState([]);
  const [beatGames, SetBeatGames] = useState([]);
  const [dropGames, SetDropGames] = useState([]);
  const [followingsUser, SetFollowingsUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const userId = useSelector((state) => state.auth.user);
  const refresh = useSelector((state) => state.list.refresh);

  useEffect(() => {
    setNewEmail(userId.email);
    setNewName(userId.name);
    async function getUser() {
      const response = await axios.get(`/show/${userId.id}`);
      SetUser(response.data);
      SetFollowingsUser(response.data.following);
      SetFollowsUser(response.data.follower);
      SetWishList(response.data.wantGame);
      SetBeatGames(response.data.beatGame);
      SetDropGames(response.data.dropGame);
    }
    getUser();
  }, [edit, refresh]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.registerRequest({ newName, newEmail }));
  }

  return (
    <Container>
      <Form action="submit">
        <Input type="text" placeholder="Procure por usuarios" />
        <button type="submit">pesquisar</button>
      </Form>
      <Main>
        <ProfPic />
        {!edit && (
          <>
            <Info>
              <p>User: {user.user_name}</p>
              <p>Email: {user.email}</p>
              <p>Seguindo: {followingsUser.length}</p>
              <p>Seguindores: {followsUser.length}</p>
              <p>Jogos Finalizados: {beatGames.length}</p>
              <p>Jogos Dropados: {dropGames.length}</p>
              <p>Jogos na Lista de Desejos: {wishList.length}</p>
            </Info>
            <Buttons>
              <Button onClick={() => setEdit(!edit)}>Editar</Button>
              <Button onClick={() => history.push(`/user/${user.id}`)}>
                Ver Perfil
              </Button>
              <Button>Sair</Button>
            </Buttons>
          </>
        )}

        {edit && (
          <>
            <Edit>
              <InputEdit
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <InputEdit
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Edit>
            <Button onClick={(e) => handleSubmit(e)}>Salvar</Button>
            <Button onClick={() => setEdit(!edit)}>Cancelar</Button>
          </>
        )}
      </Main>
    </Container>
  );
}

export default SideProfile;
