const container = document.getElementById('container')
const main = document.querySelector('main')
const h3R = document.querySelector('h3')
const h2I = document.querySelector('h2')
const h2R = document.getElementById('h2R')
const header = document.getElementById('header')
const h3Choose = document.getElementById('choose-recipe')
const section = document.querySelector('section')
const imgDiv = document.getElementById('img-div')
const divList = document.getElementById('id')
const buttonHome = document.getElementById('button-home')
const buttonNutrition = document.getElementById('button-nutrition')
const buttonBack = document.getElementById('button-back')
const newRecipe = document.getElementById('new-recipe')
const hereIsRecipe = document.getElementById('here-is-recipe')
const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.getElementById('modal-content')
const modalButton = document.getElementById('modal-button')
const spinner = document.querySelector('.spinner-border')
const ul = document.querySelector('ul')
let timeToSpin = null
let currentRecipe = 0
let nutritionURL = "https://trackapi.nutritionix.com/v2/search/instant?query="
let extractRecipes = []
let arrayIngredients = []
let arrayInstructions = []
let pageIngredients = []
let pageInstructions = []
let pageInstructions2 = " "
let calorieInfo = null
let servingInfo = null
let nutData = null
let nixURL = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id="
let nixData = {}

function renderHomePage() {
	main.innerHTML = " "
	const divRowOne = document.createElement('div')
	divRowOne.classList.add('card', "row", "justify-content-center")
	divRowOne.setAttribute("width", "10rem")
	const pforRecipeImg1 = document.createElement('h3')
	pforRecipeImg1.textContent = "Breakfast"
	pforRecipeImg1.classList.add('text-center')
	const recipeCardBody1 = document.createElement('div')
	recipeCardBody1.classList.add('card-body', 'card-bg-color', 'mb-2')
	const divRowTwo = document.createElement('div')
	divRowTwo.classList.add("row", "justify-content-center")
	const divRowThree = document.createElement('div')
	divRowThree.setAttribute("width", "10rem")
	divRowThree.classList.add("card", "row", "justify-content-center")
	const pforRecipeImg2 = document.createElement('h3')
	pforRecipeImg2.textContent = "Lunch"
	pforRecipeImg2.classList.add('text-center')
	const recipeCardBody3 = document.createElement('div')
	recipeCardBody3.classList.add('card-body', 'card-bg-color', 'mb-2')
	const divRowFour = document.createElement('div')
	divRowFour.classList.add("row", "justify-content-center")
	const divRowFive = document.createElement('div')
	divRowFive.classList.add("card", "row", "justify-content-center")
	divRowFive.setAttribute("width", "10rem")
	const pforRecipeImg3 = document.createElement('h3')
	pforRecipeImg3.textContent = "Dinner"
	pforRecipeImg3.classList.add('text-center')
	const recipeCardBody5 = document.createElement('div')
	recipeCardBody5.classList.add('card-body', 'card-bg-color', 'mt-2')
	const divRowSix = document.createElement('div')
	divRowSix.classList.add("row", "justify-content-center")
	const imgOne = document.createElement('img')
	imgOne.classList.add('card-img-top', 'top-shadow',)
	imgOne.id = "img1"
	imgOne.src = "https://spoonacular.com/recipeImages/639114-556x370.jpg"
	const imgTwo = document.createElement('img')
	imgTwo.classList.add('card-img-top','top-shadow',)
	imgTwo.id = "img2"
	imgTwo.src = "https://spoonacular.com/recipeImages/986003-556x370.jpg"
	const imgThree = document.createElement('img')
	imgThree.classList.add('card-img-top','top-shadow',)
	imgThree.id = "img3"
	imgThree.src = "https://spoonacular.com/recipeImages/638038-556x370.jpg"
	imgOne.style.cursor = "pointer"
	imgTwo.style.cursor = "pointer"
	imgThree.style.cursor = "pointer"
	const h2One = document.createElement('h3')


	imgOne.addEventListener('click', getExtractedRandomBreakfastRecipes)
	imgTwo.addEventListener('click', getExtractedRandomLunchRecipes)
	imgThree.addEventListener('click', getExtractedRandomDinnerRecipes)

	main.appendChild(divRowOne)
	divRowOne.appendChild(imgOne)
	divRowOne.appendChild(recipeCardBody1)
	recipeCardBody1.appendChild(pforRecipeImg1)
	main.appendChild(divRowTwo)

	main.appendChild(divRowThree)
	divRowThree.appendChild(imgTwo)
	divRowThree.appendChild(recipeCardBody3)
	recipeCardBody3.appendChild(pforRecipeImg2)
	main.appendChild(divRowFour)

	main.appendChild(divRowFive)
	divRowFive.appendChild(imgThree)
	divRowFive.appendChild(recipeCardBody5)
	recipeCardBody5.appendChild(pforRecipeImg3)
	main.appendChild(divRowSix)

}

renderHomePage()


