import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBar() {
    return (
        
        <nav id="searchBar">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          ></input>
          <button
            type="button"
            className="btn bg-transparent btn-secondary btn-lg"
            id="searchBtn"
          >
            Go!
          </button>
        </nav>
        
    )
}

export default SearchBar
