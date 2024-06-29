import {recipes} from "./recipes.mjs";

const search = document.querySelector('button')

function randomNumber(range)
{
    const number = Math.floor(Math.random()*range);
    return number;
}

function randomRecipe()
{
    const range = recipes.length;
    const number = randomNumber(range);
    return recipes[number];
}

function recipeTemplate(recipe)
{
    return `<section class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div>
                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                <h1 class="name">${recipe.name}</h1>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </section>
    `
}

function tagsTemplate(tags)
{
    tags.forEach((tag) => {
        return `<p>${tag}</p>`
    });
}

function ratingTemplate(rating)
{
    let html = `<span
        class="rating"
        role="img"
        aria-label="${rating} out of 5 stars"
        > 
    `

    for (let i = 1; i <= 5; i++)
    {
        if (i <= rating)
        {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else
        {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    
    html += `</span>`;

    return html;
}

function renderRecipes(recipeList)
{
    const element = document.getElementsByClassName("recipe");

    const recipeHtml = recipeTemplate(recipeList);

    element.innerHTML = recipeHtml;
}

function init()
{
    const recipe = randomRecipe(recipes)
    renderRecipes([recipe]);
}

function searchHandler(s)
{
    s.preventDefault();  
}

init();

search.addEventListener('click', searchHandler);