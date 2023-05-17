import { renderingDifficulty } from "./difficulty-component.js";

const gameTitleElement = `
<div class="game__title">
<div class="game__time-box">
    <div class="game__text-box">
        <p class="game__text">min</p>
        <p class="game__text">sek</p>
    </div>
        <p class="game__time">00.00</p>
    </div>
<button class="game__again-button">Начать заново</button>
</div>
`;

const presetsClosedCards = `
<div class="game">
    ${gameTitleElement}
    <div class="game__cards">
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
    </div>
</div>
`;

const presetsOpenCards = `
<div class="game">
    ${gameTitleElement}
    <div class="game__cards">
    <button class="game__cards-button"><img src="./img/пики/туз пики.png" alt="туз пики"></button>
    <button class="game__cards-button"><img src="./img/пики/король пики.png" alt="король пики"></button>
    <button class="game__cards-button"><img src="./img/пики/дама пики.png" alt="дама пики"></button>
    <button class="game__cards-button"><img src="./img/пики/валет пики.png" alt="валет пики"></button>
    <button class="game__cards-button"><img src="./img/пики/10 пики.png" alt="10 пики"></button>
    <button class="game__cards-button"><img src="./img/пики/9 пики.png" alt="9 пики"></button>
    <button class="game__cards-button"><img src="./img/пики/8 пики.png" alt="8 пики"></button>
    <button class="game__cards-button"><img src="./img/пики/7 пики.png" alt="7 пики"></button>
    <button class="game__cards-button"><img src="./img/пики/6 пики.png" alt="6 пики"></button>
    <button class="game__cards-button"><img src="./img/черви/туз черви.png" alt="туз черви"></button>
    <button class="game__cards-button"><img src="./img/черви/король черви.png" alt="король черви"></button>
    <button class="game__cards-button"><img src="./img/черви/дама черви.png" alt="дама черви"></button>
    <button class="game__cards-button"><img src="./img/черви/валет черви.png" alt="валет черви"></button>
    <button class="game__cards-button"><img src="./img/черви/10 черви.png" alt="10 черви"></button>
    <button class="game__cards-button"><img src="./img/черви/9 черви.png" alt="9 черви"></button>
    <button class="game__cards-button"><img src="./img/черви/8 черви.png" alt="8 черви"></button>
    <button class="game__cards-button"><img src="./img/черви/7 черви.png" alt="7 черви"></button>
    <button class="game__cards-button"><img src="./img/черви/6 черви.png" alt="6 черви"></button>
    <button class="game__cards-button"><img src="./img/бубны/туз бубны.png" alt="туз бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/король бубны.png" alt="король бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/дама бубны.png" alt="дама бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/валет бубны.png" alt="валет бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/10 бубны.png" alt="10 бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/9 бубны.png" alt="9 бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/8 бубны.png" alt="8 бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/7 бубны.png" alt="7 бубны"></button>
    <button class="game__cards-button"><img src="./img/бубны/6 бубны.png" alt="6 бубны"></button>
    <button class="game__cards-button"><img src="./img/крести/туз крести.png" alt="туз крести"></button>
    <button class="game__cards-button"><img src="./img/крести/король крести.png" alt="король крести"></button>
    <button class="game__cards-button"><img src="./img/крести/дама крести.png" alt="дама крести"></button>
    <button class="game__cards-button"><img src="./img/крести/валет крести.png" alt="валет крести"></button>
    <button class="game__cards-button"><img src="./img/крести/10 крести.png" alt="10 крести"></button>
    <button class="game__cards-button"><img src="./img/крести/9 крести.png" alt="9 крести"></button>
    <button class="game__cards-button"><img src="./img/крести/8 крести.png" alt="8 крести"></button>
    <button class="game__cards-button"><img src="./img/крести/7 крести.png" alt="7 крести"></button>
    <button class="game__cards-button"><img src="./img/крести/6 крести.png" alt="6 крести"></button>
</div>
</div>
`;

function renderingPresetsCards() {
    switch (window.globalThis.difficulty) {
        case "easy":
            window.globalThis.mainElement.innerHTML = presetsClosedCards;
            break;
        case "average":
            window.globalThis.mainElement.innerHTML = presetsClosedCards;
            break;
        case "hard":
            window.globalThis.mainElement.innerHTML = presetsOpenCards;
            break;
        default:
            break;
    }

    document
        .querySelector(".game__again-button")
        .addEventListener("click", () => {
            renderingDifficulty();
        });
}

export { renderingPresetsCards };
