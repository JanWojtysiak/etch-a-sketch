const container = document.querySelector('#container');
const range = document.querySelector("#size");
const value = document.querySelector("#value");


function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const gridSize = 700 / size;
        const grid = document.createElement('div');
        grid.classList.add("grid");
        grid.style.width = gridSize + "px";
        grid.style.height = gridSize + "px";
        grid.style.opacity = 1;
        container.appendChild(grid);
    } 
    return console.log(`Created ${size * size} elements with class grid`);
}
createGrid(20);
value.textContent = range.value;
range.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    container.innerHTML = "";
    createGrid(event.target.value);
})

container.addEventListener('mouseover', (event) => {
    let target = event.target;
    const randomRgb = () => Math.floor(Math.random()*256)
    const r = randomRgb();
    const g = randomRgb();
    const b = randomRgb();
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    target.style.opacity = parseFloat(target.style.opacity) - 0.1;
}
)
