import React, { useState, useEffect } from 'react';
import GridCard from '@components/GridCard';
import getPokeList from '@utils/getPokeList';


const App = () => {

  const [ list, setList ] = useState({ data: [], loading: true})

  useEffect( () => {
    getPokeList()
      .then( data => setList({ data, loading: false }) );
  }, [])

  const { data, loading } = list;

  return (
    <div className='app'>
      { loading
          ? <h1 className="app__container">Cargando...</h1>
          : <GridCard list={ data } className="app__container"/>
      }
    </div>
  )
};

export default App;
