import { mainElement, checkButtonDifficulty } from "../index.js"

function renderingDifficulty() {
    mainElement.innerHTML = `
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


export { renderingDifficulty }