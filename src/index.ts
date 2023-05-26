import "./css/styles.css";
import { renderingDifficulty } from "./components/difficulty-component";

interface ICard {
    mainElement: HTMLElement | null;
    suit: Array<string>;
    rank: Array<string>;
    randomPreset: Array<string>;
    difficulty: string;
    selectedCard: string | undefined;
    index: Number;
    timer: String;
    timerCheck: String;
}

const globalThis: ICard = {
    mainElement: document.getElementById("main"),
    suit: ["spades", "hearts", "diamonds", "clubs"],
    rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
    randomPreset: new Array<string>(),
    difficulty: "",
    selectedCard: "clear",
    index: 0,
    timer: "",
    timerCheck: "on",
};

renderingDifficulty();

export { globalThis };
