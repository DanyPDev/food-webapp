import React from 'react'
import './RecipeSearchCards.css';

interface Recipe {
    key : React.Key,
    imageUrl: string,
    recipeName: string,
    recipeIngredients: string[],
    recipeCalories: number,
    recipeLink: string
}



const RecipeSearchCards = (
    props: Recipe    
) => {
    return (
        /* first div is actual card, for subsequent divs, refer to className */
    
        <div className='card-container'>
            <div className='image-container'>
                <a href={props.recipeLink}> {/* makes image redirect to full recipe cooking instruction */}
                <img src={props.imageUrl} alt="Can't load preview" />
                </a>
            </div>
            <div className='card-title'>
                <h3>{props.recipeName}</h3>
            </div>
            <div className=''>
                <ul>
                    {props.recipeIngredients.map((ingredientLine) => (<li>{ingredientLine}</li>))} {/* iterating through each ingredient line given by the array of ingredient line provided by API */}
                </ul>
            </div>
            <div className='calories'>
                <h4>{Math.round(props.recipeCalories)} calories</h4>
            </div>
        </div>
    
    )
}

export default RecipeSearchCards;
