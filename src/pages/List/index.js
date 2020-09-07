import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import GameLetter from '../../components/GameLetter';
import Pagination from '../../components/Pagination';
import GameList from '../../components/GameList';

import axios from '../../services/axios';
import { Container, Profile, Main, Title } from './styles';

function List() {
  const [games, setGames] = useState([]);
  const [totalGames, setTotalGames] = useState('');

  const letter = useSelector((state) => state.list.letter);
  const currentPage = useSelector((state) => state.list.page);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/games/index/${letter}?page=${currentPage}&limit=15`
      );
      setGames(response.data.info);
      setTotalGames(response.data.total);
    }

    getData();
  }, [letter, currentPage]);

  return (
    <Container>
      <Profile>
        <h1>Aqui fica o perfil</h1>
      </Profile>
      <Main>
        <Title>MyGameList</Title>
        <GameLetter />

        <GameList games={games} />

        <Pagination maxOfPage={totalGames} />
      </Main>
    </Container>
  );
}

export default List;
