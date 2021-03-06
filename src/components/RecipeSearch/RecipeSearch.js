import React, {useState, useEffect} from 'react';
import './RecipeSearch.css';
import RecipeSearchCards from './RecipeSearchCards';

function RecipeSearch() {
    

    //for request URL info
    const APP_ID = '3ada6d24';
    const APP_KEY = 'fcb30ba3714e441afb8353a835a52f32';
    //state to store and change user input
    const [userInput,setUserInput] = useState(''); 
    //state to store all the recipes
    const [recipes,setRecipes] = useState([]);
    
    //Everytime a form submits, this function is called. It changes the state of userInput to whatever is inside the input textbox. An empty string userInput implies a random recipe search
    const handleSearch = (e) => {
        e.preventDefault(); //prevents default behavior of page refreshing on form submit
        setUserInput(document.getElementById("recipeName").value);
    }


    //this useEffect have its dependency set to userInput, everytime userInput changes, this useEffect renders everything that is inside the curly braces.
    //This useEffect will trigger on page load with the initial userInput state set to an empty string since userInput changed from "nothing" to an empty
    // string. This will diplay random recipes as the API was designed this way.
    useEffect(() => {
        //async funtion to fetch api and handle promise
        async function loadRecipes() {
            try{
                //making API call
                //waiting for response
                const requestResponse = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${userInput}&app_id=${APP_ID}&app_key=${APP_KEY}&ingr=5-10&imageSize=REGULAR&random=true`);
                const responseToJSON = await requestResponse.json(); //converting to json
                setRecipes(responseToJSON.hits); //fills the recipes array state to the JSON response of the API. If you want to see array of object names from JSON response, uncomment debug line in the next line to see JSON response on console
                // console.log(responseToJSON); for debugging
            } catch (error) {       //catch statement to throw error on console when there is a network error
                console.log(error); 
            }
        }  
        //makes actual api call
        loadRecipes();
    }, [userInput])
    


    //State and method for hover button animation feature
    /*Using HTML DOM events to change hover state when user hover over the search button (onMouseEnter and onMouseLeave)*/
    const [hover,setHover] = useState(false);
    const handleHover = () => {setHover(!hover)};

    return (

        <div>
            <h1>Recipe Search</h1>
            {/* User input is set to whatever is in input textbox each time user submit form with button */}
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Enter any time of food' id='recipeName' />
                <button onMouseEnter={handleHover} onMouseLeave={handleHover} className={hover ? "btn btn-success buttonPosition":"btn btn-light buttonPosition"}>{hover ? "Yummy!":"Search"}</button>
            </form>
            <br/>
            <span>*This search API can handle 10 search per minutes</span>
            <br/>
            <span>TIP: try to click an image</span>
            <br/>
            <br/>

            <div className='allTheCard'>
            {recipes.map(recipeObject =>  
            //itterate each element in the hits array, fills each RecipeSearchCards parameters and return recipe cards with all the info
            (<RecipeSearchCards
                key={recipeObject.recipe.label}  //React recommends to use unique key for every child
                imageUrl={recipeObject.recipe.image}    //passes prop as a string
                recipeName={recipeObject.recipe.label}  //passes prop as a string
                recipeIngredients={recipeObject.recipe.ingredientLines} //passes prop as a string array
                recipeCalories={recipeObject.recipe.calories}   //passes prop as an integer
                recipeLink={recipeObject.recipe.url}    //passes prop as a string
            />)
            )}
            </div>

        </div>
    )
}

export default RecipeSearch
