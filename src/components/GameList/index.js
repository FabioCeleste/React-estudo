import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import * as actions from '../../store/modules/list/actions';

import {
  GameDiv,
  GameItem,
  GameName,
  GamesMenuList,
  GameMenuItem,
} from './styles';

function GameList(props) {
  const { games } = props;
  const dispatch = useDispatch();

  async function handleBeat(game) {
    let response = await axios.get(`/beat/${game.id}`);
    response = response.data;
    if (response.errors) {
      response.errors.map((error) => {
        toast.error(error);
      });
      return;
    }
    toast.success('Jogo Adcionado a finalizados');
    dispatch(actions.refreshProfile());
  }

  async function handleDrop(game) {
    let response = await axios.get(`/drop/${game.id}`);
    response = response.data;
    if (response.errors) {
      response.errors.map((error) => {
        toast.error(error);
      });
      return;
    }
    toast.success('Jogo Adcionado a dropados');
    dispatch(actions.refreshProfile());
  }
  async function handleWish(game) {
    let response = await axios.get(`/want/${game.id}`);
    response = response.data;
    if (response.errors) {
      response.errors.map((error) => {
        toast.error(error);
      });
      return;
    }
    toast.success('Jogo Adcionado a desejos');
    dispatch(actions.refreshProfile());
  }
  async function handleFav(game) {
    let response = await axios.get(`/fav/${game.id}`);
    response = response.data;

    if (response.errors) {
      response.errors.map((error) => {
        toast.error(error);
      });
      return;
    }
    toast.success('Jogo Adcionado a favoritos');
  }

  return (
    <GameDiv>
      <ul>
        {games.map((game) => (
          <GameItem key={String(game.id)}>
            <GameName>{game.game_name}</GameName>
            <div className="menu">
              <GamesMenuList>
                <GameMenuItem onClick={() => handleBeat(game)}>
                  Finalizado
                </GameMenuItem>
                <GameMenuItem onClick={() => handleDrop(game)}>
                  Dropado
                </GameMenuItem>
                <GameMenuItem onClick={() => handleWish(game)}>
                  Desejos
                </GameMenuItem>
                <GameMenuItem onClick={() => handleFav(game)}>
                  Favorito
                </GameMenuItem>
              </GamesMenuList>
            </div>
          </GameItem>
        ))}
      </ul>
    </GameDiv>
  );
}

export default GameList;
