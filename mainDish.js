class MainDish {
	constructor(iconGrid, beefRecipeCallBack) {
		this.iconGrid = iconGrid
		this.beefRecipesCallBack = beefRecipesCallBack
	}


	// addImages(image) {
	// 	const main = this.iconGrid.querySelector("main")
	// 	for(let i = 0; i < image.length; i++) {
	// 		let icons = this.renderIcondGrid(image[i])
	// 		main.appendChild(icons)
	// 	}
	// 	const textArray = ["Beef", "Chicken", "Fish"]
	// 	for (let i = 0; i < image.length; i++) {
	// 		const h2 = document.createElement('h2')
	// 		h2.textContent = textArray[i]
	// 		divRow.appendChild(h2)
	// 	}
	// }

	// renderIcondGrid() {
	// 	const main = this.iconGrid.querySelector("main")
	// 	const divContainer = document.createElement('div')
	// 	const divRow = document.createElement('div')
	// 	const img = document.createElement('img')
	// 	main.appendChild(divContainer)
	// 	main.appendChild(divRow)
	// 	divRow.appendChild(img)
	// 	const imageArray = ["images/images.jpg", "images/roasted-chicken-1.jpg", "images/unamed.jpg"]
	// 	const textArray = ["Beef", "Chicken", "Fish"]
	// 	for (let i = 0; i < textArray.length; i++) {
	// 		const h2 = document.createElement('h2')
	// 		h2.textContent = textArray[i]
	// 		divRow.appendChild(h2)
	// 	}
	// }

		applBeefRecipes(event) {
			this.beefRecipesCallBack()
		}
}
