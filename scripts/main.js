const slider = document.querySelector('.slider')
const proyectCards = document.querySelectorAll(".proyect")
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let currentIndex = 0
// Colocar limites del slide segun la cantidad de elementos
let leftLimit = -2
let rightLimit = 2

function moveToLeft() {
    currentIndex++

    if (currentIndex > rightLimit) {
        currentIndex = 0
    }

    slider.style.transform = `translateX(${currentIndex*20}%)`
    slider.style.transition = "transform .7s ease-in-out"
}

function moveToRight() {
    currentIndex--

    if (currentIndex < leftLimit) {
        currentIndex = 0
    }

    slider.style.transform = `translateX(${currentIndex*20}%)`
    slider.style.transition = "transform .7s ease-in-out"
}

prevBtn.addEventListener("click", () => {
    moveToLeft()
})

nextBtn.addEventListener("click", () => {
    moveToRight()
})