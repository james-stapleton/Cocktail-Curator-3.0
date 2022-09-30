// This is a sample url for our get route. It lists all the cocktails. 

drinkUrl = `http://localhost:3001/api/cocktails/`;

// If you need to search a cocktail by its name, use:
// http://localhost:3001/api/cocktails/name/margarita 
// and replace "margarita" with the name, for example ${name}

// If you need to search by id, use:
// http://localhost:3001/api/cocktails/id
// for example replace id with 1, or ${id} to make it variable

//This function accepts the url provided, gets the data then sends it to a template.
  function displayDrink(drinkUrl) {
    console.log(drinkUrl);
    //first a fetch request to the API (like in project 1, only this time it's our custom API)
    fetch(drinkUrl)
    .then((response) => {
        // return the response in json format
        return response.json();
    })
    .then((data) => {
        // now the response is called data. It comes in the form of an array of objects. We will use it to fill out our template after converting it into an object. Check out the console logs when you run it to see what it looks like
        const dataObject = {data: data}; //! This line is key. It turns the array of objects into an object

        //These are just console logs to show you what's happening to the data
        console.log("This is an array of objects from our API. The template() function only accepts an object, so we have to convert this \n",data);
        console.log("This is the above array of objects wrapped in an object, like in Manoli's example before",dataObject);
        console.log("This is the html template we are working with", document.querySelector("#template").innerHTML)

        // Here is where we make use of the data. We get our template from the html page where we used the id #template
        const template = Handlebars.compile(document.querySelector("#template").innerHTML);

        // Then we give the template function our data object
    const filled = template(dataObject); // pass template a data object

    // Here is a log of the data inside the template so you can see what we're sending to the html page
    console.log("This is the template with the data: ",filled);

    //Finally we send the template (named filled) to the html page where we set the id to output. Right now it's just a div but it can be a card or whatever else we need
    document.querySelector('#output').innerHTML = filled;
    })
  }

  // Call the function. This is currently just done on page load but we could do it onClick for a button, or any event we choose
  displayDrink(drinkUrl);