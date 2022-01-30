import getPoke from "./getPoke";

const API = process.env.API;

const getPokeList = async() => {

  try {

    const res = await fetch(`${API}`);

    if (!res.ok) throw { api: 'resPokeList' ,status: res.status, statusText: res.statusText }

    const { results } = await res.json();

    let list =[];

    for (const i of results) list.push( await getPoke(i.url))

    return list

  } catch (error) {

    let message = error.statusText || `Ocurrio un error`;
    return `Error ${error.status}: ${message} en ${error.api}`
  }
}


export default getPokeList;