class FishIngredientList {
	constructor() {
		this.getEndlessShrimpIngredients = this.getEndlessShrimpIngredients.bind(this)
		this.getEndlessShrimpIngredientsSuccess = this.getEndlessShrimpIngredientsSuccess.bind(this)
		this.getCajunCatfishIngredients = this.getCajunCatfishIngredients.bind(this)
		this.getCajunCatfishIngredientsSuccess = this.getCajunCatfishIngredients.bind(this)
		this.getGrilledMainIngredients = this.getGrilledMainIngredients.bind(this)
		this.getGrilledMainIngredientsSuccess = this.getGrilledMainIngredientsSuccess.bind(this)

		const firstImg = document.getElementById('firstImage')
		const secondImg = document.getElementById('secondImage')
		const thirdImg = document.getElementById('thirdImage')
		firstImg.addEventListener('click', this.getEndlessShrimpIngredients)
		secondImg.addEventListener('click', this.getCajunCatfishIngredients)
		thirdImg.addEventListener('click', this.getGrilledMainIngredients)
	}

	getEndlessShrimpIngredients(event) {
		$.ajax({
			type: "GET",
			url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
			contentType: "application/json",
			dataType: "json",

			error: error => console.log(error),
			success: data => this.getEndlessShrimpIngredientsSuccess(data)
		})
	}

	getEndlessShrimpIngredientsSuccess(data) {
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
}
