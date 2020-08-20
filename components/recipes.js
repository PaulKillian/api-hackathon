class Recipes {
	constructor() {
		this.applyBeefRecipes = this.applyBeefRecipes.bind(this)
		this.getBeefRecipesSuccess = this.getBeefRecipesSuccess.bind(this)
		this.applyChickenRecipes = this.applyChickenRecipes.bind(this)
		this.getChickenRecipesSuccess = this.getChickenRecipesSuccess.bind(this)
		this.applyFishRecipes = this.applyFishRecipes.bind(this)
		this.getFishRecipesSuccess = this.getFishRecipesSuccess.bind(this)
		imgOne.addEventListener('click', this.applyBeefRecipes)
		imgTwo.addEventListener('click', this.applyChickenRecipes)
		imgThree.addEventListener('click', this.applyFishRecipes)
	}

	buildHomepage() {
		const divContainer = document.createElement('div')
		divContainer.classList.add("container", "h-100")
		const divInner = document.createElement('div')
		divInner.classList.add("container", 'shadow', 'border', 'border-primary', "rounded-lg",)
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
		imgOne.classList.add('img-thumbnail', 'w-50', 'mt-3', "rounded-lg", 'shadow')
		imgOne.src = 'https://www.thespruceeats.com/thmb/APa5zYrExVw4fDRwChpwQGQuNls=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg'
		const imgTwo = document.createElement('img')
		imgTwo.classList.add('img-thumbnail', 'w-50')
		imgTwo.classList.add('shadow')
		imgTwo.src = 'https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg'
		const imgThree = document.createElement('img')
		imgThree.classList.add('img-thumbnail', 'w-50')
		imgThree.classList.add('shadow')
		imgThree.src = 'https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-PanFriedCodWithGiantBeanChard_28546-acc2f54.jpg?webp=true&quality=90&crop=20px%2C3414px%2C5444px%2C2342px&resize=556%2C236'
		const h2One = document.createElement('h3')
		h2One.textContent = "Beef"
		const h2Two = document.createElement('h3')
		h2Two.textContent = "Chicken"
		const h2Three = document.createElement('h3')
		h2Three.classList.add("mb-3")
		h2Three.textContent = "Fish"

		main.appendChild(divContainer)
		divContainer.appendChild(divInner)
		divInner.appendChild(divRowOne)
		divRowOne.appendChild(imgOne)
		divInner.appendChild(divRowTwo)
		divRowTwo.appendChild(h2One)
		divInner.appendChild(divRowThree)
		divRowThree.appendChild(imgTwo)
		divInner.appendChild(divRowFour)
		divRowFour.appendChild(h2Two)
		divInner.appendChild(divRowFive)
		divRowFive.appendChild(imgThree)
		divInner.appendChild(divRowSix)
		divRowSix.appendChild(h2Three)

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
		const newFishIngredientList = new FishIngredientList()
	}
}
