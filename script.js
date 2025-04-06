document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll("#chessboard td");
    let selectedPiece = null;
    let selectedCell = null;

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (selectedPiece) {
                selectedCell.classList.remove("selected"); // Remove o destaque da célula anterior
                cell.innerHTML = selectedPiece; // Move a peça para a nova célula
                selectedPiece = null;
                selectedCell = null;
            } else if (cell.innerHTML.trim() !== "") {
                selectedPiece = cell.innerHTML;
                selectedCell = cell;
                cell.innerHTML = "";
                cell.classList.add("selected"); // Destaca a célula selecionada
            }
        });
    });
});

