$(document).ready(function () {
  // this hides 2 buttons that should only be visible after the first cocktail idea has been generated
  $("#no-thanks-button").hide();
  $("#generate-recipe-button").hide();
});

function newDrinkIdea(buttonInput) {
  // This should return a random cocktail recipe from the The Cocktail DB api and display the name and an image of the cocktail returned
  $(buttonInput).on("click", () => {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`, (data) => {
      const drinkData = data.drinks[0];
      const drinkName = drinkData.strDrink;
      if (
        // this if else isolates cocktail names that start with a vowel or with "the" and returns a gramatically correct sentence
        drinkName[0] === "A" ||
        drinkName[0] === "E" ||
        drinkName[0] === "I" ||
        drinkName[0] === "O" ||
        drinkName[0] === "U"
      ) {
        $("#drink-name").html(`How about an ${drinkName}?`);
      } else if (
        drinkName[0] === "T" &&
        drinkName[1] === "h" &&
        drinkName[2] === "e"
      ) {
        $("#drink-name").html(`How about ${drinkName}?`);
      } else {
        $("#drink-name").html(`How about a ${drinkName}?`);
      }

      const drinkImg = drinkData.strDrinkThumb;
      $("#drink-img").attr("src", drinkImg);
      $("#no-thanks-button").show();
      $("#generate-recipe-button").show();
      $("#give-me-an-idea-button").hide();

      const drinkObjectArray = Object.values(drinkData);
      console.log("test the drink object array", drinkObjectArray);

      const drinkIngredientsArray = drinkObjectArray.slice(21, 36);
      console.log(drinkName, "ingredients only", drinkIngredientsArray);

      const ingredientAmountArray = drinkObjectArray.slice(36, 51);
      console.log(ingredientAmountArray);

      function omitNullElements(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== null) {
            console.log(arr[i]);
          }
        }
      }
omitNullElements(drinkIngredientsArray);
omitNullElements(ingredientAmountArray);
      const drinkInstructions = drinkData.strInstructions;

      $("#generate-recipe-button").on("click", () => {
        console.log("recipe button was clicked");
        console.log(drinkName);
        // $("#drink-recipe").show();
        console.log(drinkInstructions);
        $("#drink-instructions").html(drinkInstructions);
        $("#drink-instructions").show();
      });

      $("#no-thanks-button").on("click", () => {
        console.log("no-thanks-button-was-clicked");
        $("#drink-instructions").hide();
      });
    });
  });
}

newDrinkIdea(".generate-drink");

// maybe generate all necessary info at once, but then have it remain hidden unless the recipe button is clicked??

// function getIngredients(arr) {
//   const ingredientArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     ingredientArr.push(arr[i])
//   }
//   console.log(ingredientArr);
// }
// getIngredients(data);
