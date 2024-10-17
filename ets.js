let grid = 30
let color = "black"
let isColor = false
let isShaded = false

const gridsize = document.querySelector("#gridsize")
gridsize.addEventListener("click", () => {
    grid = prompt("please give a number between 1 and 100", "30")
    if (grid > 100 || grid < 1) {
        grid = 30
    }
    const container = document.querySelector("#container")
    container.innerHTML = "" // Clear any existing grid

    createGrid(grid)
    isColor = false
    isShaded = false
    color = "black"
});

const eraser = document.getElementById("eraser")
eraser.addEventListener("click", () => {
    isColor = false
    isShaded = false
    color = "white"
});

const ranColors = document.getElementById("ranColors")
ranColors.addEventListener("click", () => {
    isColor = true
    isShaded = false
});

const newColor = document.getElementById("newColor")
newColor.addEventListener("input", (event) => {
    isColor = false
    isShaded = false
    color = event.target.value
});

const shade = document.getElementById("shade")
shade.addEventListener("click", () => {
    isShaded = true
    isColor = false
});

function colors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const content = document.createElement("div")
        content.style.cssText = "background: white"
        content.style.border = '.5px solid black'
        content.style.width = `calc(700px / ${size})`
        content.style.height = `calc(700px / ${size})`
        content.style.aspectRatio = "1/1"
        content.style.boxSizing = "border-box"
        content.addEventListener("mouseenter", (event) => {
            if (isShaded) {
                content.style.opacity = (parseFloat(content.style.opacity) || 0) + 0.1
            } else {
                content.style.opacity = 1
            }

            if (isColor) {
                color = colors()
            }

            content.style.backgroundColor = color
        })
        container.appendChild(content)  
    }
}

createGrid(grid)