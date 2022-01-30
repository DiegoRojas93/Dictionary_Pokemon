// const API = process.env.API;

const getPoke = async (url) => {

  const res = await fetch(`${url}`);

  if (!res.ok) throw { api: 'resPoke' ,status: res.status, statusText: res.statusText }

  const {
    id,
    name,
    types,
    stats,
    sprites: {
      other: {
        home: {
          front_default: img
        }
      }
    }
  } = await res.json();


  const { type:{name: type } } = types[0];
  const { base_stat: attackLevel } = stats[1];
  const { base_stat: defenseLevel } = stats[2];
  const { base_stat: speedLevel } = stats[5];

  return {
    id,
    name,
    type,
    img,
    attack: attackLevel,
    defensive: defenseLevel,
    speed: speedLevel
  };
}

export default getPoke;


// import getPoke from "./utils/getPoke";

// getPoke()
//   .then(resp => console.info(resp))
//   .catch(err => console.warn(err))