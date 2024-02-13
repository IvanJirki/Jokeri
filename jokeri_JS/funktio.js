document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    const table = document.querySelector("table");
    const p = document.querySelector("p");

    let jokerCount = 0;

    button.addEventListener("click", function() {
        addRow();
        jokerCount++;
        p.textContent = `Joker rows generated: ${jokerCount}`;
    });

    function addRow() {
        const newRow = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            const newCell = document.createElement("td");
            const randomNumber = Math.floor(Math.random() * 10);
            newCell.textContent = randomNumber;
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }
});
