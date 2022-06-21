// Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // Add listeners

    // Procedural
    // Create Pitch
    refreshThePage();

}

const refreshThePage = () => {
    renderPitch();
}

const renderPitch = () => {
    createPitchRow();
}

const createPitchRow = () => {
    for (let i = 0; i <= 25; i++) {

        const container = document.getElementById("pitch");
        const tr = document.createElement("tr");
        id = "row" + i;
        tr.id = id;
        container.appendChild(tr);
        if (i === 0) {
            createPitchTiles(i, "topEndZone endZone");
        }
        else if (i === 25) {
            createPitchTiles(i, "bottomEndZone endZone");
        } else {
            createPitchTiles(i, "normalArea");
        }
    }
}

function createPitchTiles(rowID, areaType) {
    for (let i = 0; i <= 15; i++) {
        const container = document.getElementById("row" + rowID);
        const td = document.createElement("td");
        td.className = areaType;
        td.id = "tile" + (i + rowID*16);
        container.appendChild(td);
    }
}