const userID = document.querySelector("div[data-attribute]").id;
console.log("User id: ", userID)

fetch(`http://localhost:3001/api/users/${userID}`)
.then ((response) => {
    return response.json;
})
.then ((data) => {
    console.log("This is my user: ",data)
    // const name = data.name;
    // console.log(name);
})

drinkUrl = `/api/users/${userID}`;

function displayRatings(drinkUrl) {
    fetch(drinkUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.querySelector("div[data-attribute]").textContent = `Saved drinks for ${data.name}`;

        const drinksArray = data.cocktails;
        const drinksObject = {data: drinksArray};
        console.log(drinksObject);
        const template = Handlebars.compile(`{{#each data}}
        {{#if this.user_cocktails.saved}}
      
        <div id = "{{this.name}}">
        <p id = "{{this.name}}">{{this.name}} <br>
        <img id = "{{this.name}}" src="/static/{{this.image}}" class="card-img-top" alt="{{this.image}}">
        </p>
       </div>
    <button id="{{this.id}}">Unsave</button>
{{/if}}
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
        const deleteButtons = document.querySelectorAll("button");
        deleteButtons.forEach((btn) => {
            btn.addEventListener("click", function(e) {
                const userID = document.querySelector("div[data-attribute]").id;
                cocktailID = e.target.id;
                const body = {
                    userId: userID,
                    cocktailId: cocktailID,
                    saved: 0
                  }
                  console.log(body);
                  const upload = JSON.stringify(body);
                  const postOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                    body: upload
                }
                fetch("/api/usercocktails", postOptions)
                .then(() => {
                    console.log(`Drink ${cocktailID} unsaved`);
                });
            } )
            
        })
    })
}

displayRatings(drinkUrl);
