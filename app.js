class App {
	constructor(recipes, beefIngredients, chickenIngredients, fishIngredients) {
		this.recipes = recipes
		this.beefIngredients = beefIngredients
		this.chickenIngredients = chickenIngredients
		this.fishIngredients = fishIngredients
		// this.getBeef
    this.new
		this.newRecipes = new Recipes()
		this.newBeefIngredientList = new BeefIngredientList()
		// const newBarbacoaIngredients = new BarbacoaIngredientList()
		// this.getBeefImages = this.getBeefImages.bind(this)
		// this.getChickenImages = this.getChickenImages.bind(this)
		// this.getFishImages = this.getFishImages.bind(this)
		this.applyBeefRecipes = this.applyBeefRecipes.bind(this)
		this.getBeefRecipesSuccess = this.getBeefRecipesSuccess.bind(this)
		this.applyChickenRecipes = this.applyChickenRecipes.bind(this)
		this.getChickenRecipesSuccess = this.getChickenRecipesSuccess.bind(this)
		this.applyFishRecipes = this.applyFishRecipes.bind(this)
		this.getFishRecipesSuccess = this.getFishRecipesSuccess.bind(this)
		this.getFrenchDipIngredients = this.getFrenchDipIngredients.bind(this)
		this.getFrenchDipIngredientsSuccess = this.getFrenchDipIngredientsSuccess.bind(this)
		this.getTacoIngredients = this.getTacoIngredients.bind(this)
		this.getTacoIngredientsSuccess = this.getTacoIngredientsSuccess.bind(this)
		this.getBarbacoaIngredients = this.getBarbacoaIngredients.bind(this)
		this.getBarbacoaIngredientsSuccess = this.getBarbacoaIngredientsSuccess.bind(this)
		this.getNutrition = this.getNutrition.bind(this)
		this.getChickenFajitaIngredients = this.getChickenFajitaIngredients.bind(this)
		this.getChickenFajitaIngredientsSuccess = this.getChickenFajitaIngredientsSuccess.bind(this)
		this.getAirFryerIngredients = this.getAirFryerIngredients.bind(this)
		this.getAirFryerIngredientsSuccess = this.getAirFryerIngredientsSuccess.bind(this)
		this.getSweetSourIngredients = this.getSweetSourIngredients.bind.bind(this)
		this.getSweetSourIngredientsSuccess = this.getSweetSourIngredientsSuccess.bind(this)
		this.getNutritionSuccess = this.getNutritionSuccess.bind(this)
		this.getCrabCrescentsIngredients = this.getCrabCrescentsIngredients.bind(this)
		this.getCrabCrescentsIngredientsSuccess = this.getCrabCrescentsIngredientsSuccess.bind(this)
		this.getCajunCatfishIngredients = this.getCajunCatfishIngredients.bind(this)
		this.getCajunCatfishIngredientsSuccess = this.getCajunCatfishIngredients.bind(this)
		this.getGrilledMainIngredients = this.getGrilledMainIngredients.bind(this)
		this.getGrilledMainIngredientsSuccess = this.getGrilledMainIngredientsSuccess.bind(this)
	}

	applyBeefRecipes(event) {

		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getBeefRecipesSuccess(data)
		})
	}

	getBeefRecipesSuccess(data) {
		main.innerHTML = " "
		const recipe1 = data[0].image
		const recipe2 = data[4].image
		const recipe3 = data[1].image
		const choose = document.getElementById("choose")
		choose.textContent = "Choose Your Recipe"
		const divContainer = document.createElement('div')
		divContainer.classList.add("container")
		const divRowOne = document.createElement('div')
		divRowOne.classList.add("row", "justify-content-center")
		const divRowTwo = document.createElement('div')
		divRowTwo.classList.add("row", "justify-content-center")
		const divRowThree = document.createElement('div')
		divRowThree.classList.add("row", "justify-content-center")
		const divRowFour = document.createElement('div')
		divRowFour.classList.add("row", "justify-content-center")
		const divRowFive = document.createElement('div')
		divRowFive.classList.add("row", "justify-content-center")
		const divRowSix = document.createElement('div')
		divRowSix.classList.add("row", "justify-content-center")
		const imgOne = document.createElement('img')
		const imgTwo = document.createElement('img')
		const imgThree = document.createElement('img')
		imgOne.classList.add('img-thumbnail', 'w-50')
		imgTwo.classList.add('img-thumbnail', 'w-50')
		imgThree.classList.add('img-thumbnail', 'w-50')
		const h2One = document.createElement('h3')
		const h2Two = document.createElement('h3')
		const h2Three = document.createElement('h3')
		imgTwo.id = "secondImage"
		imgOne.id = "firstImage"
		imgThree.id = "thirdImage"

		imgOne.src = recipe1
		imgTwo.src = recipe2
		imgThree.src = recipe3
		h2One.textContent = "French Dip"
		h2Two.textContent = "Taco Meat"
		h2Three.textContent = "Beef Barbacoa"

		main.appendChild(divRowOne)
		divRowOne.appendChild(imgOne)
		main.appendChild(divRowTwo)
		divRowTwo.appendChild(h2One)
		main.appendChild(divRowThree)
		divRowThree.appendChild(imgTwo)
		main.appendChild(divRowFour)
		divRowFour.appendChild(h2Two)
		main.appendChild(divRowFive)
		divRowFive.appendChild(imgThree)
		main.appendChild(divRowSix)
		divRowSix.appendChild(h2Three)
		const newIngredientList = new BeefIngredientList()

		const button = document.querySelector('button')
		button.classList.remove('hidden')
	}

	applyChickenRecipes(event) {

		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getChickenRecipesSuccess(data)
		})
	}

	getChickenRecipesSuccess(data) {
		main.innerHTML = " "
		const recipe1 = data[1].image
		const recipe2 = data[6].image
		const recipe3 = data[8].image
		const choose = document.getElementById("choose")
		choose.textContent = "Choose Your Recipe"
		const divContainer = document.createElement('div')
		divContainer.classList.add("container")
		const divRowOne = document.createElement('div')
		divRowOne.classList.add("row", "justify-content-center")
		const divRowTwo = document.createElement('div')
		divRowTwo.classList.add("row", "justify-content-center")
		const divRowThree = document.createElement('div')
		divRowThree.classList.add("row", "justify-content-center")
		const divRowFour = document.createElement('div')
		divRowFour.classList.add("row", "justify-content-center")
		const divRowFive = document.createElement('div')
		divRowFive.classList.add("row", "justify-content-center")
		const divRowSix = document.createElement('div')
		divRowSix.classList.add("row", "justify-content-center")
		const imgOne = document.createElement('img')
		imgOne.classList.add('img-thumbnail', 'w-50')
		imgOne.src = recipe1
		imgOne.id = "firstImage"
		const imgTwo = document.createElement('img')
		imgTwo.classList.add('img-thumbnail', 'w-50')
		imgTwo.src = recipe2
		imgTwo.id = "secondImage"
		const imgThree = document.createElement('img')
		imgThree.classList.add('img-thumbnail', 'w-50')
		imgThree.src = recipe3
		imgThree.id = "thirdImage"
		const h2One = document.createElement('h3')
		h2One.textContent = "Chicken Frijita Sandwiches"
		const h2Two = document.createElement('h3')
		h2Two.textContent = "Air Fryer Whole Chicken"
		const h2Three = document.createElement('h3')
		h2Three.textContent = "Quick Sweet And Sour Chicken"

		main.appendChild(divRowOne)
		divRowOne.appendChild(imgOne)
		main.appendChild(divRowTwo)
		divRowTwo.appendChild(h2One)
		main.appendChild(divRowThree)
		divRowThree.appendChild(imgTwo)
		main.appendChild(divRowFour)
		divRowFour.appendChild(h2Two)
		main.appendChild(divRowFive)
		divRowFive.appendChild(imgThree)
		main.appendChild(divRowSix)
		divRowSix.appendChild(h2Three)
		const newhickenIngredientList = new ChickenIngredientList()
	}

	applyFishRecipes(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getFishRecipesSuccess(data)
		})
	}

		getFishRecipesSuccess(data) {
			main.innerHTML = " "
			const recipe1 = data[8].image
			const recipe2 = data[6].image
			const recipe3 = data[7].image
			const choose = document.getElementById("choose")
			choose.textContent = "Choose Your Recipe"
			const divContainer = document.createElement('div')
			divContainer.classList.add("container")
			const divRowOne = document.createElement('div')
			divRowOne.classList.add("row", "justify-content-center")
			const divRowTwo = document.createElement('div')
			divRowTwo.classList.add("row", "justify-content-center")
			const divRowThree = document.createElement('div')
			divRowThree.classList.add("row", "justify-content-center")
			const divRowFour = document.createElement('div')
			divRowFour.classList.add("row", "justify-content-center")
			const divRowFive = document.createElement('div')
			divRowFive.classList.add("row", "justify-content-center")
			const divRowSix = document.createElement('div')
			divRowSix.classList.add("row", "justify-content-center")
			const imgOne = document.createElement('img')
			imgOne.classList.add('img-thumbnail', 'w-50')
			imgOne.src = recipe1
			imgOne.id = "firstImage"
			const imgTwo = document.createElement('img')
			imgTwo.classList.add('img-thumbnail', 'w-50')
			imgTwo.src = recipe2
			imgTwo.id = "secondImage"
			const imgThree = document.createElement('img')
			imgThree.classList.add('img-thumbnail', 'w-50')
			imgThree.src = recipe3
			imgThree.id = "thirdImage"
			const h2One = document.createElement('h3')
			h2One.textContent = "Crab Crescents"
			const h2Two = document.createElement('h3')
			h2Two.textContent = "Cajun Catfish"
			const h2Three = document.createElement('h3')
			h2Three.textContent = "Grlled Main Lobster Tails"

			main.appendChild(divRowOne)
			divRowOne.appendChild(imgOne)
			main.appendChild(divRowTwo)
			divRowTwo.appendChild(h2One)
			main.appendChild(divRowThree)
			divRowThree.appendChild(imgTwo)
			main.appendChild(divRowFour)
			divRowFour.appendChild(h2Two)
			main.appendChild(divRowFive)
			divRowFive.appendChild(imgThree)
			main.appendChild(divRowSix)
			divRowSix.appendChild(h2Three)
		}

	getFrenchDipIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getFrenchDipIngredientsSuccess(data)
		})
	}

	getFrenchDipIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[1].usedIngredients
		const MIngredients = data[1].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
		this.ingAndNut()
	}
	// const nutrientIngUI = data[1].usedIngredients
	// const nutrientIngMI = data[1].missedIngredients

	// for (let ui = 0; ui < nutrientIngUI.length; ui++) {
	// 	const nNameIngUI = nutrientIngUI[ui].name
	// }
	// for (let mi = 0; mi < nutrientIngMI.length; mi++) {
	// 	const nNameIngMI = nutrientIngMI[mi].name
	// }
	getNutrition() {
		$.ajax({
			type: "GET",
			url: "https://trackapi.nutritionix.com/v2/search/instant?query=french dip",
			contentType: "application/json",
			dataType: "json",
			headers: {
				"x-app-id": "f21054df",
				"x-app-key": "942d221bb8085822d01d5dbf709b8716"
			},

			error: error => console.log(error),
			success: data => this.getNutritionSuccess(data)
		})
	}

	getNutritionSuccess(data) {
		const section = document.getElementById('choose')
		section.innerText = " "
		const calories = data.branded[6].nf_calories
		section.textContent = `Calories: ${calories}`
		const main = document.querySelector('main')
		main.innerHTML = " "
		const button = document.createElement('button')
		const newNutriton = new Nutrition()
	}

	getTacoIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getTacoIngredientsSuccess(data)
		})
	}

	getTacoIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[6].usedIngredients
		const MIngredients = data[6].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
		this.ingAndNut()
	}

	getBarbacoaIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getBarbacoaIngredientsSuccess(data)
		})
	}

	getBarbacoaIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[4].usedIngredients
		const MIngredients = data[4].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
		this.ingAndNut()
	}

	getChickenFajitaIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getChickenFajitaIngredientsSuccess(data)
		})
	}

	getChickenFajitaIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[1].usedIngredients
		const MIngredients = data[1].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
	}

	getAirFryerIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getAirFryerIngredientsSuccess(data)
		})
	}

	getAirFryerIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[6].usedIngredients
		const MIngredients = data[6].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
	}

	getSweetSourIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getSweetSourIngredientsSuccess(data)
		})
	}

	getSweetSourIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[8].usedIngredients
		const MIngredients = data[8].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
	}

	getCrabCrescentsIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getCrabCrescentsIngredientsSuccess(data)
		})
	}

	getCrabCrescentsIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[8].usedIngredients
		const MIngredients = data[8].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}

	}

	getCajunCatfishIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getCajunCatfishIngredientsSuccess(data)
		})
	}

	getCajunCatfishIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[6].usedIngredients
		const MIngredients = data[6].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
	}

	getGrilledMainIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getGrilledMainIngredientsSuccess(data)
		})
	}

	getGrilledMainIngredientsSuccess(data) {
		const h2b = document.querySelector('h2')
		h2b.textContent = "Here Are Your Ingredients!"
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
		const UIngredients = data[7].usedIngredients
		const MIngredients = data[7].missedIngredients
		const ul = document.createElement('ul')
		mainb.appendChild(ul)
		for (let i = 0; i < UIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = UIngredients[i].original
			ul.appendChild(li)
		}
		for (let x = 0; x < MIngredients.length; x++) {
			const li = document.createElement('li')
			li.textContent = MIngredients[x].original
			ul.appendChild(li)
		}
	}

	start() {
		console.log(this)
		this.recipes.buildHomepage()
		// this.getIngredients()
		// this.getNutrition()
	}
	// https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg
}
