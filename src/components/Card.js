import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({pokemon}) => {

  return (
    <section className={`card ${pokemon.color}`}>
      <article className="card__pokemon">

        <div className="card__pokemon-info">
          <div className="container">
            <figure>
              <img src={pokemon.img} alt="pokemon" />
            </figure>
            <h1>{pokemon.name}</h1>
            <h2>Type: {pokemon.type}</h2>
            <div className="container__info">
              <div className="item">
                <h3>Attack</h3>
                <p>{pokemon.attack}</p>
              </div>
              <hr />
              <div className="item">
                <h3>Defensive</h3>
                <p>{pokemon.defensive}</p>
              </div>
              <hr />
              <div className='item'>
                <h3>Speed</h3>
                <p>{pokemon.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
};


Card.propType = {
  pokemon: PropTypes.object.isRequired
}