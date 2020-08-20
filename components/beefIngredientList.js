class BeefIngredientList {
	constructor(chooseSection, listH1, headerElement) {
		this.chooseSection = chooseSection
		this.listH1 = listH1
		this.headerElement = headerElement
		// this.getFrenchDipIngredients = this.getFrenchDipIngredients.bind(this)
		// this.getFrenchDipIngredientsSuccess = this.getFrenchDipIngredientsSuccess.bind(this)
		// this.getTacoIngredients = this.getTacoIngredients.bind(this)
		// this.getTacoIngredientsSuccess = this.getTacoIngredientsSuccess.bind(this)
		// this.getBarbacoaIngredients = this.getBarbacoaIngredients.bind(this)
		// this.getBarbacoaIngredientsSuccess = this.getBarbacoaIngredientsSuccess.bind(this)
		// this.getNutrition = this.getNutrition.bind(this)
		// this.getNutritionSuccess = this.getNutritionSuccess.bind(this)

		// const firstImg = document.getElementById('firstImage')
		// const secondImg = document.getElementById('secondImage')
		// const thirdImg = document.getElementById('thirdImage')
		// const button = document.querySelector('button')
		// firstImg.addEventListener('click', this.getFrenchDipIngredients)
		// secondImg.addEventListener('click', this.getTacoIngredients)
		// thirdImg.addEventListener('click', this.getBarbacoaIngredients)
		// button.addEventListener('click', this.backToHomePage)
	}

	ingAndNut() {
		const header = document.getElementById('header')
		const leftDiv = document.createElement('div')
		leftDiv.classList.add('col', 'border-right')
		const lh1 = document.getElementById('headerh2')
		lh1.classList.add('text-center', 'cursor')
		const rightDiv = document.createElement('div')
		rightDiv.classList.add('col')
		const rh1 = document.createElement('h1')
		rh1.classList.add('text-center', 'cursor')
		rh1.textContent = "Nutrition"

		header.appendChild(leftDiv)
		leftDiv.appendChild(lh1)
		header.appendChild(rightDiv)
		rightDiv.appendChild(rh1)

		rh1.addEventListener('click', this.getNutrition)
	}

	// getFrenchDipIngredients(event) {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: data => this.getFrenchDipIngredientsSuccess(data)
	// 	})
	// }

	// getFrenchDipIngredientsSuccess(data) {
	// 	const h2b = document.querySelector('h2')
	// 	h2b.textContent = "Here Are Your Ingredients!"
	// 	const mainb = document.querySelector('main')
	// 	mainb.innerHTML = " "
	// 	const UIngredients = data[1].usedIngredients
	// 	const MIngredients = data[1].missedIngredients
	// 	const ul = document.createElement('ul')
	// 	mainb.appendChild(ul)
	// 	for (let i = 0; i < UIngredients.length; i++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = UIngredients[i].original
	// 		ul.appendChild(li)
	// 	}
	// 	for (let x = 0; x < MIngredients.length; x++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = MIngredients[x].original
	// 		ul.appendChild(li)
	// 	}
	// 	this.ingAndNut()
	// }
	// 	// const nutrientIngUI = data[1].usedIngredients
	// 	// const nutrientIngMI = data[1].missedIngredients

	// 	// for (let ui = 0; ui < nutrientIngUI.length; ui++) {
	// 	// 	const nNameIngUI = nutrientIngUI[ui].name
	// 	// }
	// 	// for (let mi = 0; mi < nutrientIngMI.length; mi++) {
	// 	// 	const nNameIngMI = nutrientIngMI[mi].name
	// 	// }
  // getNutrition() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://trackapi.nutritionix.com/v2/search/instant?query=french dip",
	// 		contentType: "application/json",
	// 		dataType: "json",
	// 		headers: {
	// 			"x-app-id": "f21054df",
	// 			"x-app-key": "942d221bb8085822d01d5dbf709b8716"
	// 		},

	// 		error: error => console.log(error),
	// 		success: data => this.getNutritionSuccess(data)
	// 	})
	// }

	// getNutritionSuccess(data) {
	// 	const section = document.getElementById('choose')
	// 	section.innerText = " "
	// 	const calories = data.branded[6].nf_calories
	// 	section.textContent = `Calories: ${calories}`
	// 	const main = document.querySelector('main')
	// 	main.innerHTML = " "
	// 	const button = document.createElement('button')
	// 	const newNutriton = new Nutrition()
	// }

	// getTacoIngredients(event) {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: data => this.getTacoIngredientsSuccess(data)
	// 	})
	// }

	// getTacoIngredientsSuccess(data) {
	// 	const h2b = document.querySelector('h2')
	// 	h2b.textContent = "Here Are Your Ingredients!"
	// 	const mainb = document.querySelector('main')
	// 	mainb.innerHTML = " "
	// 	const UIngredients = data[6].usedIngredients
	// 	const MIngredients = data[6].missedIngredients
	// 	const ul = document.createElement('ul')
	// 	mainb.appendChild(ul)
	// 	for (let i = 0; i < UIngredients.length; i++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = UIngredients[i].original
	// 		ul.appendChild(li)
	// 	}
	// 	for (let x = 0; x < MIngredients.length; x++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = MIngredients[x].original
	// 		ul.appendChild(li)
	// 	}
	// 	this.ingAndNut()
	// }

	// getBarbacoaIngredients(event) {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: data => this.getBarbacoaIngredientsSuccess(data)
	// 	})
	// }

	// getBarbacoaIngredientsSuccess(data) {
	// 	const h2b = document.querySelector('h2')
	// 	h2b.textContent = "Here Are Your Ingredients!"
	// 	const mainb = document.querySelector('main')
	// 	mainb.innerHTML = " "
	// 	const UIngredients = data[4].usedIngredients
	// 	const MIngredients = data[4].missedIngredients
	// 	const ul = document.createElement('ul')
	// 	mainb.appendChild(ul)
	// 	for (let i = 0; i < UIngredients.length; i++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = UIngredients[i].original
	// 		ul.appendChild(li)
	// 	}
	// 	for (let x = 0; x < MIngredients.length; x++) {
	// 		const li = document.createElement('li')
	// 		li.textContent = MIngredients[x].original
	// 		ul.appendChild(li)
	// 	}
	// 	this.ingAndNut()
	// }

	backToHomePage() {
		const mainb = document.querySelector('main')
		mainb.innerHTML = " "
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
		imgOne.src = 'https://www.thespruceeats.com/thmb/APa5zYrExVw4fDRwChpwQGQuNls=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg'
		const imgTwo = document.createElement('img')
		imgTwo.classList.add('img-thumbnail', 'w-50')
		imgTwo.src = 'https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg'
		const imgThree = document.createElement('img')
		imgThree.classList.add('img-thumbnail', 'w-50')
		imgThree.src = 'https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-PanFriedCodWithGiantBeanChard_28546-acc2f54.jpg?webp=true&quality=90&crop=20px%2C3414px%2C5444px%2C2342px&resize=556%2C236'
		const h2One = document.createElement('h3')
		h2One.textContent = "Beef"
		const h2Two = document.createElement('h3')
		h2Two.textContent = "Chicken"
		const h2Three = document.createElement('h3')
		h2Three.textContent = "Fish"

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
}
