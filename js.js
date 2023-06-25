const adjustGridSize = document.querySelector('.adjustGridSize');
adjustGridSize.addEventListener('click', () => {
    const rows = prompt("Please enter the number of rows (e.g., 64)");
    const columns = prompt("Please enter the number of columns (e.g., 64)");
    document.querySelector('.gridContainer').style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    document.querySelector('.gridContainer').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    
});



