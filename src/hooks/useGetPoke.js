import { useEffect, useState} from "react";
import getPoke from '@utils/getPoke';

export const useGetPoke = (name) => {

  // const [ pokemon, setPokemon ] = useState({data: {}, loading: true})

  // useEffect( () => {
  //   getPoke(name)
  //     .then( data => setPokemon({ data, loading: false}) )

  // }, [name])

  const [ pokemon, setPokemon ] = useState({data: [], loading: true})

  useEffect( () => {
    getPoke(name)
      .then( data => setPokemon( state => { return { dataList: [...state.data, data], loading: false }} ))
    }, [name]);

  const { dataList, loading } = pokemon;

  return { dataList, loading };
}