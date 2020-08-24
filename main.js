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
let counter = 0
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
	spinner.classList.remove('invisible')
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
	imgOne.classList.add('img-thumbnail', 'w-50','top-shadow')
	imgOne.id = "img1"
	imgOne.src = "https://spoonacular.com/recipeImages/639114-556x370.jpg"
	const imgTwo = document.createElement('img')
	imgTwo.classList.add('img-thumbnail', 'w-50', 'top-shadow')
	imgTwo.id = "img2"
	imgTwo.src = "https://spoonacular.com/recipeImages/986003-556x370.jpg"
	const imgThree = document.createElement('img')
	imgThree.classList.add('img-thumbnail', 'w-50', 'top-shadow')
	imgThree.id = "img3"
	imgThree.src = "https://spoonacular.com/recipeImages/638038-556x370.jpg"
	imgOne.style.cursor = "pointer"
	imgTwo.style.cursor = "pointer"
	imgThree.style.cursor = "pointer"
	const h2One = document.createElement('h3')
	h2One.textContent = "Breakfast Recipes"
	h2One.classList.add("mt-2")
	const h2Two = document.createElement('h3')
	h2Two.textContent = "Lunch Recipes"
	h2Two.classList.add("mt-2")
	const h2Three = document.createElement('h3')
	h2Three.textContent = "Dinner Recipes"
	h2Three.classList.add("mt-2", "mb-4")
	imgOne.addEventListener('click', getExtractedRandomBreakfastRecipes)
	imgTwo.addEventListener('click', getExtractedRandomLunchRecipes)
	imgThree.addEventListener('click', getExtractedRandomDinnerRecipes)

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

	spinner.classList.add('invisible')
}

renderHomePage()

const recipeAndIngredients = {
	renderRecipeIngredientPage: function(data) {
		main.innerHTML = " "
		spinner.classList.remove('invisible')
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
		h2I.textContent = "Here is your recipe"
		h2I.classList.add('w-75', 'flex', 'justify-content-center', 'mb-0', 'pb-1')
		h2R.textContent = "Here are your ingredients"
		h2R.classList.add('pt-1')
		ul.classList.add('list-group', 'w-75', 'shadow', 'pt-2')
		ul.appendChild(h2R)

		for (let i = 0; i < pageIngredients.length; i++) {
			const li = document.createElement('li')
			li.textContent = pageIngredients[i]
			li.classList.add('list-group-item', 'text-center', 'w-100')
			ul.appendChild(li)
		}

		const image = document.createElement('img')
		image.src = extractRecipes.recipes[0].image
		image.classList.add("mt-10", "mb-3", "img-thumbnail", 'top-shadow')
		imgDiv.appendChild(image)
		h3R.textContent = extractRecipes.recipes[0].title
		nutritionURL += extractRecipes.recipes[0].title
		main.appendChild(ul)

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
	}
}

function getExtractedRandomBreakfastRecipes() {
	counter = 1
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=1s&tags=breakfast&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		success: function (data) {
			error: error => error,
			recipeAndIngredients.renderRecipeIngredientPage(data)
		}
	})
}

function getExtractedRandomLunchRecipes() {
	counter = 2
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=2&tags=lunch&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		success: function (data) {
			error: error => error,
				recipeAndIngredients.renderRecipeIngredientPage(data)
		}
	})
}

function getExtractedRandomDinnerRecipes(event) {
	counter = 3
	$.ajax({
		type: "GET",
		url: "https://api.spoonacular.com/recipes/random?number=1&tags=dinner&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
		contentType: "application/json",
		dataType: "json",

		success: function (data) {
			error: error => error,
				recipeAndIngredients.renderRecipeIngredientPage(data)
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
}

function getNewRecipe(event) {
	if (counter === 1) {
		getExtractedRandomDessertRecipes()
	}
	if (counter === 2) {
		getExtractedRandomBreakfastRecipes()
	}
	if (counter === 3) {
		getExtractedRandomDinnerRecipes()
	}
}

function getNutrition(data) {
	$.ajax({
		type: "GET",
		url: nutritionURL,
		contentType: "application/json",
		dataType: "json",
		headers: {
			"x-app-id": "f21054df",
			"x-app-key": "942d221bb8085822d01d5dbf709b8716"
		},

		error: error => error,
		success: function (data) {
			nutData = data.branded[0].nix_item_id
			nixURL += nutData
			modalOverlay.classList.remove('hidden', 'modalHeightBeforeReveal')
			modalContent.classList.remove('hidden')
			getNix()
		}
	})
}


function getNix(data) {
	$.ajax({
		type: "GET",
		url: nixURL,
		contentType: "application/json",
		dataType: "json",
		headers: {
			"x-app-id": "f21054df",
			"x-app-key": "f709403f9386d771a17c9f79935a51e9"
	},

	error: error => error,
		success: function (data) {
			nixData = data.foods
			ul.classList.add('d-flex', 'flex-column')
			ul.classList.add('list-group')
			for (let i = 0; i < nixData.length; i++) {
				let serving = nixData[i].serving_qty
				nixData['serving_gty'] = serving
				const li10 = document.createElement('li')
				li10.classList.add('list-group-item')
				li10.textContent = `Serving Quanity: ${serving}`
				let calories = nixData[i].nf_calories
				nixData['calories'] = calories
				const li1 = document.createElement('li')
				li1.classList.add('list-group-item')
				li1.textContent = `Calories: ${calories}`
				let totalFat = nixData[i].nf_total_fat
				nixData['total-fat'] = totalFat
				const li2 = document.createElement('li')
				li2.classList.add('list-group-item')
				li2.textContent = `Total Fat: ${totalFat}`
				let satFat = nixData[i].nf_saturated_fat
				nixData['saturated_fat'] = satFat
				const li3 = document.createElement('li')
				li3.classList.add('list-group-item')
				li3.textContent = `Total Saturated Fat: ${satFat}`
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
				let cholesterol = nixData[i].nf_cholesterol
				nixData['cholesteral'] = cholesterol
				const li8 = document.createElement('li')
				li8.classList.add('list-group-item')
				li8.textContent = `Cholesterol: ${cholesterol}`
				let dietaryFiber = nixData[i].nf_dietary_fiber
				nixData['dietary-fiber'] = dietaryFiber
				const li9 = document.createElement('li')
				li9.classList.add('list-group-item')
				li9.textContent = `Dietary Fiber: ${dietaryFiber}`
				ul.appendChild(li10)
				ul.appendChild(li1)
				ul.appendChild(li2)
				ul.appendChild(li3)
				ul.appendChild(li4)
				ul.appendChild(li5)
				ul.appendChild(li6)
				ul.appendChild(li7)
				ul.appendChild(li8)
				ul.appendChild(li9)
				modalContent.appendChild(ul)
				modalButton.classList.remove('hidden')
				buttonNutrition.addEventListener('click', getNutrition)
			}
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

// const save {
// 	calories: [
// 		{
// 			time: '5:00 p.m.',
// 			description: 'Meeting with Jeff'
//     },
// }
// function saveRecipe() {
// 	days[calories].push(obj);

// 	currentDay = dayValue;
// }
