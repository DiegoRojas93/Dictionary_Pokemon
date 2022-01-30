import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGetPoke } from '@hooks/useGetPoke';
import getPoke from '@utils/getPoke';

export const Card = ({name}) => {

  const { dataList, loading } = useGetPoke(name)

  console.log(dataList);
  return (

    <>
      {
        loading
          ? <p>cargando</p>
          : (
            <section className={`card ${dataList[0].type}`}>
              <article className="card__pokemon">

                <div className="card__pokemon-info">
                  <div className="container">
                    <figure>
                      <img src={dataList[0].img} alt="pokemon" />
                    </figure>
                    <h1>{dataList[0].name}</h1>
                    <h2>Type: {dataList[0].type}</h2>
                    <div className="container__info">
                      <div className="item">
                        <h3>Attack</h3>
                        <p>{dataList[0].attack}</p>
                      </div>
                      <hr />
                      <div className="item">
                        <h3>Defensive</h3>
                        <p>{dataList[0].defensive}</p>
                      </div>
                      <hr />
                      <div className='item'>
                        <h3>Speed</h3>
                        <p>{dataList[0].speed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          )
      }
    </>
  )
};


Card.propType = {
  name: PropTypes.string.isRequired
}