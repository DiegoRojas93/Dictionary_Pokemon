import React, { useState, useEffect } from 'react';
import { Card } from '@components/Card';
import getPoke from '@utils/getPoke';


const App = () => {
  const [ pokemon, setPokemon ] = useState({data: {}, loading: true})
  let numRandom;

  useEffect( () => {
    getPoke()
      .then( data => setPokemon({ data, loading: false}) )
  }, [])

  const handleClick = () => {
    numRandom = Math.round((Math.random() * 149) + 1);
    getPoke(numRandom)
      .then( data => setPokemon({ data, loading: false}) )
  }

  return (

    <div className='app'>
      { pokemon.loading
          ? (
              <h1 className='app__container' >Cargando</h1>
            )
          : (
            <>
              <div className='app__container'>
                <Card pokemon={pokemon.data}/>
              </div>
              <div className='app__container'>
                <button onClick={handleClick} className={pokemon.data.type}>Reset</button>
              </div>
            </>
          )
      }
    </div>

  )
};

export default App;
