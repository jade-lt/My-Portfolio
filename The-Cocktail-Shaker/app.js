console.log("app is running");

// This should return a random cocktail recipe from the The Cocktail DB api and display the name and an image of the cocktail returned:
$("#generate-drink").on("click", () => {
  console.log("make my drink button was clicked");
  const drinkData = $.get(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    (data) => {
      console.log(data.drinks[0].strDrink);
      const drinkName = data.drinks[0].strDrink;
      if(drinkName[0] === "A" || drinkName[0] === "E" || drinkName[0] === "I" || drinkName[0] === "O" || drinkName[0] === "U") {
        $("#drink-name").html(`How about an ${drinkName}?`);
      } else if (drinkName[0] === "T" && drinkName[1] === "h" && drinkName[2] === "e") {
        $("#drink-name").html(`How about ${drinkName}?`);
      } else {
        $("#drink-name").html(`How about a ${drinkName}?`);
    }
      
      
      $("#drink-img").attr("src", data.drinks[0].strDrinkThumb);
    }
  );
});
