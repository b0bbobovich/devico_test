"use strict";

const body = document.querySelector("body");
body.style.margin = "50px"

const gridContainer = document.createElement("div");
gridContainer.style.height = "300px";
gridContainer.style.display = "grid";
gridContainer.style.gridTemplate = '"a b c" 1fr "a d d" 4fr "a e f" 1fr / 2fr 2fr 2fr';
body.append(gridContainer);

const gridAreas = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const gridBlock = document.createElement("div");
    gridBlock.style.background = "#" + randomColor;
    gridBlock.style.display = "flex";
    gridBlock.style.gridArea = `${gridAreas[i]}`;
    gridBlock.dataset.clickCount = 0;
    gridBlock.onclick = (event) => {
        gridBlock.dataset.clickCount++;
        counter.innerText = gridBlock.dataset.clickCount;
    };

    const counter = document.createElement("span");
    counter.innerText = gridBlock.dataset.clickCount;
    counter.style.margin = "auto";

    gridBlock.append(counter);
    gridContainer.append(gridBlock);
};

