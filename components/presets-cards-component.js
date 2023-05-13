import { renderingDifficulty } from "./difficulty-component.js"
import { mainElement, globalData } from "../index.js"


function renderingPresetsCards() {
    switch (globalData.difficulty) {
        case "easy":
            mainElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ ЛЕГКИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "average":
            mainElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ СРЕДНИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "hard":
            mainElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ ВЫСОКИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        default:
            break;
    }

    document.querySelector(".difficulty__buttonStart").addEventListener("click", () => {
        renderingDifficulty();
    })
}

export { renderingPresetsCards }