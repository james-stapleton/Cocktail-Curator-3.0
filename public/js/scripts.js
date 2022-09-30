var drinkList = document.querySelector("#drinks");
var savedDrinksButton = document.querySelector('#saved-drinks-btn');
var savedFormEl = document.querySelector('#saved-drinks-form');

fetch("http://localhost:3001/api/cocktails")
  .then(function (response) {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      const drinkName = response[i].name;
      const drinkIngredients = response[i].ingredients;
      const drinkInstructions = response[i].instructions;
      const drinkImage = response[i].image;
      const drinkViews = response[i].views;
      const drinkRating = response[i].rating;
      var drinkEl = document.createElement("li");
      const drinkString = `${drinkName} <br> ${drinkIngredients} <br>${drinkInstructions} <br>Views: ${drinkViews} <br> Rating: ${drinkRating}`;

      drinkEl.textContent = drinkString;
      drinkEl.innerHTML = drinkString;
      console.log(drinkString);
      console.log(drinkEl);
      drinkList.appendChild(drinkEl);
    }
  });

  // Read the value of the input box in the form, then call the getSavedDrinks function with the provided user-id
savedFormEl.addEventListener("submit", handleSavedFormSubmit);

  function handleSavedFormSubmit(e) {
    e.preventDefault();
    var savedInputVal = document.querySelector("#saved-input").value;
    console.log(savedInputVal);
  
    if (!savedInputVal) {
      console.log("Please enter a valid user ID");
      return;
    }
    getSavedDrinks(savedInputVal);
  }

  // Grab user ID from the form, append it to the api url and make a fetch request
  function getSavedDrinks(userID) {
    console.log(userID);
    fetch(`http://localhost:3001/api/users/${userID}`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log(`Fetch successful for user ${userID}!`)
        console.log(data);
    });
  };
  