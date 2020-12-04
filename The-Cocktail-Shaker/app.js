console.log("app is running");

// $("#make-drink").on("click", () => {
//     console.log("make my drink button was clicked");
// });

// This should return a random cocktail recipe from the The Cocktail DB api and display the name and an image of the cocktail returned:
$("#make-drink").on("click", () => {
    console.log("make my drink button was clicked");
    const drinkData = $.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        (data) => {
            console.log(data.drinks[0].strDrink);
            $("#drink-name").html(data.drinks[0].strDrink);
            $("#drink-img").attr("src", data.drinks[0].strDrinkThumb);
        }
    ) 
});