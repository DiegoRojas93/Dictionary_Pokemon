import React, { useState } from 'react';
import GridCard from '@components/GridCard';
import { useGetPoke } from './hooks/useGetPoke';
import { Search } from './components/Search';


const App = () => {

  const [value, setValue] = useState('');

  const { data, loading } = useGetPoke();

  return (
    <>
      <header>
        <h1 className="logo">Dictionary Pokemon</h1>
        <Search setValue={setValue} value={value}/>
      </header>
      <div className='app'>
        { loading
            ? <h1 className="app__container">Cargando...</h1>
            : <GridCard list={ data } value={value} className="app__container"/>
        }
      </div>
    </>
  )
};

export default App;
