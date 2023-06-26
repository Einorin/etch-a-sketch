const adjustGridSize = document.querySelector('.adjustGridSize');
const gridContainer = document.querySelector('.gridContainer');
adjustGridSize.addEventListener('click', () => {
    let rowsAndColumns = prompt("Please enter the number of rows and columns (e.g., 'Maximum of 100')");
    if (rowsAndColumns > 100){
        rowsAndColumns = 100;
    }
    document.querySelector('.gridContainer').style.gridTemplateRows = `repeat(${rowsAndColumns}, 1fr)`;
    document.querySelector('.gridContainer').style.gridTemplateColumns = `repeat(${rowsAndColumns}, 1fr)`;

    for (let i = 0; i < rowsAndColumns; i++) {
        for (let j = 0; j < rowsAndColumns; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem'); 
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener('mouseover', () =>{
                gridItem.style.backgroundColor = blackShades();

            })

            const deleteInput = document.querySelector('.deleteInput');
            deleteInput.addEventListener('click', () =>{
                gridItem.style.backgroundColor = 'wheat'
            })
        }
    }

});

function blackShades(){
    let color = Math.floor(Math.random() * (5 - 1  + 1)) + 1;
    if (color === 1){
        return '#333333'
    }
    if (color === 2){
        return '#222222'
    }
    if (color === 3){
        return '#444444'
    }
    if (color === 4){
        return '#111111'
    }
}


