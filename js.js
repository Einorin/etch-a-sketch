const adjustGridSize = document.querySelector('.adjustGridSize');
const gridContainer = document.querySelector('.gridContainer');
adjustGridSize.addEventListener('click', () => {
    const rowsAndColumns = prompt("Please enter the number of rows and columns (e.g., 'Maximum of 64')");
    document.querySelector('.gridContainer').style.gridTemplateRows = `repeat(${rowsAndColumns}, 1fr)`;
    document.querySelector('.gridContainer').style.gridTemplateColumns = `repeat(${rowsAndColumns}, 1fr)`;

    for (let i = 0; i < rowsAndColumns; i++){
        for (let j = 0; j < rowsAndColumns; j++){
            const gridItem = document.createElement('div');
            gridItem.className = gridItem
            gridContainer.appendChild(gridItem);
        }
    }

});

