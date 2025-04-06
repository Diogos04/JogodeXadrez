document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll("#chessboard td");

    let selectedPiece = null;

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (selectedPiece) {
                cell.innerHTML = selectedPiece;
                selectedPiece = null;
            } else if (cell.innerHTML.trim() !== "") {
                selectedPiece = cell.innerHTML;
                cell.innerHTML = "";
            }
        });
    });
});
