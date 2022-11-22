import React from 'react';
import pasta from '../images/pasta.png'
import burger from '../images/burger.png'
import "./Header.css";
import Search from './Search';

const Header = ({setSearch, setTyped, typed }) => {
  return (
    <div className="header">

        <div className="details">
                  <div className="title">usfood</div>
        <div className="tagline">
            eat today<br/><span className='tag-two'>live another day</span>
        </div>

        <img src={pasta} alt="" className="pastaImg" />  
        <img src={burger} alt="" className="burgerImg" />  
        </div>

        <Search setSearch = {setSearch} setTyped = {setTyped} typed = {typed}/>

    </div>
  )
}

export default Header