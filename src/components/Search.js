import React, { useState } from 'react';

export const Search = ({setValue, value}) => {

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder='Busca tu pokemon Favorito'
      />
    </form>
  )
};
