import { renderingDifficulty } from "./components/difficulty-component.js";
import { renderingPresetsCards } from "./components/presets-cards-component.js";

const mainElement = document.getElementById("main");
let difficultySelection;

renderingDifficulty();

function checkButtonDifficulty() {
    const chooseButtonElements = document.querySelectorAll(".difficulty__chooseButton");
    const startButtonElement = document.querySelector(".difficulty__buttonStart");

    for (const chooseButtonElement of chooseButtonElements) {
        chooseButtonElement.addEventListener("click", () => {
            difficultySelection = chooseButtonElement.textContent;
        })
    }

    startButtonElement.addEventListener("click", () => {
        if (!difficultySelection) {
            alert("С начало выберете сложность");
            return;
        }
        renderingPresetsCards(document.querySelector(".difficulty"), difficultySelection);
    })
}

export { mainElement, checkButtonDifficulty }