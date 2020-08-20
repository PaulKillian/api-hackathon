class ChickenIngredientList {
	constructor() {
		this.getChickenFajitaIngredients = this.getChickenFajitaIngredients.bind(this)
		this.getChickenFajitaIngredientsSuccess = this.getChickenFajitaIngredientsSuccess.bind(this)
		this.getAirFryerIngredients = this.getAirFryerIngredients.bind(this)
		this.getAirFryerIngredientsSuccess = this.getAirFryerIngredientsSuccess.bind(this)
		this.getSweetSourIngredients = this.getSweetSourIngredients.bind.bind(this)
		this.getSweetSourIngredientsSuccess = this.getSweetSourIngredientsSuccess.bind(this)

		const firstImg = document.getElementById('firstImage')
		const secondImg = document.getElementById('secondImage')
		const thirdImg = document.getElementById('thirdImage')
		firstImg.addEventListener('click', this.getChickenFajitaIngredients)
		secondImg.addEventListener('click', this.getAirFryerIngredients)
		thirdImg.addEventListener('click', this.getSweetSourIngredients)
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
}
