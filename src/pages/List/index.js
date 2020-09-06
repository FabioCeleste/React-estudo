import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import {
  Container,
  Profile,
  Main,
  Title,
  Letters,
  Letter,
  GamesMenuList,
  GameItem,
  GameDiv,
  GameName,
  GameMenuItem,
  PaginationItem,
  PaginationButton,
} from './styles';

function List() {
  const [games, setGames] = useState([]);
  const [totalGames, setTotalGames] = useState('');
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState([]);
  const [letter, setLetter] = useState('a');
  const [alfa, setAlfa] = useState([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/games/index/${letter}?page=${currentPage}&limit=15`
      );
      setGames(response.data.info);
      setTotalGames(response.data.total);
      const numbersOfPages = Math.ceil(response.data.total / 20);

      const arrayPages = [];
      let pagesToShow = [];

      for (let i = 1; i <= numbersOfPages; i++) {
        arrayPages.push(i);
      }
      for (let i = 1; i <= 10; i++) {
        pagesToShow.push(currentPage + i);
      }
      if (pagesToShow.indexOf(totalPages.length) !== -1) {
        pagesToShow = [];
        for (let i = 1; i <= 10; i++) {
          pagesToShow.push(totalPages.length - i);
          pagesToShow.sort((a, b) => a - b);
          setMaxPages(pagesToShow);
        }
      }
      if (currentPage !== totalPages.length) {
        setMaxPages(pagesToShow);
      } else {
        pagesToShow = [];
        for (let i = 1; i <= 10; i++) {
          pagesToShow.push(totalPages.length - i);
          pagesToShow.sort((a, b) => a - b);
          setMaxPages(pagesToShow);
        }
      }

      setTotalPages(arrayPages);
    }

    getData();
  }, [currentPage, letter]);

  return (
    <Container>
      <Profile>
        <h1>Aqui fica o perfil</h1>
      </Profile>
      <Main>
        <Title>MyGameList</Title>

        <div className="alfabeto">
          <Letters>
            {alfa.map((alfaLetter) => {
              return (
                <Letter
                  key={alfaLetter}
                  onClick={() => {
                    setLetter(alfaLetter);
                    setCurrentPage(1);
                  }}
                >
                  {alfaLetter}
                </Letter>
              );
            })}
          </Letters>
        </div>

        <GameDiv>
          <ul>
            {games.map((game) => (
              <GameItem key={String(game.id)}>
                <GameName>{game.game_name}</GameName>
                <div className="menu">
                  <GamesMenuList>
                    <GameMenuItem>Finalizado</GameMenuItem>
                    <GameMenuItem>Dropado</GameMenuItem>
                    <GameMenuItem>Desejos</GameMenuItem>
                    <GameMenuItem>Favorito</GameMenuItem>
                  </GamesMenuList>
                </div>
              </GameItem>
            ))}
          </ul>
        </GameDiv>

        <PaginationButton>
          {currentPage !== 1 && (
            <PaginationItem
              onClick={() => {
                setCurrentPage(1);
              }}
              isSelect
            >
              1
            </PaginationItem>
          )}

          <PaginationItem
            onClick={() => {
              setCurrentPage(currentPage);
            }}
            isSelect
          >
            {currentPage}
          </PaginationItem>

          {maxPages.map((i) => {
            return (
              <PaginationItem
                onClick={() => {
                  setCurrentPage(i);
                }}
                key={i}
                className={i}
              >
                {i}
              </PaginationItem>
            );
          })}

          <PaginationItem
            onClick={() => {
              setCurrentPage(totalPages.length);
            }}
          >
            {totalPages.length}
          </PaginationItem>
        </PaginationButton>
      </Main>
    </Container>
  );
}

export default List;
