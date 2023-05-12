import { renderingDifficulty } from "./difficulty-component.js"

function renderingPresetsCards(difficultyElement, difficultySelection) {
    switch (difficultySelection) {
        case "1":
            difficultyElement.innerHTML = `
            <h1 class="difficulty__title">Легкий уровень - 6 карточек (3 пары)</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "2":
            difficultyElement.innerHTML = `
            <h1 class="difficulty__title">Средний уровень - 12 карточек (6 пар)</h1>
            <button class="difficulty__buttonStart">Назад</button>
            `
            break;
        case "3":
            difficultyElement.innerHTML = `
            <h1 class="difficulty__title">Сложный уровень - 18 карточек (9 пар)</h1>
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