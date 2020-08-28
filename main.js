const container = document.getElementById('container')
const main = document.querySelector('main')
const h3R = document.querySelector('h3')
const h2I = document.querySelector('h2')
const header = document.getElementById('header')
const h3Choose = document.getElementById('choose-recipe')
const section = document.querySelector('section')
const imgDiv = document.getElementById('img-div')
const imgDiv1 = document.getElementById('img-div1')
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
const h1 = document.getElementById('oops')
const choose = document.getElementById('choose')
const noRecipeButton = document.getElementById('no-recipe')
const imgRow = document.getElementById('img-row')
const imgContainer = document.getElementById('img-container')
const modalUl = document.getElementById('modal-list')
const loading = document.getElementById('loading-screen')
const spinnerText = document.getElementById('spinner-text')
let spinnerCounter = 0
let imgClick = 0
let ulForRecipeIngredientList = document.getElementById('recipe-ingredient-list')
let prioritiesNewRecipe = null
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
let currentImg = null
container.addEventListener('click', handleEvent)


function renderHomePage() {
	imgContainer.innerHTML = " "
	imgRow.innerHTML = " "
	const divRowOne = document.createElement('div')
	divRowOne.classList.add('card')
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
	divRowThree.classList.add("card")
	const pforRecipeImg2 = document.createElement('h3')
	pforRecipeImg2.textContent = "Lunch"
	pforRecipeImg2.classList.add('text-center')
	const recipeCardBody3 = document.createElement('div')
	recipeCardBody3.classList.add('card-body', 'card-bg-color', 'mb-2')
	const divRowFour = document.createElement('div')
	divRowFour.classList.add("row", "justify-content-center")
	const divRowFive = document.createElement('div')
	divRowFive.classList.add("card")
	divRowFive.setAttribute("width", "10rem")
	const pforRecipeImg3 = document.createElement('h3')
	pforRecipeImg3.textContent = "Dinner"
	pforRecipeImg3.classList.add('text-center')
	const recipeCardBody5 = document.createElement('div')
	recipeCardBody5.classList.add('card-body', 'card-bg-color', 'mt-2')
	const divRowSix = document.createElement('div')
	divRowSix.classList.add("row", "justify-content-center")
	const imgOne = document.createElement('img')
	imgOne.classList.add('card-img-top', 'top-shadow', 'lg-col-7')
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
	buttonNutrition.classList.add("hidden")
	buttonHome.classList.add("hidden")
	main.classList.remove('d-flex')
	imgDiv.innerHTML = " "
	h3Choose.innerHTML = " "
	hereIsRecipe.innerHTML = " "
	hereIsRecipe.classList.remove('shadow')
	hereIsRecipe.innerText = "Choose Your Recipe"
	newRecipe.classList.add('hidden')
	imgDiv.innerHTML = " "
	imgDiv.classList.remove('card')

	imgContainer.appendChild(imgRow)
	imgRow.appendChild(divRowOne)
	divRowOne.appendChild(imgOne)
	divRowOne.appendChild(recipeCardBody1)
	recipeCardBody1.appendChild(pforRecipeImg1)
	imgRow.appendChild(divRowTwo)
	imgRow.appendChild(divRowThree)
	divRowThree.appendChild(imgTwo)
	divRowThree.appendChild(recipeCardBody3)
	recipeCardBody3.appendChild(pforRecipeImg2)
	imgRow.appendChild(divRowFour)
	imgRow.appendChild(divRowFive)
	divRowFive.appendChild(imgThree)
	divRowFive.appendChild(recipeCardBody5)
	recipeCardBody5.appendChild(pforRecipeImg3)
	imgRow.appendChild(divRowSix)
}

renderHomePage()

function hideContentForLoading(){
	spinner.classList.remove('invisible', 'modal-b-reveal')
	loading.classList.remove('hidden', 'modal-b-reveal')
	container.classList.add('hidden')
	header.classList.add('hidden')
	choose.classList.add('hidden')
	imgDiv.classList.add('hidden')
}

function revealContentAfterLoading(){
	container.classList.remove('hidden')
	header.classList.remove('hidden')
	choose.classList.remove('hidden')
	imgDiv.classList.remove('hidden', 'modal-b-reveal')
	loading.classList.add('hidden')
	spinner.classList.remove('invisible')
	spinner.classList.add('modal-b-reveal', 'invisible')
}


