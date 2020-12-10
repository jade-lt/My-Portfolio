console.log("app is running");

// const cocktailDbApi =
  // This should return a random cocktail recipe from the The Cocktail DB api and display the name and an image of the cocktail returned:
  $(".generate-drink").on("click", () => {
    console.log("make my drink button was clicked");
    const generateDrink = $.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      (data) => {
        console.log(data.drinks[0].strDrink);
        const drinkName = data.drinks[0].strDrink;
        if (
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

        const drinkImg = data.drinks[0].strDrinkThumb;
        $("#drink-img").attr("src", drinkImg);
        const noThanksButton = `<p type="button" class="test btn btn-info">No thanks, any other ideas?</button>`;
        const recipeButton = `<button type="button" id="generate-recipe" class="btn btn-info">Yum! What's the recipe?</button>`;
    
        $("#no-thanks-button").append(noThanksButton);
      $("#generate-recipe-button").append(recipeButton);
      }

    );
    
    // console.log(noThanksButton);
    // console.log(recipeButton);
  });

  $(".generate-drink").on("click" , "button.test" , () => { 
    console.log("Test button!")
  })

    
 

// $("#generate-recipe").on("click", () => {
//   console.log("recipe button was clicked");
//   // const generateRecipe = $.get(
//   //   `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
//   //   (data) => {
//       // console.log(data.drinks[0].strDrink);
//       // const drinkName = data.drinks[0].strDrink;
//       // const drinkImg = data.drinks[0].strDrinkThumb;
//       // $("#drink-img").attr("src", drinkImg);

//     }
//   );
// // });

// const drinkRecipe = data.drinks[0].strInstructions;
//       $("#drink-recipe").attr(drinkRecipe);
// need to work out how to append the recipe.. the following generates a new drink and gets that recipe...

// $("#generate-recipe").on("click", () => {
//   console.log("recipe button was clicked");
//   const generateDrink = $.get(
//     `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
//     (data) => {
//       console.log(data.drinks[0].strInstructions);
//       const drinkRecipe = data.drinks[0].strInstructions;
//       $("#drink-recipe").html(drinkRecipe);

//       const drinkImg = data.drinks[0].strDrinkThumb;
//       $("#drink-img").attr("src", drinkImg);
//     }
//   );
// });
