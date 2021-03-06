import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import GameLetter from '../../components/GameLetter';
import Pagination from '../../components/Pagination';
import GameList from '../../components/GameList';
import SideProfile from '../../components/SideProfile';

import axios from '../../services/axios';
import { Container, Main, Title } from './styles';

function List() {
  const [games, setGames] = useState([]);

  const [totalGames, setTotalGames] = useState();

  const letter = useSelector((state) => state.list.letter);
  const currentPage = useSelector((state) => state.list.page);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/games/index/${letter}?page=${currentPage}&limit=15`
      );
      setTotalGames(response.data.total);
      setGames(response.data.info);
    }

    getData();
  }, [currentPage, letter]);

  return (
    <Container>
      <SideProfile />
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