function renderRecipeIngredientPage(data) {
	main.innerHTML = " "
	imgDiv.innerHTML = " "
	extractRecipes = data
	arrayInstructions = extractRecipes.recipes[0].analyzedInstructions[0].steps
	arrayIngredients = extractRecipes.recipes[0].extendedIngredients
	for (let i = 0; i < arrayIngredients.length; i++) {
		pageIngredients.push(arrayIngredients[i].name)
	}
	for (let i = 0; i < arrayInstructions.length; i++) {
		if (extractRecipes.recipes[0].analyzedInstructions[0] === undefined) {
			h3R.innerHTML = " "
			hereIsRecipe.textContent = "Oops! Something went wrong."
		}
		pageInstructions.push(arrayInstructions[i].step)
	}

	const ul = document.createElement('ul')
	ul.id = "list"
	ul.innerText = " "
	for (let i = 0; i < pageInstructions.length; i++) {
		const li = document.createElement('li')
		li.textContent = pageInstructions[i]
		li.classList.add('list-group-item')
		ul.appendChild(li)
	}
	main.classList.remove('flex')
	main.classList.add('d-flex')
	h3R.classList.add('pt-2')
	h2I.textContent = " "
	h2I.classList.add('w-75', 'flex', 'justify-content-center', 'mb-0', 'pb-1')
	h2R.textContent = "Here are your ingredients"
	h2R.classList.add('pt-1', 'card-bg-color')
	ul.classList.add('list-group', 'shadow', 'pt-2')
	ul.appendChild(h2R)

	for (let i = 0; i < pageIngredients.length; i++) {
		const li = document.createElement('li')
		li.textContent = pageIngredients[i]
		li.classList.add('list-group-item', 'text-center', 'w-100')
		ul.appendChild(li)
	}

	const image = document.createElement('img')
	image.src = extractRecipes.recipes[0].image
	image.alt = "Image of Recipe"
	image.classList.add("card-img-top", "mt-10", "mb-3", "img-thumbnail", 'top-shadow', 'card-bg-color')
	imgDiv.classList.add('card')
	imgDiv.setAttribute("width", "18rem")
	const recipeCardBody = document.createElement('div')
	const h3 = document.createElement('h3')
	h3.classList.add('card-title')
	h3.textContent = extractRecipes.recipes[0].title
	recipeCardBody.classList.add('card-body', 'card-bg-color', 'm-0')
	nutritionURL += extractRecipes.recipes[0].title
	imgDiv.appendChild(image)
	imgDiv.appendChild(recipeCardBody)
	imgDiv.appendChild(ul)
	recipeCardBody.appendChild(h3)

	buttonHome.classList.remove("hidden")
	buttonNutrition.classList.remove("hidden")
	newRecipe.classList.remove("hidden")
	buttonHome.addEventListener('click', homeFromRecipePage)
	buttonNutrition.addEventListener('click', getNutrition)
	newRecipe.addEventListener('click', getNewRecipe)

	header.scrollIntoView();
	pageIngredients = []
	pageInstructions = []
	spinner.classList.add('invisible')

	stop()
}

function getExtractedRandomBreakfastRecipes() {
	timeToSpin = setInterval(spin, 1000)
	currentRecipe = 1
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=1&tags=breakfast&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		error: function () {
			noRecipe()
			stop()
		},
		success: function (data) {
			renderRecipeIngredientPage(data)
		}
	})
}

function getExtractedRandomLunchRecipes() {
	timeToSpin = setInterval(spin, 1000)
	currentRecipe = 2
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=1&tags=lunch&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		error: function error() {
			noRecipe()
			stop()
		},
		success: function (data) {
				renderRecipeIngredientPage(data)
		}
	})
}

function getExtractedRandomDinnerRecipes(event) {
	timeToSpin = setInterval(spin, 1000)
	currentRecipe = 3
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=1&tags=dinner&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		error: function () {
			noRecipe()
			stop()
		},
		success: function (data) {
				renderRecipeIngredientPage(data)
		}
	})
}

function homeFromRecipePage(event) {
	renderHomePage()
	buttonNutrition.classList.add("hidden")
	buttonHome.classList.add("hidden")
	main.classList.remove('d-flex')
	imgDiv.innerHTML = " "
	h3Choose.innerHTML = " "
	hereIsRecipe.innerHTML = " "
	hereIsRecipe.classList.remove('shadow')
	hereIsRecipe.innerText = "Choose Your Recipe"
	const imgOne = document.getElementById('img1')
	const imgTwo = document.getElementById('img2')
	const imgThree = document.getElementById('img3')
	imgOne.addEventListener('click', getExtractedRandomBreakfastRecipes)
	imgTwo.addEventListener('click', getExtractedRandomLunchRecipes)
	imgThree.addEventListener('click', getExtractedRandomDinnerRecipes)
	newRecipe.classList.add('hidden')
	imgDiv.innerHTML = " "
	imgDiv.classList.remove('card')
}

