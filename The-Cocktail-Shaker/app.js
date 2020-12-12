$(document).ready(function () {
  // this hides 2 buttons that should only be visible after the first cocktail idea has been generated
  $("#no-thanks-button").hide();
  $("#generate-recipe-button").hide();
  $("#drink-recipe").hide();
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
      const ingredientAmountArray = drinkObjectArray.slice(36, 51);
      const drinkIngredientsArray = drinkObjectArray.slice(21, 36);
      const drinkInstructions = drinkData.strInstructions;

      function returnElements(arr, location) {
        for (let i = 0; i < arr.length; i++) {
          const newItem = arr[i];
          if (newItem !== null) {
            $(location).append(`<li>${newItem}</li>`);
          }
        }
      }

      $("#generate-recipe-button").on("click", () => {
        $("#ingredient-amounts").empty();
        $("#drink-ingredients").empty();
        console.log(drinkName, ingredientAmountArray, drinkIngredientsArray);
        $("#drink-recipe").show();
        // $("#ingredient-amounts").html(ingredientAmountArray);
        // $("#drink-ingredients").html(drinkIngredientsArray);
        returnElements(ingredientAmountArray, "#ingredient-amounts");
        returnElements(drinkIngredientsArray, "#drink-ingredients");
        $("#drink-instructions").html(drinkInstructions);
      });

      $("#no-thanks-button").on("click", () => {
        $("#drink-recipe").hide();
      });
    });
  });
}

newDrinkIdea(".generate-drink");


