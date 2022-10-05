const {Cocktails} = require('../models');

const cocktailData = [
  {
    name: 'Old-Fashioned',
    ingredients: '2oz bourbon, .25oz simply syrup, 4 dashes angostura bitters, orange peel',
    instructions: 'Stir the bourbon, syrup and bitters in a rocks glass with a large cube. Express the orange peel over the drink, rim the glass and drop it in',
    image: 'old-fashioned.webp'
  },
  {
    name: 'Margarita',
    ingredients: '2oz tequila, 1oz fresh-squeezed lime juice, .5oz agave, .25 oz cointreau, salt',
    instructions: 'Wet the rim of a margarita glass with a lime wedge then coat in salt and fill with ice. Add the tequila, lime juice, agave and cointreau to a shaker, shake hard for 10-12 seconds until chilled and diluted, then strain into glass. Garnish with lime wedge',
    image: 'margarita.webp'
  },
  {
    name: 'Manhattan',
    ingredients: '2 ounces rye whiskey, 1 ounce sweet vermouth, 2 dashes Angostura bitters , Garnish: brandied cherry (or lemon twist, if preferred)',
    instructions: 'Add the rye whiskey, sweet vermouth, and bitters into a mixing glass with ice and stir until well-chilled. Strain into a chilled Nick & Nora or coupe glass. Garnish with a brandied cherry (or a lemon twist, if preferred).',
    image: 'manhattan.webp'
  },
  {
    name: 'Dry-Martini',
    ingredients: '2 1/2 ounces gin, 1/2 ounce dry vermouth, 1 dash orange bitters, Garnish: lemon twist',
    instructions: 'Add the gin, dry vermouth and orange bitters into a mixing glass with ice and stir until very cold. Strain into a chilled cocktail glass. Garnish with a lemon twist.',
    image: 'dry-martini.webp'
  },
  {
    name: 'Daiquiri',
    ingredients: '2 ounces light rum, 1 ounce lime juice freshly squeezed, 3/4 ounce demerara sugar syrup, Garnish: lime twist',
    instructions: 'Add the rum, lime juice and demerara sugar syrup to a shaker with ice, and shake until well-chilled. Strain into a chilled coupe. Garnish with a lime twist.',
    image: 'daiquiri.webp'
  },
  {
    name: 'Whiskey-Sour',
    ingredients: '2 ounces bourbon, 3/4 ounce lemon juice, freshly squeezed, 1/2 ounce simple syrup, 1/2 ounce egg white (optional), Garnish: Angostura bitters',
    instructions: 'Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice. Add ice and shake again until well-chilled. Strain into a rocks glass or a coupe. Garnish with 3 or 4 drops of Angostura bitters.',
    image: 'whiskey-sour.webp'
  },
  {
    name: 'Tom-Collins',
    ingredients: '2 ounces London dry gin, 1 ounce lemon juice freshly squeezed, 1/2 ounce simple syrup, Club soda to top, Garnish: lemon wheel, Garnish: maraschino cherry',
    instructions: 'Add the gin, lemon juice and simple syrup to a Collins glass. Fill with ice, top with club soda and stir. Garnish with a lemon wheel and maraschino cherry (optional).',
    image: 'tom-collins.webp'
  },
  {
    name: 'Sazerac',
    ingredients: 'Absinthe to rinse, 1 sugar cube, 1/2 teaspoon cold water, 3 dashes Peychaud’s bitters, 2 dashes Angostura bitters, 1 1/4 ounces rye whiskey, 1 1/4 ounces cognac, Garnish: lemon peel',
    instructions: 'Rinse a chilled rocks glass with absinthe, discarding any excess, and set aside. In a mixing glass, muddle the sugar cube, water and the Peychaud’s and Angostura bitters. Add the rye and cognac, fill the mixing glass with ice and stir until well-chilled. Strain into the prepared glass. Twist the lemon peel over the drink’s surface to express the peel’s oils, then garnish with the peel.',
    image: 'sazerac.webp'
  },
  {
    name: 'Paloma',
    ingredients: '2 ounces tequila, 1/2 ounce lime juice freshly squeezed, Grapefruit soda chilled to top, Garnish: lime wheel, Garnish: salt rim (optional)',
    instructions: 'Rub a lime wedge around the edge of a highball glass, and dip the rim in salt (optional). Add the tequila and lime juice to the glass, and fill with ice. Top with grapefruit soda, and stir briefly and gently to combine. Garnish with a lime wheel.',
    image: 'paloma.webp'
  },
  {
    name: 'Moscow-Mule',
    ingredients: '2 ounces vodka, 1/2 ounce lime juice freshly squeezed, 3 ounces ginger beer chilled, Garnish: lime wheel',
    instructions: 'Fill a Moscow Mule mug (or highball glass) with ice, then add the vodka and lime juice. Top with the ginger beer. Garnish with a lime wheel.',
    image: 'moscow-mule.webp'
  },
  {
    name: 'Sidecar',
    ingredients: '1 1/2 ounces cognac, 3/4 ounce orange liqueur (such as Cointreau), 3/4 ounce lemon juice freshly squeezed, Garnish: orange twist, Garnish: sugar rim (optional)',
    instructions: 'Coat the rim of a coupe glass with sugar, if desired, and set aside. Add the cognac, orange liqueur and lemon juice to a shaker with ice and shake until well-chilled. Strain into the prepared glass. Garnish with an orange twist.',
    image: 'sidecar.webp'
  },
  {
    name: 'Martinez',
    ingredients: '1 1/2 ounces gin, 1 1/2 ounces sweet vermouth, 1/4 ounce Luxardo maraschino liqueur, 2 dashes Angostura bitters, Garnish: orange twist',
    instructions: 'Add the gin, sweet vermouth, maraschino liqueur and bitters into a mixing glass with ice and stir until well-chilled. Strain into a chilled coupe glass. Garnish with an orange twist.',
    image: 'martinez.webp'
  },
  {
    name: "Pimms-Cup",
    ingredients: '2 ounces Pimm’s No. 1, 1/2 ounce lemon juice freshly squeezed, Ginger ale to top, Garnish: cucumber slice, Garnish: mint sprig, Garnish: strawberry, Garnish: lemon wheel (optional), Garnish: orange wheel (optional)',
    instructions: 'Add Pimm’s No. 1 and lemon juice into a highball glass over ice, then top with ginger ale and stir briefly to combine. Garnish with a cucumber slice, mint sprig, skewered strawberry and optional lemon and orange wheels.',
    image: 'pimms-cup.webp'
  },
  {
    name: "Pisco-Sour",
    ingredients: '2 ounces pisco, 1 ounce lime juice freshly squeezed, 1/2 ounce simple syrup, 1 egg white, Garnish: Angostura bitters',
    instructions: 'Add pisco, lime juice, simple syrup and egg white into a shaker and dry-shake (without ice) vigorously. Add ice and shake again until well-chilled. Strain into a chilled Nick & Nora glass. (Alternatively, you can strain it into a rocks glass over fresh ice.) Garnish with 3 to 5 drops of Angostura bitters. Using a straw, toothpick or similar implement, swirl the bitters into a simple design, if desired.',
    image: 'pisco-sour.webp'
  },
  {
    name: "French-75",
    ingredients: '1 ounce gin, 1/2 ounce lemon juice freshly squeezed, 1/2 ounce simple syrup, 3 ounces Champagne (or other sparkling wine), Garnish: lemon twist',
    instructions: 'Add the gin, lemon juice and simple syrup to a shaker with ice and shake until well-chilled. Strain into a Champagne flute. Top with the Champagne. Garnish with a lemon twist.',
    image: 'french-75.webp'
  },
  {
    name: "Mint-Julep",
    ingredients: '8 mint leaves, 1/4 ounce simple syrup, 2 ounces bourbon, Garnish: mint sprig, Garnish: Angostura bitters (optional)',
    instructions: 'In a Julep cup or rocks glass, lightly muddle the mint leaves in the simple syrup. Add the bourbon then pack the glass tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome, and garnish with a mint sprig and a few drops of bitters (optional).',
    image: 'mint-julep.webp'
  },
  {
    name: "Last-Word",
    ingredients: '3/4 ounce gin, 3/4 ounce green Chartreuse, 3/4 ounce maraschino liqueur, 3/4 ounce lime juice freshly squeezed, Garnish: brandied cherry (optional)',
    instructions: 'Add the gin, green Chartreuse, maraschino liqueur and lime juice into a shaker with ice and shake until well-chilled. Strain into a chilled coupe glass. Garnish with a brandied cherry (optional).',
    image: 'last-word.webp'
  },
  {
    name: "Irish-Coffee",
    ingredients: '1 1/2 ounces Irish whiskey, 2 teaspoons brown sugar, Hot brewed coffee to top, Garnish: whipped cream',
    instructions: 'Fill an Irish Coffee mug with hot water, let sit for 2 minutes, then discard the water. Add the whiskey and sugar to the heated glass, fill with the coffee, and stir. Top with an inch of unsweetened lightly whipped cream.',
    image: 'irish-coffee.webp'
  },
  {
    name: "Corpse-Reviver-No.2",
    ingredients: 'Absinthe to rinse, 3/4 ounce London dry gin, 3/4 ounce Lillet blanc, 3/4 ounce orange liqueur, 3/4 ounce lemon juice freshly squeezed',
    instructions: 'Rinse the inside of a chilled coupe or cocktail glass with absinthe, discard the excess and set the glass aside. Add the gin, Lillet blanc, orange liqueur and lemon juice into a shaker with ice and shake until well-chilled. Strain into the prepared glass.',
    image: 'corpse-reviver-no.-2.webp'
  },
  {
    name: "Mojito",
    ingredients: '3 mint leaves, 1/2 ounce simple syrup, 2 ounces white rum, 3/4 ounce lime juice freshly squeezed, Club soda to top, Garnish: mint sprig, Garnish: lime wheel',
    instructions: 'Lightly muddle the mint with the simple syrup in a shaker. Add the rum, lime juice and ice, and give it a brief shake, then strain into a highball glass over fresh ice. Alternatively, you can use pebble ice instead and gently swizzle it all together. Top with the club soda. Garnish with a mint sprig and lime wheel.',
    image: 'mojito.webp'
  },
  {
    name: "Gin-Fizz",
    ingredients: '2 ounces gin, 1 ounce lemon juice freshly squeezed, 3/4 ounce simple syrup, 1 egg white (about 1/2 ounce), Club soda to top (about 1 ounce)',
    instructions: 'Add the gin, lemon juice, simple syrup and egg white to a shaker and vigorously dry-shake (without ice) for about 15 seconds. Add 3 or 4 ice cubes and shake vigorously until well-chilled. Double-strain into a chilled Collins glass and top with club soda.',
    image: 'gin-fizz.webp'
  },
  {
    name: "Vodka-Gimlet",
    ingredients: '2 ounces vodka, 3/4 ounce lime juice freshly squeezed, 1/2 ounce simple syrup, Garnish: lime wheel',
    instructions: 'Add the vodka, lime juice and simple syrup into a shaker with ice and shake until well-chilled. Strain into a chilled cocktail glass. Garnish with a lime wheel.',
    image: 'vodka-gimlet.webp'
  },
  {
    name: "Negroni",
    ingredients: '1 ounce gin, 1 ounce Campari, 1 ounce sweet vermouth, Garnish: orange peel',
    instructions: 'Add the gin, Campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled. Strain into a rocks glass over a large ice cube. Garnish with an orange peel.',
    image: 'negroni.webp'
  },
  {
    name: "Aperol-Spritz",
    ingredients: '3 ounces prosecco, 2 ounces Aperol, 1 ounce club soda, Garnish: orange slice',
    instructions: 'Add the prosecco, Aperol and club soda to a wine glass filled with ice and stir. Garnish with an orange slice. ',
    image: 'aperol-spritz.webp'
  },
  {
    name: "Pina-Colada",
    ingredients: '2 ounces light rum, 1 1/2 ounces cream of coconut, 1 1/2 ounces pineapple juice, 1/2 ounce lime juice, freshly squeezed, Garnish: pineapple wedge, Garnish: pineapple leaf',
    instructions: 'Add the rum, cream of coconut and pineapple and lime juices to a shaker with ice and shake vigorously for 20 to 30 seconds. Strain into a chilled Hurricane glass over pebble ice. Garnish with a pineapple wedge and pineapple leaf.',
    image: 'pina-colada.webp'
  },
  {
    name: "White-Wine-Sangria",
    ingredients: '1 bottle dry white wine (such as pinot grigio or chenin blanc), chilled, 4 ounces Lillet blanc, 1 medium peach, pitted and sliced, 1 green apple, cored and sliced, 1 lemon, cut into wedges, 3 mint sprigs, Club soda, chilled, to top (optional)',
    instructions: 'Add wine, Lillet, fruit and mint into a pitcher and stir to combine. Chill for up to four hours. Divide between 4 to 6 wine goblets and top with club soda, if desired.',
    image: 'white-wine-sangria.webp'
  },
  {
    name: "Mint-Julep",
    ingredients: '8 mint leaves, 1/4 ounce simple syrup, 2 ounces bourbon, Garnish: mint sprig, Garnish: Angostura bitters (optional)',
    instructions: 'In a Julep cup or rocks glass, lightly muddle the mint leaves in the simple syrup. Add the bourbon then pack the glass tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome, and garnish with a mint sprig and a few drops of bitters (optional).',
    image: 'mint-julep.webp'
  },
  {
    name: "Rum-Punch",
    ingredients: '1 1/4 ounces light rum, 1 1/4 ounces dark rum, 2 ounces pineapple juice 1 ounce orange juice, freshly squeezed, 1/4 ounce lime juice, freshly squeezed, 1/4 ounce grenadine, Garnish: brandied or maraschino cherry',
    instructions: 'Add light rum, dark rum, pineapple, orange and lime juices, and grenadine into a shaker with ice, and shake until well-chilled. Strain into a Hurricane glass over fresh ice. Garnish with a maraschino or brandied cherry.',
    image: 'rum-punch.webp'
  },
  {
    name: "Boulevardier",
    ingredients: '1 1/4 ounces bourbon (or rye), 1 ounce Campari, 1 ounce sweet vermouth, Garnish: orange twist',
    instructions: 'Add bourbon, Campari and sweet vermouth into a mixing glass with ice and stir until well-chilled. Strain into a rocks glass over fresh ice. Garnish with an orange twist.',
    image: 'boulevardier.webp'
  },
  {
    name: "Hot-Toddy",
    ingredients: 'Boiling water, to fill a mug, 4 cloves, 1 lemon peel or wheel, 2 teaspoons demerara sugar or brown sugar, 1/4 ounce lemon juice, freshly squeezed, 2 ounces whiskey (bourbon, rye, Irish or scotch)',
    instructions: 'Fill a mug with boiling water and let stand for a minute or two to warm. Meanwhile, stick the cloves into the lemon peel or wheel and set aside. Empty the mug and fill about halfway with fresh boiling water. Add the sugar and stir to dissolve. Add the prepared lemon peel or wheel and stir. Add the lemon juice and whiskey, and stir again.',
    image: 'hot-toddy.webp'
  },
  {
    name: "Mulled-Wine",
    ingredients: '1 bottle fruity red wine (such as beaujolais or syrah), 4 ounces bourbon or brandy, 2 teaspoons sugar, 4 star anise pods, 2 long strips lemon peel or orange peel, Garnish: 6 cinnamon sticks',
    instructions: 'Add the red wine, bourbon or brandy, sugar, star anise pods and lemon or orange peels into a small saucepan, and heat over low heat until warm, but do not allow to boil. Remove from heat and let stand for 5 to 10 minutes. Divide between six mugs or punch cups. Garnish each drink with a cinnamon stick.',
    image: 'mulled-wine.webp'
  },
  {
    name: "Eggnog",
    ingredients: '2 large eggs, 3 ounces superfine sugar, 3 ounces brandy, 2 ounces Sailor Jerry spiced rum, 3/4 cup whole milk, 1/2 cup heavy cream, Gatrnish: nutmeg, freshly grated',
    instructions: 'Beat the eggs in a blender for 1 minute on medium speed. Slowly add the sugar and blend for 1 minute. With the blender still running, add the brandy, rum, milk and heavy cream and blend until combined. Transfer to a container and chill thoroughly to allow the flavors to combine. Serve in a chilled coupe or wine glass. Garnish with freshly grated nutmeg.',
    image: 'eggnog.webp'
  },
  {
    name: "Mudslide",
    ingredients: '1 ounce vodka, 1 ounce coffee liqueur, 1 ounce Baileys Irish cream, 1 1/2 ounces heavy cream, Garnish: chocolate shavings',
    instructions: 'Add the vodka, coffee liqueur, Baileys and cream to a shaker with ice and shake until well-chilled. Strain into a chilled fizz glass or coupe. Garnish with freshly shaved chocolate.',
    image: 'mudslide.webp'
  }
]

const seedCocktails = () => Cocktails.bulkCreate(cocktailData);

module.exports = seedCocktails;