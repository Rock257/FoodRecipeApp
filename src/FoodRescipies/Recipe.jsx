import React from 'react';
import './recipe.css'

export default function Recipe({title ,calories , image ,ingredients ,diet ,src}) {
  return (
    <div className='recipe'>
        <h1>{title}</h1>
        <ol id='ingredients'>
        {ingredients.map((ingredient)=>( 
                    <li>{ingredient.text}</li> 
                ))}
        </ol>
        <p>Calories : {calories}</p>
        <p>Diet Label : {diet}</p>
        <p>Source : {src}</p>
        <img src={image} alt="" className='image' />
    </div>
  )
}
