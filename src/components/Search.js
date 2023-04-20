import React from 'react';

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="container-fluid mt-5">
        <div className="d-flex" role="search">
          <input
            onChange={inputHandler}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={search}
            className="btn btn-outline-primary"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
