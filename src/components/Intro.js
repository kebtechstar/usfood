import React from 'react';
import './Intro.css';
import magnify from '../images/glass.png';
import order from '../images/order.png';
import much from '../images/teamwork.png';


const Intro = () => {
  return (
    <div className="intro-container">
        <div className="intro-detail">
            <div className="intro-head">
                <img src={magnify} alt="" className='intro-image'/>
                <h3 className="intro-title">My food</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae.
        </div>
        <div className="intro-detail">
            <div className="intro-head">
            <img src={order} alt="" className='intro-image'/>
                <h3 className="intro-title">Find food</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae.
        </div>
        <div className="intro-detail">
            <div className="intro-head">
            <img src={much} alt="" className='intro-image'/>
                <h3 className="intro-title">Much to choose from</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae.
        </div>
    </div>
  )
}

export default Intro