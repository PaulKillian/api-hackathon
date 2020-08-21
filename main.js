const main = document.querySelector('main')
const h3R = document.querySelector('h3')
const h2I = document.querySelector('h2')
const h2R = document.getElementById('h2R')
const section = document.querySelector('section')
const imgDiv = document.getElementById('imgDiv')
const divList = document.getElementById('id')
const renderPageData = {}
let americanRecipes = {}
let extractedDessertRecipes = []
let arrayIngredients = []
let arrayInstructions = []
let pageIngredients = []
let pageInstructions = []
let pageInstructions2 = " "

function renderHomePage() {
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
	imgOne.id = "img1"
	imgOne.src = "https://spoonacular.com/recipeImages/639114-556x370.jpg"
	const imgTwo = document.createElement('img')
	imgTwo.classList.add('img-thumbnail', 'w-50')
	imgTwo.id = "img2"
	imgTwo.src = "https://spoonacular.com/recipeImages/651958-556x370.jpg"
	const imgThree = document.createElement('img')
	imgThree.classList.add('img-thumbnail', 'w-50')
	imgThree.id = "img3"
	imgThree.src = "https://spoonacular.com/recipeImages/638038-556x370.jpg"
	const h2One = document.createElement('h3')
	h2One.textContent = "Dessert Recipes"
	const h2Two = document.createElement('h3')
	h2Two.textContent = "Breakfast Recipes"
	const h2Three = document.createElement('h3')
	h2Three.textContent = "Dinner Recipes"

	main.appendChild(divContainer)
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

renderHomePage()

const imgOne = document.getElementById('img1')
const imgTwo = document.getElementById('img2')
const imgThree = document.getElementById('img3')
imgOne.addEventListener('click', getExtractedRandomDessertRecipes)
imgTwo.addEventListener('click', getExtractedRandomDinnerRecipes)
imgThree.addEventListener('click', getExtractedRandomBreakfastRecipes)

function renderRecipeIngredientPage(data) {
	extractedDessertRecipes = data
	arrayInstructions = extractedDessertRecipes.recipes[0].analyzedInstructions[0].steps
	arrayIngredients = extractedDessertRecipes.recipes[0].extendedIngredients
	for (let i = 0; i < arrayIngredients.length; i++) {
		pageIngredients.push(arrayIngredients[i].name)
	}
	for (let i = 0; i < arrayInstructions.length; i++) {
		pageInstructions.push(arrayInstructions[i].step)
	}

	const ul = document.createElement('ul')
	for (let i = 0; i < pageInstructions.length; i++) {
		const li = document.createElement('li')
		li.textContent = pageInstructions[i]
		li.classList.add('list-group-item')
		ul.appendChild(li)
	}
	main.innerHTML = " "
	main.classList.remove('flex')
	main.classList.add('d-flex')
	h3R.textContent = pageInstructions2
	h3R.classList.add('pt-2')
	h2I.textContent = "Here is your recipe!"
	h2I.classList.add('shadow', 'w-75', 'flex', 'justify-content-center', 'mb-0', 'pb-1')
	h2R.textContent = "Here are your ingredients!"
	h2R.classList.add('shadow', 'pt-1')
	ul.classList.add('list-group', 'w-75', 'shadow', 'pt-2')
	ul.appendChild(h2R)

	for (let i = 0; i < pageIngredients.length; i++) {
		const li = document.createElement('li')
		li.textContent = pageIngredients[i]
		li.classList.add('list-group-item', 'text-center', 'w-100')
		ul.appendChild(li)
	}

	const image = document.createElement('img')
	image.src = extractedDessertRecipes.recipes[0].image
	image.classList.add("mt-10", "mb-3", "img-thumbnail")
	imgDiv.appendChild(image)
	h3R.textContent = extractedDessertRecipes.recipes[0].title

	main.appendChild(ul)
}

	function getExtractedRandomDessertRecipes() {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			success: function (data) {
				renderRecipeIngredientPage(data)
			}
		})
}

	function getExtractedRandomDinnerRecipes() {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/random?number=1&tags=breakfast&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			success: function (data) {
				renderRecipeIngredientPage(data)
			}
		})
}

	function getExtractedRandomBreakfastRecipes() {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/random?number=2&tags=dinner&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			success: function (data) {
				renderRecipeIngredientPage(data)
			}
		})
}
