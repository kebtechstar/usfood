import React from 'react';
import './Search.css'

const Search = ({setSearch, setTyped, typed }) => {

  async function searchRecipie() {
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d139b0a1dacb4360a10201e54cc28279&query=${typed}&number=9`)
            .then(response => response.json())
            .then((data)=> {
              setSearch(data.results)
             console.log(data);
            })
  }


  return (
    <div className="search-container">
        <input type="search" className="text-input" placeholder='search food/recipie' onChange={e=> setTyped(e.target.value)}/>
        <i className="fa fa-search" onClick={() => searchRecipie()}></i>
    </div>
  )
}

export default Search