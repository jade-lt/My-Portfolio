// this hides buttons that should only be visible after the first cocktail idea has been generated
$(document).ready(function () {
  $("#no-thanks-button").hide();
  $("#generate-recipe-button").hide();
  $("#start-again-button").hide();
  $("#drink-recipe").hide();
});

// this should return a random cocktail recipe from the The Cocktail DB api and display the name and an image of the cocktail returned
function newDrinkIdea(buttonInput) {
  $(buttonInput).on("click", () => {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`, (data) => {
      const drinkData = data.drinks[0];
      const drinkName = drinkData.strDrink;
      const x = drinkName[0];

// this if else isolates cocktail names that start with a vowel or with "the" and returns a gramatically correct sentence
      if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U") {
        $("#drink-name").html(`How about an ${drinkName}?`);
      } else if (x === "T" && x === "h" && x === "e") {
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
      const ingredientsArray = drinkObjectArray.slice(21, 36);
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
        console.log(drinkName, ingredientAmountArray, ingredientsArray);
        $("#drink-recipe").show();
        returnElements(ingredientAmountArray, "#ingredient-amounts");
        returnElements(ingredientsArray, "#drink-ingredients");
        $("#drink-instructions").html(drinkInstructions);
        $("#generate-recipe-button").hide();
        $("#no-thanks-button").hide();
        $("#start-again-button").show();
      });

      $("#no-thanks-button").on("click", () => {
        $("#drink-recipe").hide();
      });

      $("#start-again-button").on("click", () => {
        window.location.reload();
      });

    });
  });
}

newDrinkIdea(".generate-drink");
