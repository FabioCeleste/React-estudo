import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/list/actions';

import { Letter, Letters } from './styles';

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

  function handleClickLetter(letter) {
    dispatch(actions.changeLetter({ letter }));
  }

  return (
    <div className="alfabeto">
      <Letters>
        {alfa.map((alfaLetter) => {
          return (
            <Letter
              key={alfaLetter}
              onClick={(e) => handleClickLetter(alfaLetter)}
            >
              {alfaLetter}
            </Letter>
          );
        })}
      </Letters>
    </div>
  );
}

export default GameLetter;