function renderRecipeIngredientPage(data) {
	main.innerHTML = " "
	imgDiv.innerHTML = " "
	imgDiv1.innerHTML = " "
	imgContainer.innerHTML = " "
	ulForRecipeIngredientList.innerHTML = " "
	extractRecipes = data
	if (extractRecipes.recipes[0].analyzedInstructions[0] === undefined) {
		noRecipe()
	}
	arrayInstructions = extractRecipes.recipes[0].analyzedInstructions[0].steps
	arrayIngredients = extractRecipes.recipes[0].extendedIngredients
	for (let i = 0; i < arrayIngredients.length; i++) {
		pageIngredients.push(arrayIngredients[i].name)
	}
	for (let i = 0; i < arrayInstructions.length; i++) {
			pageInstructions.push(arrayInstructions[i].step)
	}

	const ul1 = document.createElement('ul')
	ul1.id = "list"
	ul1.innerText = " "
	if (arrayInstructions[0].step === "Go to my blog for full instructions: http://gourmandelle.com/chocolate-chip-coconut-muffins/") {
		let a = document.createElement('a')
		a.textContent = "Go to blog for full instructions"
		a.href = "http://gourmandelle.com/chocolate-chip-coconut-muffins/"
		ulForRecipeIngredientList.appendChild(a)
  }
	for (let i = 0; i < pageInstructions.length; i++) {
			const li = document.createElement('li')
			li.textContent = pageInstructions[i]
			li.classList.add('list-group-item')
			ulForRecipeIngredientList.appendChild(li)
		}

	const h2R = document.createElement('h2')
	h2R.classList.add('text-center')
	main.classList.remove('flex')
	main.classList.add('d-flex')
	h3R.classList.add('pt-2')
	h2I.textContent = " "
	h2I.classList.add('w-75', 'flex', 'justify-content-center', 'mb-0', 'pb-1')
	h2R.textContent = "Here are your ingredients"
	h2R.classList.add('pt-1', 'pb-2', 'card-bg-color')
	ulForRecipeIngredientList.classList.add('list-group', 'shadow', 'pt-2')
	ulForRecipeIngredientList.appendChild(h2R)

	for (let i = 0; i < pageIngredients.length; i++) {
		const li = document.createElement('li')
		li.textContent = pageIngredients[i]
		li.classList.add('list-group-item', 'text-center', 'w-100')
		ulForRecipeIngredientList.appendChild(li)
	}

	const imgDivContainer = document.getElementById("img-div-container")
	const image = document.createElement('img')
	image.src = extractRecipes.recipes[0].image
	image.alt = "Image of Recipe"
	image.classList.add("card-img-top", "mb-2", 'top-shadow', 'card-bg-color', 'w-100')
	imgDiv.classList.add('flex', 'col-lg-4', 'row', 'justify-content-center')
	const recipeCardBody = document.createElement('div')
	const h3 = document.createElement('h3')
	h3.classList.add('card-title', 'text-center')
	h3.textContent = extractRecipes.recipes[0].title
	recipeCardBody.classList.add('card-body', 'card-bg-color', 'm-0')
	nutritionURL += extractRecipes.recipes[0].title
	if (nutritionURL.indexOf('&')) {
		originalString = extractRecipes.recipes[0].title
		string1 = originalString.replace('&', ' ')
		string2 = string1.replace('-', ' ')
		string3 = string2.replace(' - ', '')
		string4 = string3.replace('/', ' ')
		string5 = string4.replace('/', ' ')
		string6 = string5.replace(',', '')
		nutritionURL = `https://trackapi.nutritionix.com/v2/search/instant?query=${string6}`
	}

	spinner.classList.add('invisible')
	container.classList.remove('oops-height')
	imgDiv.classList.remove('hidden')
	pageIngredients = []
	pageInstructions = []

	buttonHome.classList.remove("hidden")
	buttonNutrition.classList.remove("hidden")
	newRecipe.classList.remove("hidden")
	header.scrollIntoView();
	imgDiv1.classList.add('card')

	imgDivContainer.appendChild(imgDiv)
	imgDiv.appendChild(imgDiv1)
	imgDiv1.appendChild(image)
	imgDiv1.appendChild(recipeCardBody)
	imgDiv1.appendChild(ulForRecipeIngredientList)
	recipeCardBody.appendChild(h3)
	h1.classList.remove('d-flex')
	h1.classList.remove('oops-height')
	revealContentAfterLoading()
}

