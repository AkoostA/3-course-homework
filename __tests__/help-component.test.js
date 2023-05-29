const { it, expect, describe } = require("@jest/globals");
const {
    randomSuitAndRank,
    randomButtonElements,
} = require("../src/components/help-component");

describe("Функции внутри модуля help-components", () => {
    it("Создает Array с рандомным наполнением на основе двух других и дублирует его, проверяем на длину созданного Array", () => {
        const number = 3;
        let randomArr = new Array(number);

        randomArr = randomSuitAndRank(number);

        expect(randomArr).toHaveLength(number + number);
    });

    it("Создает string с HTML разметкой button, проверяем на string", () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomButtonElements(number);

        expect(randomArr).toEqual(expect.any(String));
    });

    it("Создает string с HTML разметкой button, проверяем на button в string", () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomButtonElements(number);

        expect(randomArr).toMatch("button");
    });
});
