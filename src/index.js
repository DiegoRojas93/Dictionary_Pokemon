import React from 'react';
import ReactDom from 'react-dom';

import '@styles/style.css';
import pokemon from '@images/pokemon.png';

const $root = document.querySelector('#root')

ReactDom.render(<>
  <h1 className='hello'>Hello React!</h1>
  <img src={pokemon} alt="pokemon"/>
</>, $root)