import React from 'react';
import { Card } from '@components/Card';

const GridCard = ({ list }) => {

  return (
    <div className="grid">
      {
        list.map( pokemon => (
          <div className='app__container' key={pokemon.id}>
            <Card pokemon={pokemon} />
          </div>
        ))
      }
    </div>
  )
};

export default GridCard;
