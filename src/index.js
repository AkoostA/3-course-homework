import { renderingDifficulty } from "./components/difficulty-component.js";

window.globalThis = {
    mainElement: document.getElementById("main"),
};

renderingDifficulty();
