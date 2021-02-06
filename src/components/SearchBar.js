import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// Detta är endast sökfunktionens komponent

function SearchBar() {
    return (
        
        <nav style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
          paddingTop: 20,
          paddingBottom: 20, 
        }}>
          <input style={{
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '0.5rem 1rem',
            border: '1px solid white',
            fontSize: '1.25rem',
            lineHeight: 1.5,
            borderRadius: '0.3rem',
            width: '50%',
            color: 'white',

          }}
            type="text"
            className="form-control"
            placeholder="Search"
          ></input>
          <button style={{
            border: '1px solid white',
          }}
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
