import "./css/styles.css";
import { renderingDifficulty } from "./components/difficulty-component";

type Card = {
    mainElement: HTMLElement | null;
    suit: Array<string>;
    rank: Array<string>;
    randomPreset: Array<string>;
    difficulty: string;
    selectedCard: string | undefined;
    index: Number;
    timer: String;
};

const globalThis: Card = {
    mainElement: document.getElementById("main"),
    suit: ["spades", "hearts", "diamonds", "clubs"],
    rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
    randomPreset: new Array<string>(),
    difficulty: "",
    selectedCard: "clear",
    index: 0,
    timer: "",
};

renderingDifficulty();

export { globalThis };
