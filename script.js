document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll("#chessboard td");
    let selectedPiece = null;
    let selectedCell = null;

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (selectedPiece) {
                selectedCell.classList.remove("selected");
                cell.innerHTML = selectedPiece;
                selectedPiece = null;
                selectedCell = null;
            } else if (cell.innerHTML.trim() !== "") {
                selectedPiece = cell.innerHTML;
                selectedCell = cell;
                cell.innerHTML = "";
                cell.classList.add("selected");
            }
        });
    });
});

