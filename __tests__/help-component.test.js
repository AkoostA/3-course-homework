const { it, expect, describe } = require("@jest/globals");
import {
    randomSuitAndRank,
    randomButtonElements,
} from "../src/components/help-component";

describe("Функции внутри модуля help-components", () => {
    it("Создает массив с рандомным наполнением на основе двух других и дублирует его", () => {
        const number = 3;
        let randomArr = new Array(number);

        randomArr = randomSuitAndRank(number);

        expect(randomArr).toHaveLength(number + number);
    });

    it("Создает массив с HTML разметкой кнопок", () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomButtonElements(number);

        expect(randomArr).toHaveLength(number);
    });
});
