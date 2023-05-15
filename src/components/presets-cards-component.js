import { renderingDifficulty } from "./difficulty-component.js"

function renderingPresetsCards() {
    switch (window.globalThis.difficulty) {
        case "easy":
            window.globalThis.mainElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ ЛЕГКИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "average":
            window.globalThis.mainElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ СРЕДНИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "hard":
            window.globalThis.mainElement.innerHTML = `
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