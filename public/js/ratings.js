const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelector(".stars");
const form = document.querySelector(".drink-form");
var starIndex;

function handleFormSubmit(event) {
    event.preventDefault();
    var userId = document.querySelector("#userInput").value;
    var cocktailId = document.querySelector("#drinkInput").value;
    var starIndex = getStar();
    console.log(`user: ${userId} cocktail: ${cocktailId} rating: ${starIndex}`);
    postRating(userId, cocktailId, starIndex);
}

form.addEventListener("submit", handleFormSubmit);

stars.forEach((star, i) => {
    star.addEventListener("click", () => {
        star.classList.add("disabled");
        stars.forEach((s, index) => {
            if(index <= i) {
                s.classList.add("active");
            }
        })
        rating = i + 1;
        console.log(`Star ${rating} clicked`);
        setStar(rating);
    })
});

function setStar(i) {
    return starIndex = i;
}

function getStar() {
    return starIndex;
}

function postRating(userId, cocktailId, rating) {
    console.log(userId, cocktailId, rating);
    const newRating = {
        "userId": userId,
        "cocktailId": cocktailId,
        "rating": rating
    }
    const upload = JSON.stringify(newRating);
    postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: upload
    }
    fetch("http://localhost:3001/api/ratings", postOptions)
    .then(() => {
        console.log("Thank you for submitting your rating!");
    });
}


//! -----------------------------------------------------------------------------------------------------------
//  TODO: Implement weather api call and drink recommendation based on temp
var apiKey = "6015d4614214e35f89f83b4825650637";
var searchFormEl = document.querySelector("#search-form");
var apiKey = "6015d4614214e35f89f83b4825650637";
var currentWeatherEl = document.querySelector("#current-weather");
var currentCityEl = document.querySelector("#current-city");
var currentTempEl = document.querySelector("#current-temp");
var searchFormEl = document.querySelector("#search-form");
var cityDrink = document.querySelector("#city-drink-name");
var currentTemp;
var recipeParent = document.querySelector("#recipe");
var savedList = document.querySelector("#saved-drinks");
var tempText = document.querySelector("#tempText");
var rankingEntry; 
var currentDrink;


function getCurrentWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey +
        "&units=imperial"
    )
      .then(function (response) {
        return response.json();
      })
  
      .then(function (response) {
        currentTemp = response.main.temp;
        drinkRec(currentTemp);
        currentTempEl.textContent =
          "Temp: " + Math.round(currentTemp) + " \u00B0F";
      });
  }

  function handleSearchFormSubmit(e) {
    e.preventDefault();
    var searchInputVal = document.querySelector("#search-input").value;
  
    if (!searchInputVal) {
      console.log("Invalid Input!");
      return;
    }
    getCurrentWeather(searchInputVal);
  }

  searchFormEl.addEventListener("submit", handleSearchFormSubmit);

  function drinkRec(currentTemp) {
    var drinksArray = []; //empty array that will be filled with curated drink suggestions
    var drinkIndex; //index variable that will be randomly assigned to select a drink from the array
    var drink = ""; //empty string that will be given the name of a drink from the array
    var drinkURL = `http://localhost:3001/api/cocktails/name/`;
    tempText.innerHTML = "";
    console.log("Current drink is: " + currentDrink);
  
    if (currentTemp > 85) {
      //populate the array
      drinksArray = [
        "margarita",
        "mojito",
        "aperol_spritz",
        "pina_colada",
        "daiquiri",
        "paloma",
        "white_wine_sangria",
        "mint_julep",
      ];
      //randomly generate the index then select the drink
      drinkIndex = Math.floor(Math.random() * drinksArray.length);
      drink = drinksArray[drinkIndex];
      while (drink == currentDrink) {
        drinkIndex = Math.floor(Math.random() * drinksArray.length);
        drink = drinksArray[drinkIndex];
      }
      //append the selected drink name to the url and call the tempSearch function which contains the Fetch code
      drinkURL += drink;
      currentDrink = drink;
      displayDrink(drinkURL);
      console.log("It's a scorcher today! Try a refreshing " + drink);
      var weatherDrink = document.createElement("h2");
      weatherDrink.textContent = "It's a scorcher today! Try a refreshing: ";
      tempText.appendChild(weatherDrink);
    } else if (currentTemp > 60 && currentTemp <= 85) {
      drinksArray = [
        "moscow_mule",
        "tom_collins",
        "rum_punch",
        "sazerac",
        "martini",
        "whiskey_sour",
        "sidecar",
      ];
      drinkIndex = Math.floor(Math.random() * drinksArray.length);
      drink = drinksArray[drinkIndex];
      while (drink == currentDrink) {
        drinkIndex = Math.floor(Math.random() * drinksArray.length);
        drink = drinksArray[drinkIndex];
      }
      drinkURL += drink;
      currentDrink = drink;
      displayDrink(drinkURL);
      console.log("Nice Day! Relax with an easy-sipping " + drink);
      var weatherDrink = document.createElement("h2");
      weatherDrink.textContent = "Nice Day! Relax with an easy-sipping: ";
      tempText.appendChild(weatherDrink);
    } else if (currentTemp > 40 && currentTemp <= 60) {
      drinksArray = [
        "old_fashioned",
        "manhattan",
        "martinez",
        "negroni",
        "boulevardier",
        "sidecar",
      ];
      drinkIndex = Math.floor(Math.random() * drinksArray.length);
      drink = drinksArray[drinkIndex];
      while (drink == currentDrink) {
        drinkIndex = Math.floor(Math.random() * drinksArray.length);
        drink = drinksArray[drinkIndex];
      }
      drinkURL += drink;
      currentDrink = drink;
      displayDrink(drinkURL);
      console.log(
        "It's a bit chilly! You need a little liquid warmth from a stiff " + drink
      );
      var weatherDrink = document.createElement("h2");
      weatherDrink.textContent =
        "It's a bit chilly! You need a little liquid warmth from a stiff: ";
      tempText.appendChild(weatherDrink);
    } else {
      drinksArray = [
        "irish_coffee",
        "hot_toddy",
        "mulled_wine",
        "eggnog",
        "mudslide",
      ];
      drinkIndex = Math.floor(Math.random() * drinksArray.length);
      drink = drinksArray[drinkIndex];
      while (drink == currentDrink) {
        drinkIndex = Math.floor(Math.random() * drinksArray.length);
        drink = drinksArray[drinkIndex];
      }
      drinkURL += drink;
      currentDrink = drink;
      displayDrink(drinkURL);
      console.log("Brr. Warm up with a " + drink);
      var weatherDrink = document.createElement("h2");
      weatherDrink.textContent = "Brr. Warm up with a: ";
      tempText.appendChild(weatherDrink);
    }
    return currentDrink;
  }

  function displayDrink(drinkUrl) {
    console.log(drinkUrl);
    fetch(drinkUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const template = Handlebars.compile(document.querySelector("#template").innerHTML);
    const filled = template(data);
    console.log(filled);
    document.querySelector('#output').innerHTML = filled;

    const card = document.querySelector("#card1");

  card.addEventListener("click", () => {
    

    let drinkClicked = document.querySelector("#cocktail-name").innerHTML;
    console.log("This is the drink you clicked", drinkClicked);
    localStorage.setItem("cocktail", drinkClicked);
    const drinkFromStroage = localStorage.getItem("cocktail");
    console.log("Here is the drink returned from localstorage: ", drinkFromStroage);
  })

    })
  }

//  TODO: Implement search by ingredient function

var searchIngredientEl = document.querySelector("#search-ingredient-form");

function getCocktailFromIngredient(ingredientName) {
  fetch(
    "http://localhost:3001/api/cocktails/ing/" + ingredientName
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const dataObject = {data: data};
        const template = Handlebars.compile(document.querySelector("#template2").innerHTML);
    const filled = template(dataObject);
    console.log("Filled: ", filled);
    console.log(filled);
    document.querySelector('#output2').innerHTML = filled;

    //!-----------------------Almost working
    //selectAll cards with a data-attribute
    //log them
    //for each card, set an event listener that waits for a click
    // then do something?? To link to recipe page
    // Make the event listener on the button
    // Then find the sibling
      const cards = document.querySelectorAll("div[data-attribute]");
      console.log(cards);
      cards.forEach((card) => {
        card.addEventListener("click", function(e) {
          console.log("Event: ",e)
          var targetedCard = e.target;
          console.log(targetedCard); 
        })
      })
//!-------------------------------------------------
    });
}

function handleIngredientFormSubmit(e) {
  e.preventDefault();
  var searchInputVal = document.querySelector("#search-ingredient-input").value;

  if (!searchInputVal) {
    console.log("Invalid Input!");
    return;
  }
  getCocktailFromIngredient(searchInputVal);
}

searchIngredientEl.addEventListener("submit", handleIngredientFormSubmit);

//! -----------------------------------------------------------------------------------------------------------
//  TODO: Implement search by drink name

searchNameEl = document.querySelector("#name-search");

searchNameEl.addEventListener("submit", searchNameSubmit);

function searchNameSubmit(e) {
  e.preventDefault();
  let drinkUrl = "http://localhost:3001/api/cocktails/name/"
  let drinkInputVal = document.querySelector("#name").value;
  drinkUrl+= drinkInputVal;
  searchName(drinkUrl);
}

function searchName(drinkUrl) {
  fetch(drinkUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const template = Handlebars.compile(document.querySelector("#template").innerHTML);
    const filled = template(data);
    console.log(filled);
    document.querySelector('#output3').innerHTML = filled;
  })
}