import { renderingDifficulty } from "./components/difficulty-component.js";
import { renderingPresetsCards } from "./components/presets-cards-component.js";

const mainElement = document.getElementById("main");
const globalData = {
    difficulty: "",
    cards: "",
}

renderingDifficulty();

function checkButtonDifficulty() {
    const chooseButtonElements = document.querySelectorAll(".difficulty__chooseButton");
    const startButtonElement = document.querySelector(".difficulty__buttonStart");

    for (const chooseButtonElement of chooseButtonElements) {
        chooseButtonElement.addEventListener("click", () => {
            for (const chooseButtonElement of chooseButtonElements) {
                chooseButtonElement.classList.remove("-button-active")
            }
            globalData.difficulty = chooseButtonElement.textContent;
            chooseButtonElement.classList.add("-button-active")
            switch (globalData.difficulty) {
                case "1":
                    globalData.difficulty = "easy"
                    globalData.cards = "6 карточек (3 пары)";
                    break;
                case "2":
                    globalData.difficulty = "average"
                    globalData.cards = "12 карточек (6 пар)";
                    break;
                case "3":
                    globalData.difficulty = "hard"
                    globalData.cards = "18 карточек (9 пар)";
                    break;
                default:
                    break;
            }
        })
    }

    startButtonElement.addEventListener("click", () => {
        if (!globalData.difficulty) {
            alert("С начало выберете сложность");
            return;
        }
        renderingPresetsCards();
    })
}

export { mainElement, globalData, checkButtonDifficulty }