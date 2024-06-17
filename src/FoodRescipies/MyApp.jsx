import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import './myapp.css'

export default function MyApp() {

    const APP_ID = '901b94e5';
    const APP_KEY = 'b86bfdea27756e4c1dd9150c97e08e2c';

    const [recipes , setRecipes] = useState([]);
    const [search ,setSearch]  = useState('');
    const [query ,setQuery] = useState('pizza')

    const getRecipies = async ()=>{
        
        const responce  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await responce.json(responce)
        setRecipes(data.hits)
        console.log(data)
    };
    
    useEffect(()=>{
      getRecipies();
    },[ getRecipies]);

    const updateSearch = (e)=>{
      setSearch(e.target.value)
    }

    const getSearch = (e) =>{
      e.preventDefault();
      setQuery(search)
      setSearch('')
    }



  return (
    <>
    <div className="myapp">
      <form action="" className='search-form' onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} id='inputSearch' />
        <button className='search-button' type='submit' >Search</button>
      </form>




      <div className="recipes">

        {
          recipes.map((itemRecipe)=>{
            return(
              
            <Recipe
            key={itemRecipe.recipe.label}
            title = {itemRecipe.recipe.label}
            calories = {itemRecipe.recipe.calories}
            image = {itemRecipe.recipe.image}
            ingredients = {itemRecipe.recipe.ingredients}
            diet = {itemRecipe.recipe.dietLabels[0]}
            src = {itemRecipe.recipe.source}
            /> 
            
          )
            
          })
        }
      </div>
    </div>
    </>
  )
}
