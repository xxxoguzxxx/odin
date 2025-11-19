const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');


function createGrid(squaresPerSide = 16) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = '#333';
        });
    }
}



resetButton.addEventListener('click', () => {

    let newSize = prompt('Grid Size: ');


    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else if (newSize !== null) {
        alert('1 İle 100 arasında bir sayı giriniz.');
    }
});

createGrid(16);
