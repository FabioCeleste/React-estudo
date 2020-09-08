import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/list/actions';

import { Letter, Letters, Form, Input } from './styles';

function GameLetter() {
  const dispatch = useDispatch();

  const [alfa] = useState([
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
  const [search, setSearch] = useState('');

  function handleClickLetter(letter) {
    dispatch(actions.changeLetter({ letter }));
  }

  function handleSearch(e, letter) {
    e.preventDefault();
    dispatch(actions.changeLetter({ letter }));
  }

  return (
    <div className="alfabeto">
      <Letters>
        {alfa.map((alfaLetter) => {
          return (
            <Letter
              key={alfaLetter}
              onClick={() => handleClickLetter(alfaLetter)}
            >
              {alfaLetter}
            </Letter>
          );
        })}
      </Letters>

      <Form action="submit">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSearch(e, search)}>
          pesquisar
        </button>
      </Form>
    </div>
  );
}

export default GameLetter;
