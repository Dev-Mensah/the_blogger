import React from 'react';
import "./Card.css";
import data from '../data/blogData.json'

function Card() {
  return (
    <div className='card_wrapper'>
        {data.map(item => {
            return(
                <div className="card" key={item.id}>
            <div className="img_container">
                <img src={item.photo} alt="food" />
            </div>
            <div className="slug">
                <div className="title">
                    <h4>{item.title}</h4>
                    <div className="category_text">
                        <span>{item.category}</span>
                    </div>
                </div>
                <div className="slug_text">
                    <p>{item.description}</p>
                </div>
                <div className="read_more_slug">
                    <span>Read More.</span>
                </div>
            </div>
        </div>
            )
        })}
        

        
        
    </div>
  )
}

export default Card