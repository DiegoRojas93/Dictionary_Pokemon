const API = process.env.APILIST;

const getPokeList = async() => {

  try {

    const res = await fetch(`${API}`);

    if (!res.ok) throw { api: 'resPokeList' ,status: res.status, statusText: res.statusText }

    const { results } = await res.json();

    const list = [];

    for (const i of results) list.push(i.name);

    return list;


  } catch (error) {

    let message = error.statusText || `Ocurrio un error`;
    return `Error ${error.status}: ${message} en ${error.api}`
  }
}


export default getPokeList;