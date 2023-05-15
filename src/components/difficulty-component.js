import { renderingPresetsCards } from "./presets-cards-component.js"

function renderingDifficulty() {
    window.globalThis.mainElement.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__title">Выбери сложность</h1>
<div class="difficulty__choose">
    <button class="difficulty__chooseButton">1</button>
    <button class="difficulty__chooseButton">2</button>
    <button class="difficulty__chooseButton">3</button>
</div>
<button class="difficulty__buttonStart">Старт</button>
</section>
`

checkButtonDifficulty();
}

function checkButtonDifficulty() {
    const chooseButtonElements = document.querySelectorAll(".difficulty__chooseButton");
    const startButtonElement = document.querySelector(".difficulty__buttonStart");

    for (const chooseButtonElement of chooseButtonElements) {
        chooseButtonElement.addEventListener("click", () => {
            for (const chooseButtonElement of chooseButtonElements) {
                chooseButtonElement.classList.remove("-button-active")
            }
            chooseButtonElement.classList.add("-button-active")
            switch (chooseButtonElement.textContent) {
                case "1":
                    window.globalThis.difficulty = "easy"
                    window.globalThis.cards = "6 карточек (3 пары)";
                    break;
                case "2":
                    window.globalThis.difficulty = "average"
                    window.globalThis.cards = "12 карточек (6 пар)";
                    break;
                case "3":
                    window.globalThis.difficulty = "hard"
                    window.globalThis.cards = "18 карточек (9 пар)";
                    break;
                default:
                    break;
            }
        })
    }

    startButtonElement.addEventListener("click", () => {
        if (!window.globalThis.difficulty) {
            alert("С начало выберете сложность");
            return;
        }
        renderingPresetsCards();
    })
}

export { renderingDifficulty }