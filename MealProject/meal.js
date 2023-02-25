const meals = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
        .then(res => res.json())
        .then(data => mealsDisplay(data.meals))
}


const mealsDisplay = (mealAll) => {
    const meals_container = document.getElementById('meal_container');

    meals_container.innerText = ''

    mealAll.forEach(meal => {

        // meals_container.innerHTML += `
        // <div class="col">
        // <div class="card">
        //   <img src=${meal.strMealThumb} class="card-img-top" alt="...">
        //   <div class="card-body">
        //     <h5 class="card-title">${meal.strMeal}</h5>
        //     <p class="card-text">${meal.strInstructions}</p>
        //   </div>
        // `



        //create child elements 
        const meal_div = document.createElement('div');
        meal_div.classList.add('col', 'meals_card');
        meal_div.innerHTML = `
          <div class="card">
          <img src=${meal.strMealThumb} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${(meal.strInstructions).slice(0,100)+ "..."}</p>
            <!-- Button trigger modal -->
            <button onclick="meals_modal_data(${meal.idMeal})" type="button" class="btn btn-primary" 
                  data-bs-toggle="modal" data-bs-target="#meals_popup">
                More Details
            </button>
          </div>
        `
        meals_container.appendChild(meal_div);
    });
}


const meals_modal_data = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {


            console.log(data.meals[0].strMeal);
            document.getElementById('meals_Label').innerHTML = data.meals[0].strMeal;


            //title.innerText=data.meals[0].strMeal;
            document.getElementById('meal_details').innerHTML = `



        <img class="img-fluid" src="${data.meals[0].strMealThumb}"></img>

        <div class="d-flex flex-wrap justify-content-between my-3">
            <button  class="btn btn-primary my-2" >${data.meals[0].strArea}</button>
            <button  class="btn btn-secondary my-2" >${data.meals[0].strCategory}</button>
            <button class="btn btn-success my-2" >${data.meals[0].strIngredient1}</button>
        </div>

        <p class="card-text mt-3">${(data.meals[0].strInstructions)}</p>
        
        `
        })
    console.log(idMeal);
}


document.getElementById('meal_form').addEventListener('keyup', function (e) {
    e.preventDefault();

    const search = document.getElementById('search').value;
    meals(search)
})


meals('fish')