function getExtractedRandomBreakfastRecipes() {
	hideContentForLoading()
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
			stop()
		}
	})
}

function getExtractedRandomLunchRecipes() {
	hideContentForLoading()
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
			stop()
		}
	})
}

function getExtractedRandomDinnerRecipes(event) {
	hideContentForLoading()
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
			stop()
		}
	})
}

function getNewRecipe(event) {
	container.classList.remove('oops-height')
	h1.classList.add('hidden')
	header.classList.remove('hidden')
	choose.classList.remove('hidden')
	imgDiv.classList.remove('hidden')
}

function getNutrition(data) {
	hideContentForLoading()
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
			stop()
			getNix()
		}
	})
}


function getNix(data) {
	hideContentForLoading()
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

	error: function(data) {
		hideContentForLoading()
		if (data.status === 404) {
			modalUl.innerHTML = " "
			modalUl.classList.add('d-flex', 'flex-column')
			modalUl.classList.add('list-group')
			const li1 = document.createElement('li')
			li1.classList.add('list-group-item', 'padding')
			li1.textContent = `Serving Qty: ${nixData['serving_gty']}`
			const li2 = document.createElement('li')
			li2.classList.add('list-group-item', 'padding')
			li2.textContent = `Calories: ${nixData['calories']}`
			const li3 = document.createElement('li')
			li3.classList.add('list-group-item', 'padding')
			li3.textContent = `Total Fat ${nixData['total-fat']}`
			const li4 = document.createElement('li')
			li4.classList.add('list-group-item', 'padding')
			li4.textContent = `Total Carbs: ${nixData['total-carbs']}`
			const li5 = document.createElement('li')
			li5.classList.add('list-group-item', 'padding')
			li5.textContent = `Protein: ${nixData['protein']}`
			const li6 = document.createElement('li')
			li6.classList.add('list-group-item', 'padding')
			li6.textContent = `Sugar: ${nixData['sugars']}`
			const li7 = document.createElement('li')
			li7.classList.add('list-group-item', 'padding')
			li7.textContent = `Sodium: ${nixData['sodium']}`
			const li8 = document.createElement('li')
			li8.classList.add('list-group-item', 'padding')
			li8.textContent = `Dietary Fiber: ${nixData['dietary-fiber']}`
			modalUl.appendChild(li1)
			modalUl.appendChild(li2)
			modalUl.appendChild(li3)
			modalUl.appendChild(li4)
			modalUl.appendChild(li5)
			modalUl.appendChild(li6)
			modalUl.appendChild(li7)
			modalUl.appendChild(li8)
			modalContent.appendChild(modalUl)
			modalOverlay.classList.remove('modal-b-reveal')
			modalButton.classList.remove('hidden')
			modalContent.classList.remove('hidden')
			revealContentAfterLoading()
		}
		stop()
	},

	success: function (data) {
		nixData = data.foods
		modalUl.classList.add('d-flex', 'flex-column')
		modalUl.classList.add('list-group')
		for (let i = 0; i < nixData.length; i++) {
			let serving = nixData[i].serving_qty
			nixData['serving_gty'] = serving
			const li1 = document.createElement('li')
			li1.classList.add('list-group-item', 'padding')
			li1.textContent = `Serving Qty: ${serving}`
			let calories = nixData[i].nf_calories
			nixData['calories'] = calories
			const li2 = document.createElement('li')
			li2.classList.add('list-group-item', 'padding')
			li2.textContent = `Calories: ${calories}`
			let totalFat = nixData[i].nf_total_fat
			nixData['total-fat'] = totalFat
			const li3 = document.createElement('li')
			li3.classList.add('list-group-item', 'padding')
			li3.textContent = `Total Fat: ${totalFat}`
			let totalCarbs = nixData[i].nf_total_carbohydrate
			nixData['total-carbs'] = totalCarbs
			const li4 = document.createElement('li')
			li4.classList.add('list-group-item', 'padding')
			li4.textContent = `Total Carbohydrates: ${totalCarbs}`
			let protein = nixData[i].nf_protein
			nixData['protein'] = protein
			const li5 = document.createElement('li')
			li5.classList.add('list-group-item', 'padding')
			li5.textContent = `Protein: ${protein}`
			let sugars = nixData[i].nf_sugars
			nixData['sugars'] = sugars
			const li6 = document.createElement('li')
			li6.classList.add('list-group-item', 'padding')
			li6.textContent = `Sugars: ${sugars}`
			let sodium = nixData[i].nf_sodium
			nixData['sodium'] = sodium
			const li7 = document.createElement('li')
			li7.classList.add('list-group-item', 'padding')
			li7.textContent = `Sodium: ${sodium}`
			let dietaryFiber = nixData[i].nf_dietary_fiber
			nixData['dietary-fiber'] = dietaryFiber
			const li8 = document.createElement('li')
			li8.classList.add('list-group-item', 'padding')
			li8.textContent = `Dietary Fiber: ${dietaryFiber}`
			modalUl.appendChild(li1)
			modalUl.appendChild(li2)
			modalUl.appendChild(li3)
			modalUl.appendChild(li4)
			modalUl.appendChild(li5)
			modalUl.appendChild(li6)
			modalUl.appendChild(li7)
			modalUl.appendChild(li8)
			modalContent.appendChild(modalUl)
			modalOverlay.classList.remove('modal-b-reveal')
			modalButton.classList.remove('hidden')
			modalContent.classList.remove('hidden')
			revealContentAfterLoading()
		}
		stop()
	}
  })
}

