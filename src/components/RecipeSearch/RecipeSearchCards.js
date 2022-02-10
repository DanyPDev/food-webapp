import React from 'react'
import './RecipeSearchCards.css';


const RecipeSearchCards = (
    {
    //function pamameters
    imageUrl,   //as a string
    recipeName, //as a string
    recipeIngredients, //as array of ingredients line strings (one line element in this array provides info for the quantity and the name of an ingredient)
    recipeCalories, //as integer
    recipeLink      //as a string
    }
) => {
    return (
        /* first div is actual card, for subsequent divs, refer to className */
    
        <div className='card-container'>
            <div className='image-container'>
                <a href={recipeLink}> {/* makes image redirect to full recipe cooking instruction */}
                <img src={imageUrl} alt="Can't show image" />
                </a>
            </div>
            <div className='card-title'>
                <h3>{recipeName}</h3>
            </div>
            <div className=''>
                <ul>
                    {recipeIngredients.map((ingredientLine) => (<li>{ingredientLine}</li>))} {/* iterating through each ingredient line given by the array of ingredient line provided by API */}
                </ul>
            </div>
            <div className='calories'>
                <h4>{Math.round(recipeCalories)} calories</h4>
            </div>
        </div>
    
    )
}

export default RecipeSearchCards;
