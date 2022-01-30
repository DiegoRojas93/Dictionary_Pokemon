import { useEffect, useState} from "react";
import getPokeList from "../utils/getPokeList";

export const useGetPoke = () => {

  const [ list, setList ] = useState({ data: [], loading: true})

  useEffect( () => {
    getPokeList()
      .then( data => setList({ data , loading: false }));
  }, [])

  return list
}