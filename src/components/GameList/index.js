import React from 'react';

import {
  GameDiv,
  GameItem,
  GameName,
  GamesMenuList,
  GameMenuItem,
} from './styles';

function GameList(props) {
  const { games } = props;
  return (
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
  );
}

export default GameList;
