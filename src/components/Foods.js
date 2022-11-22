import React from 'react'
import './Foods.css'
import { useState } from 'react';

const Foods = ({food, setshowRecipie, setId}) => {
 
  function display(e, key) {
    setshowRecipie(true)
    setId(key)
  }
 

  return (
    <div className="food-container">
        {food.map((recipie, key)=> {
            return (
            <div className="food" onClick={e => display(e, recipie.id)} key={recipie.id}>
                <img src={recipie.image} alt="" />
                  
            </div>
            )
        })}
    </div>
  )
}

export default Foods