modalButton.addEventListener('click', function () {
	modalContent.classList.add('hidden')
	modalOverlay.classList.add('hidden')
	modalButton.classList.add('hidden')
	modalOverlay.classList.add('modal-b-reveal')
	modalUl.innerHTML = " "
});

function noRecipe() {
	container.classList.add('hidden')
	h1.classList.remove('hidden')
	h1.classList.add('d-flex')
	h1.classList.add('oops-height')
	container.classList.add('oops-height')
	header.classList.add('hidden')
	choose.classList.add('hidden')
	imgDiv.classList.add('hidden')
	header.classList.remove('hidden')
	noRecipeButton.addEventListener('click', handleEvent)
}

function spin() {
	if(spinnerCounter > 0) {
		stop()
	} else {
	spinner.classList.remove('invisible')
	}
	spinnerCounter++
}
function stop() {
	spinner.classList.add('invisible')
	clearInterval(timeToSpin)
}


function handleEvent(event) {
	container.classList.remove('hidden')
	h1.classList.add('hidden')
	if (event.target.id !== "new-recipe" && event.target.id !== "no-recipe" && event.target.id !== "button-nutrition" && event.target.id !== "button-home" && event.target.id !== "img1" && event.target.id !== "img2" && event.target.id !== "img3") {
		return
	}
	if (event.target.id === "new-recipe" || event.target.id === "buttonNutrition" || event.target.id === "buttonHome" || event.target.id === "no-recipe") {
		newRecipe.disabled = true
		setTimeout(function (){newRecipe.disabled = false;}, 1000);
		imgClick = 0
	}
	if (event.path[0].id === "button-home") {
		renderHomePage()
		imgClick = 0
		return
	}
	if (event.path[0].id === "button-nutrition") {
		getNutrition()
		imgClick = 0
		return
	}
	if (imgClick > 0) {
		return
	}
	if (event.target.id === "img1") {
		currentImg = "img1"
	}
	if (event.target.id === "img2") {
		currentImg = "img2"
	}
	if (event.target.id === "img3") {
		currentImg = "img3"
	} else if (event.target.id === "img1" && currentImg === "img1" || event.target.id === "img2" && currentImg === "img1" || event.target.id === "img3" && currentImg === "img1") {
		imgClick++
		getExtractedRandomBreakfastRecipes()
	} else if (event.target.id === "new-recipe" && currentImg === "img1" || event.target.id === "no-recipe" && currentImg === "img1") {
		getExtractedRandomBreakfastRecipes()
	} if (event.target.id === "img2" && currentImg === "img2" || event.target.id === "img1" && currentImg === "img2" || event.target.id === "img3" && currentImg === "img2") {
		imgClick++
		getExtractedRandomLunchRecipes()
	} else if (event.target.id === "new-recipe" && currentImg === "img2" || event.target.id === "no-recipe" && currentImg === "img2") {
		getExtractedRandomLunchRecipes()
	} if (event.target.id === "img3" && currentImg === "img3" || event.target.id === "img2" && currentImg === "img3" || event.target.id === "img1" && currentImg === "img3") {
		imgClick++
		getExtractedRandomDinnerRecipes()
	} else if (event.target.id === "new-recipe" && currentImg === "img3" || event.target.id === "no-recipe" && currentImg === "img3") {
		getExtractedRandomDinnerRecipes()
	}
}
