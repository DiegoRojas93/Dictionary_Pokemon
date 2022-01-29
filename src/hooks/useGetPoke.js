import { useEffect, useState} from "react";
import getPoke from '@utils/getPoke';

export const useGetPoke = () => {
  const [ pokemon, setPokemon ] = useState({data: {}, loading: true})

  useEffect( () => {
    getPoke()
      .then( data => setPokemon({ data, loading: false}) )
  }, [])

  return { pokemon, setPokemon };
}