import { useState, memo } from 'react';

import stl from './searchBar.module.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={stl.searchbar}>
      <form className={stl.form} onSubmit={handleSubmit}>
        <button type="submit" className={stl.button}></button>
        <input
          className={stl.input}
          value={query}
          name="search"
          type="text"
          autoFocus
          required
          placeholder="Search a movie you want"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

export default memo(SearchBar);
