import React from 'react';
import './Recipie.css';

const Recipie = ({setshowRecipie, foods, id}) => {

    console.log(foods);

  return (
    <div className="recipie-container">
        
        
          {foods.map((recipie) => {
  
            
                return recipie.id === id ?(
            <div className="recipie-cont-left" key={recipie.id}>
            <div className="image-section">
                <img src={recipie.image} alt="" className='recipie-image'/>
                <p>{recipie.title}</p>
            </div> 

            <div className="ingredient-section" dangerouslySetInnerHTML={{__html: recipie.summary}}>
                
            </div> 
            </div>                   
                ) : (
                    ""
                )
            

            })}


        {foods.map((recipie) => {
              
         return recipie.id === id ? (
             <div className="recipie-cont-right" key={recipie.id}>
      
              <div className="instruction-section" dangerouslySetInnerHTML={{__html: recipie.instructions}}>
                
              </div> 
              <i className="fa-solid fa-circle-xmark" onClick={()=> setshowRecipie(false)}></i>
              </div> 
        
                            
          ) : (
            ""
          )

})}


    </div>
  )
}

export default Recipie