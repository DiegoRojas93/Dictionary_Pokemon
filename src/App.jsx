import React, { useState } from 'react';
import GridCard from '@components/GridCard';
import { useGetPoke } from './hooks/useGetPoke';
import { Search } from './components/Search';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


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
            ? <div className="skeleton__center">
                <Skeleton circle={true} className="skeleton__center-circle"/>
                <Skeleton count={2}/>
                <Skeleton height={100} />
              </div>
            : <GridCard list={ data } value={value}/>
        }
      </div>
    </>
  )
};

export default App;
