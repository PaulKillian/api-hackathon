class App {
	constructor() {
		const newRecipes = new Recipes()
		// const newBarbacoaIngredients = new BarbacoaIngredientList()
		// this.getBeefImages = this.getBeefImages.bind(this)
		// this.getChickenImages = this.getChickenImages.bind(this)
		// this.getFishImages = this.getFishImages.bind(this)
	}

	// getBeefRecipes() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=beef=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: this.getBeefImagesSuccess
	// 	})
	// }
	// getBeefRecipesSuccess(data) {
	// 	console.log("success")
	// 		const recipe1 = data[0].id
	// 	  const recipe2 = data[1].id
	// 		const recipe3 = data[2].id
	// 		$.ajax({
	// 			type: "GET",
	// 			url: `https://api.spoonacular.com/${recipe1}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 			contentType: "application/json",
	// 			dataType: "json",

	// 			error: error => console.log(error),
	// 			success: this.getBeefImagesSuccess
	// 		})
	// 	}
	// 	getRecipeSuccess(recipes) {
	// 		const recipeInfo = nutrition.extendedIngredients
	// 		this.Recipes.applyBeefRecipes(data)
	// 	}

	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe2}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getBeefImagesSuccess
	// 		// })
	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe3}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getBeefImagesSuccess
	// 		// })

	// 	}

	// getChickenRecipes() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: this.getChickenRecipesSuccess
	// 	})
	// }
	// getChickenRecipesSuccess(data) {
	// 		const recipe1 = data[0].id
	// 		// const recipe2 = data[1].id
	// 		// const recipe3 = data[2].id
	// 		$.ajax({
	// 			type: "GET",
	// 			url: `https://api.spoonacular.com/${recipe1}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 			contentType: "application/json",
	// 			dataType: "json",

	// 			error: error => console.log(error),
	// 			success: this.getChickenSuccess
	// 		})
	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe2}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getChickenRecipesSuccess
	// 		// })
	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe3}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getChickenRecipesSuccess
	// 		// })
	// }


	// getFishRecipes() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish=1&apiKey=6f594a794c9e4c2b89c66311b4b9c999",
	// 		contentType: "application/json",
	// 		dataType: "json",

	// 		error: error => console.log(error),
	// 		success: this.getFishRecipesSuccess
	// 	})
	// }

	// getFishRecipesSuccess(data) {
	// 		const recipe1= data[0].id
	// 		// const recipe2= data[1].id
	// 		// const recipe3= data[2].id
	// 		$.ajax({
	// 			type: "GET",
	// 			url: `https://api.spoonacular.com/${recipe1}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 			contentType: "application/json",
	// 			dataType: "json",

	// 			error: error => console.log(error),
	// 			success: this.getFishRecipesSuccess
	// 		})
	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe2}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getFishRecipesSuccess
	// 		// })
	// 		// $.ajax({
	// 		// 	type: "GET",
	// 		// 	url: `https://api.spoonacular.com/${recipe3}/information?includeNutrition=false&apiKey=6f594a794c9e4c2b89c66311b4b9c999`,
	// 		// 	contentType: "application/json",
	// 		// 	dataType: "json",

	// 		// 	error: error => console.log(error),
	// 		// 	success: this.getFishRecipesSuccess
	// 		// })
	// }


	// getNutrition() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "https://trackapi.nutritionix.com/v2/search/instant?query=steak",
	// 		contentType: "application/json",
	// 		dataType: "json",
	// 		headers: {
	// 			"x-app-id": "f21054df",
	// 			"x-app-key": "942d221bb8085822d01d5dbf709b8716"
	// 		},

	// 		error: error => console.log(error),
	// 		success: this.getNutritionSuccess
	// 	})
	// }
	// 	getNutritionSuccess(nutrition) {
	// 		const nutritionInfo = nutrition.extendedIngredients
	// }

	start() {
		// this.getIngredients()
		// this.getNutrition()
	}
	// https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg
}
