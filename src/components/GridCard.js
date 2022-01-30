import React from 'react';
import { Card } from '@components/Card';


const GridCard = ({ list }) => {

  return (
    <div className="grid">
      {
        list.map( name => (
          <div className='app__container' key={name}>
            <Card name={name} />
          </div>
        ))
      }
    </div>

  )
};

export default GridCard;
