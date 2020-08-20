//CHOOSE YOUR MAIN DISH

const main = document.querySelector('main')
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


//CHOOSE YOUR RECIPE - WHEN A MAIN DISH IS CLICK THE MAIN HTML IS DESTOYED
// const secondPage = document.getElementById('secondPage')
// const divContainer = document.createElement('div')
// divContainer.classList.add("container")
// const divRowOne = document.createElement('div')
// divRowOne.classList.add("row", "justify-content-center")
// const divRowTwo = document.createElement('div')
// divRowTwo.classList.add("row", "justify-content-center")
// const divRowThree = document.createElement('div')
// divRowThree.classList.add("row", "justify-content-center")
// const divRowFour = document.createElement('div')
// divRowFour.classList.add("row", "justify-content-center")
// const divRowFive = document.createElement('div')
// divRowFive.classList.add("row", "justify-content-center")
// const divRowSix = document.createElement('div')
// divRowSix.classList.add("row", "justify-content-center")
// const imgOne = document.createElement('img')
// imgOne.classList.add('img-thumbnail', 'w-75')
// imgOne.src = 'https://www.thespruceeats.com/thmb/APa5zYrExVw4fDRwChpwQGQuNls=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg'
// const imgTwo = document.createElement('img')
// imgTwo.classList.add('img-thumbnail', 'w-75')
// imgTwo.src = 'https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg'
// const imgThree = document.createElement('img')
// imgThree.classList.add('img-thumbnail', 'w-75')
// imgThree.src = 'https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-PanFriedCodWithGiantBeanChard_28546-acc2f54.jpg?webp=true&quality=90&crop=20px%2C3414px%2C5444px%2C2342px&resize=556%2C236'
// const h2One = document.createElement('h2')
// h2One.textContent = "Beef"
// const h2Two = document.createElement('h2')
// h2Two.textContent = "Chicken"
// const h2Three = document.createElement('h2')
// h2Three.textContent = "Fish"

// secondPage.appendChild(divContainer)
// secondPage.appendChild(divRowOne)
// divRowOne.appendChild(imgOne)
// secondPage.appendChild(divRowTwo)
// divRowTwo.appendChild(h2One)
// secondPage.appendChild(divRowThree)
// divRowThree.appendChild(imgTwo)
// secondPage.appendChild(divRowFour)
// divRowFour.appendChild(h2Two)
// secondPage.appendChild(divRowFive)
// divRowFive.appendChild(imgThree)
// secondPage.appendChild(divRowSix)
// divRowSix.appendChild(h2Three)


// const newMainImages = new MainImages()

const newApp = new App()
newApp.start()
