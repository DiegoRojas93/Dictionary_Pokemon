import React from 'react';
import { Card } from '@components/Card';

const GridCard = ({ list, value }) => {

  const cardFilter = list.filter( pokemon => {

    if (value === '') return pokemon
    if (pokemon.name.toLowerCase().includes(value.toLowerCase()) ) return pokemon.name

  }).map( pokemon => <Card pokemon={pokemon} /> )

  return (
    <div className="grid">
      { cardFilter}
    </div>
  )
};

export default GridCard;
