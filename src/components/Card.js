import React from 'react';

import Pokemon from '@images/pokemon.png';


export const Card = () => {

  return (
    <section className='card'>
      <article className="card__pokemon">

        <div className="card__pokemon-info">
          <div className="container">
            <figure>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt="pokemon" />
            </figure>
            <h1>Name</h1>
            <h2>Type</h2>
            <div className="container__info">
              <div className="item">
                <h3>Attact</h3>
                <p>100</p>
              </div>
              <hr />
              <div className="item">
                <h3>Defensive</h3>
                <p>50</p>
              </div>
              <hr />
              <div className='item'>
                <h3>Speed</h3>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
};
