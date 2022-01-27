import React, { useState, useEffect } from 'react';
import { Card } from '@components/Card';
import getPoke from '@utils/getPoke';


const App = () => {
  const [ pokemon, setPokemon ] = useState({data: {}, loading: true})

  useEffect( () => {
    getPoke()
      .then( data => setPokemon({ data: data, loading: false}) )
  }, [])

  return (
    <div className='app'>
      { pokemon.loading
          ? ( <h1>Cargando</h1> )
          : <Card pokemon={pokemon.data}/>
      }
      <div className='app__container'>
        <button>Reset</button>
      </div>
    </div>
  )
};

export default App;
