class BeefIngredientList {
	constructor() {
		this.getFrenchDipIngredients = this.getFrenchDipIngredients.bind(this)
		this.getFrenchDipIngredientsSuccess = this.getFrenchDipIngredientsSuccess.bind(this)
		this.getTacoIngredients = this.getTacoIngredients.bind(this)
		this.getTacoIngredientsSuccess = this.getTacoIngredientsSuccess.bind(this)
		this.getBarbacoaIngredients = this.getBarbacoaIngredients.bind(this)
		this.getBarbacoaIngredientsSuccess = this.getBarbacoaIngredientsSuccess.bind(this)

		const firstImg = document.getElementById('firstImage')
		const secondImg = document.getElementById('secondImage')
		const thirdImg = document.getElementById('thirdImage')
		firstImg.addEventListener('click', this.getFrenchDipIngredients)
		secondImg.addEventListener('click', this.getTacoIngredients)
		thirdImg.addEventListener('click', this.getBarbacoaIngredients)
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
	}
}
