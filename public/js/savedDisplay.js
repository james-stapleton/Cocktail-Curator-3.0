drinkUrl = `/api/users/1`;

function displayRatings(drinkUrl) {
    fetch(drinkUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const drinksArray = data.cocktails;
        const drinksObject = {data: drinksArray};
        console.log(drinksObject);
        const template = Handlebars.compile(`{{#each data}}
      
        <div id = "{{this.name}}">
        <p id = "{{this.name}}">{{this.name}} <br>
        <img id = "{{this.name}}" src="/static/{{this.image}}" class="card-img-top" alt="{{this.image}}">
        </p>
       </div>
         {{/each}}  `);
        console.log("template: ",template);
        const filled = template(drinksObject);
        console.log("Filled", filled);

        document.querySelector("#output").innerHTML = filled;
        console.log(filled);

        const drinks = document.querySelectorAll("div");
        drinks.forEach((drink) => {
            drink.addEventListener("click", function(e) {
                var targetedDrink = e.target.id;
                console.log(targetedDrink);
                let serverUrl = "/recipe/";
                serverUrl += targetedDrink;
                window.location.href = serverUrl;
            })
        } )
    })
}

displayRatings(drinkUrl);

console.log("display drinks");