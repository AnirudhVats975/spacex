import React, {useState} from 'react';
import './Search.css';

const Search = () => {
    const [searchClose ,setSearchClose] = useState(false);

    const closeSearchHandler = () =>{
        setSearchClose(!searchClose);
    }

    return (
        <>
        {searchClose ?  "" : 
          <div className="searchWrapper">
            <div className="container">
            <div className="searchInput">
               <span className="searchIcon"><i className="fas fa-search"></i></span>
               <input type="text" placeholder="SEARCH..." />
               <span className="searchCloseBtn" onClick={closeSearchHandler}><i className="fas fa-times"></i></span>
               </div>
            </div>
              </div> 
 }
        </>
    )
}

export default Search
