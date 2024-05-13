let container = document.querySelector(".container")


function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 16 ; j++) {
        let col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);

        col.addEventListener("mouseover", () => {
            col.style.backgroundColor = getRandomColor();
        })
    }
}


