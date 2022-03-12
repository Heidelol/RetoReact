import React from 'react'


export function Card(props) {
    
    return(
        <div className='container'>
            <img className='img'  src={props.img} alt="" />
            <h1 className='title'>{props.producto}</h1>
            <span className='price'>{props.precio}</span>
            <button  className='tag'>{props.tag}</button>      
        </div>
    )
}

export default Card