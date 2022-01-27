import getPoke from "./utils/getPoke";

getPoke()
  .then(resp => console.info(resp))
  .catch(err => console.warn(err))


// import React from 'react';
// import ReactDom from 'react-dom';

// import '@styles/style.css';
// import App from './App';

// const $root = document.querySelector('#root')

// ReactDom.render(<App />, $root)