function getNewRecipe(event) {
	if (currentRecipe === 1) {
		getExtractedRandomDessertRecipes()
	}
	if (currentRecipe === 2) {
		getExtractedRandomBreakfastRecipes()
	}
	if (currentRecipe === 3) {
		getExtractedRandomDinnerRecipes()
	}
}

function getNutrition(data) {
	timeToSpin = setInterval(spin, 1000)
	$.ajax({
		type: "GET",
		url: nutritionURL,
		contentType: "application/json",
		dataType: "json",
		headers: {
			"x-app-id": "f21054df",
			"x-app-key": "942d221bb8085822d01d5dbf709b8716"
		},

		error: function() {
			noRecipe()
			stop()
		},
		success: function(data) {
			nutData = data.branded[0].nix_item_id
			nixURL += nutData
			modalOverlay.classList.remove('hidden', 'modalHeightBeforeReveal')
			modalContent.classList.remove('hidden')
			stop()
			getNix()
		}
	})
}


function getNix(data) {
	timeToSpin = setInterval(spin, 1000)
	$.ajax({
		type: "GET",
		url: nixURL,
		contentType: "application/json",
		dataType: "json",
		headers: {
			"x-app-id": "f21054df",
			"x-app-key": "f709403f9386d771a17c9f79935a51e9"
	},

	error: function () {
		noRecipe()
		stop()
	},
	success: function (data) {
		nixData = data.foods
		ul.classList.add('d-flex', 'flex-column')
		ul.classList.add('list-group')
		for (let i = 0; i < nixData.length; i++) {
			let serving = nixData[i].serving_qty
			nixData['serving_gty'] = serving
			const li1 = document.createElement('li')
			li1.classList.add('list-group-item')
			li1.textContent = `Serving Quanity: ${serving}`
			let calories = nixData[i].nf_calories
			nixData['calories'] = calories
			const li2 = document.createElement('li')
			li2.classList.add('list-group-item')
			li2.textContent = `Calories: ${calories}`
			let totalFat = nixData[i].nf_total_fat
			nixData['total-fat'] = totalFat
			const li3 = document.createElement('li')
			li3.classList.add('list-group-item')
			li3.textContent = `Total Fat: ${totalFat}`
			let totalCarbs = nixData[i].nf_total_carbohydrate
			nixData['total-carbs'] = totalCarbs
			const li4 = document.createElement('li')
			li4.classList.add('list-group-item')
			li4.textContent = `Total Carbohydrates: ${totalCarbs}`
			let protein = nixData[i].nf_protein
			nixData['protein'] = protein
			const li5 = document.createElement('li')
			li5.classList.add('list-group-item')
			li5.textContent = `Protein: ${protein}`
			let sugars = nixData[i].nf_sugars
			nixData['sugars'] = sugars
			const li6 = document.createElement('li')
			li6.classList.add('list-group-item')
			li6.textContent = `Sugars: ${sugars}`
			let sodium = nixData[i].nf_sodium
			nixData['sodium'] = sodium
			const li7 = document.createElement('li')
			li7.classList.add('list-group-item')
			li7.textContent = `Sodium: ${sodium}`
			let dietaryFiber = nixData[i].nf_dietary_fiber
			nixData['dietary-fiber'] = dietaryFiber
			const li8 = document.createElement('li')
			li8.classList.add('list-group-item')
			li8.textContent = `Dietary Fiber: ${dietaryFiber}`
			ul.appendChild(li1)
			ul.appendChild(li2)
			ul.appendChild(li3)
			ul.appendChild(li4)
			ul.appendChild(li5)
			ul.appendChild(li6)
			ul.appendChild(li7)
			ul.appendChild(li8)
			modalContent.appendChild(ul)
			modalButton.classList.remove('hidden')
			buttonNutrition.addEventListener('click', getNutrition)
		}
		stop()
	}
})
}


modalButton.addEventListener('click', function () {
	modalContent.classList.add('hidden')
	modalOverlay.classList.add('hidden')
	modalButton.classList.add('hidden')
	modalOverlay.classList.add('modalHeightBeforeReveal')
	ul.innerHTML = " "
});

function noRecipe() {
	container.innerHTML = " "
	const headerH1 = document.createElement('h1')
	headerH1.classList.add('bg-dark', 'text-center')
	headerH1.textContent = "Oop! Something went wrong. Please choose another recipe!"
	container.appendChild(headerH1)
	const recipeWrong = document.createElement('button')
	recipeWrong.type = "button"
	recipeWrong.classList.add('btn', 'card-bg-color')
	recipeWrong.textContent = "Get New Recipe"
	recipeWrong.addEventListener('click', getNewRecipe)
	headerH1.appendChild(recipeWrong)
}

function spin() {
	spinner.classList.remove('invisible')
}
function stop() {
	spinner.classList.add('invisible')
	clearInterval(timeToSpin)
}
