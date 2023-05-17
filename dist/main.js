/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/difficulty-component.js":
/*!************************************************!*\
  !*** ./src/components/difficulty-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderingDifficulty\": () => (/* binding */ renderingDifficulty)\n/* harmony export */ });\n/* harmony import */ var _presets_cards_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presets-cards-component.js */ \"./src/components/presets-cards-component.js\");\n\n\nfunction renderingDifficulty() {\n    window.globalThis.mainElement.innerHTML = `\n<section class=\"difficulty\">\n<h1 class=\"difficulty__title\">Выбери сложность</h1>\n<div class=\"difficulty__choose\">\n    <button class=\"difficulty__chooseButton\">1</button>\n    <button class=\"difficulty__chooseButton\">2</button>\n    <button class=\"difficulty__chooseButton\">3</button>\n</div>\n<button class=\"difficulty__buttonStart\">Старт</button>\n</section>\n`;\n\n    checkButtonDifficulty();\n}\n\nfunction checkButtonDifficulty() {\n    const chooseButtonElements = document.querySelectorAll(\n        \".difficulty__chooseButton\"\n    );\n    const startButtonElement = document.querySelector(\n        \".difficulty__buttonStart\"\n    );\n\n    for (const chooseButtonElement of chooseButtonElements) {\n        chooseButtonElement.addEventListener(\"click\", () => {\n            for (const chooseButtonElement of chooseButtonElements) {\n                chooseButtonElement.classList.remove(\"-button-active\");\n            }\n            chooseButtonElement.classList.add(\"-button-active\");\n            switch (chooseButtonElement.textContent) {\n                case \"1\":\n                    window.globalThis.difficulty = \"easy\";\n                    break;\n                case \"2\":\n                    window.globalThis.difficulty = \"average\";\n                    break;\n                case \"3\":\n                    window.globalThis.difficulty = \"hard\";\n                    break;\n                default:\n                    break;\n            }\n        });\n    }\n\n    startButtonElement.addEventListener(\"click\", () => {\n        if (!window.globalThis.difficulty) {\n            alert(\"С начало выберете сложность\");\n            return;\n        }\n        (0,_presets_cards_component_js__WEBPACK_IMPORTED_MODULE_0__.renderingPresetsCards)();\n    });\n}\n\n\n\n\n//# sourceURL=webpack://3-course-homework/./src/components/difficulty-component.js?");

/***/ }),

/***/ "./src/components/presets-cards-component.js":
/*!***************************************************!*\
  !*** ./src/components/presets-cards-component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderingPresetsCards\": () => (/* binding */ renderingPresetsCards)\n/* harmony export */ });\n/* harmony import */ var _difficulty_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difficulty-component.js */ \"./src/components/difficulty-component.js\");\n\n\nconst gameTitleElement = `\n<div class=\"game__title\">\n<div class=\"game__time-box\">\n    <div class=\"game__text-box\">\n        <p class=\"game__text\">min</p>\n        <p class=\"game__text\">sek</p>\n    </div>\n        <p class=\"game__time\">00.00</p>\n    </div>\n<button class=\"game__again-button\">Начать заново</button>\n</div>\n`;\n\nconst presetsClosedCards = `\n<div class=\"game\">\n    ${gameTitleElement}\n    <div class=\"game__cards\">\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n        <button class=\"game__cards-button\"></button>\n    </div>\n</div>\n`;\n\nconst presetsOpenCards = `\n<div class=\"game\">\n    ${gameTitleElement}\n    <div class=\"game__cards\">\n    <button class=\"game__cards-button\"><img src=\"./img/пики/туз пики.png\" alt=\"туз пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/король пики.png\" alt=\"король пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/дама пики.png\" alt=\"дама пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/валет пики.png\" alt=\"валет пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/10 пики.png\" alt=\"10 пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/9 пики.png\" alt=\"9 пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/8 пики.png\" alt=\"8 пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/7 пики.png\" alt=\"7 пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/пики/6 пики.png\" alt=\"6 пики\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/туз черви.png\" alt=\"туз черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/король черви.png\" alt=\"король черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/дама черви.png\" alt=\"дама черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/валет черви.png\" alt=\"валет черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/10 черви.png\" alt=\"10 черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/9 черви.png\" alt=\"9 черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/8 черви.png\" alt=\"8 черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/7 черви.png\" alt=\"7 черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/черви/6 черви.png\" alt=\"6 черви\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/туз бубны.png\" alt=\"туз бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/король бубны.png\" alt=\"король бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/дама бубны.png\" alt=\"дама бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/валет бубны.png\" alt=\"валет бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/10 бубны.png\" alt=\"10 бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/9 бубны.png\" alt=\"9 бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/8 бубны.png\" alt=\"8 бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/7 бубны.png\" alt=\"7 бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/бубны/6 бубны.png\" alt=\"6 бубны\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/туз крести.png\" alt=\"туз крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/король крести.png\" alt=\"король крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/дама крести.png\" alt=\"дама крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/валет крести.png\" alt=\"валет крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/10 крести.png\" alt=\"10 крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/9 крести.png\" alt=\"9 крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/8 крести.png\" alt=\"8 крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/7 крести.png\" alt=\"7 крести\"></button>\n    <button class=\"game__cards-button\"><img src=\"./img/крести/6 крести.png\" alt=\"6 крести\"></button>\n</div>\n</div>\n`;\n\nfunction renderingPresetsCards() {\n    switch (window.globalThis.difficulty) {\n        case \"easy\":\n            window.globalThis.mainElement.innerHTML = presetsClosedCards;\n            break;\n        case \"average\":\n            window.globalThis.mainElement.innerHTML = presetsClosedCards;\n            break;\n        case \"hard\":\n            window.globalThis.mainElement.innerHTML = presetsOpenCards;\n            break;\n        default:\n            break;\n    }\n\n    document\n        .querySelector(\".game__again-button\")\n        .addEventListener(\"click\", () => {\n            (0,_difficulty_component_js__WEBPACK_IMPORTED_MODULE_0__.renderingDifficulty)();\n        });\n}\n\n\n\n\n//# sourceURL=webpack://3-course-homework/./src/components/presets-cards-component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_difficulty_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/difficulty-component.js */ \"./src/components/difficulty-component.js\");\n\n\nwindow.globalThis = {\n    mainElement: document.getElementById(\"main\"),\n};\n\n(0,_components_difficulty_component_js__WEBPACK_IMPORTED_MODULE_0__.renderingDifficulty)();\n\n\n//# sourceURL=webpack://3-course-homework/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;