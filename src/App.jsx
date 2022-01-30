import React from 'react';
import GridCard from '@components/GridCard';
import { useGetPoke } from './hooks/useGetPoke';


const App = () => {

  const { data, loading } = useGetPoke();

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
