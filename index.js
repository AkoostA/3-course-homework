import { renderingDifficulty } from "./components/difficulty-component.js";

globalThis = {
    mainElement: document.getElementById("main"),
    difficulty: "",
    cards: "",
}

renderingDifficulty();