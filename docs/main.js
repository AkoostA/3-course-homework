(()=>{"use strict";var t={mainElement:document.getElementById("main"),suit:["spades","hearts","diamonds","clubs"],rank:["A","K","Q","J","10","9","8","7","6"],randomPreset:new Array,difficulty:"",selectedCard:"clear",index:0,timer:"",timerCheck:"on"};function e(){document.querySelector(".difficulty__buttonStart").addEventListener("click",(function(){t.selectedCard="clear",t.index=0,r()}))}var n=function(t,e,n){if(n||2===arguments.length)for(var a,c=0,i=e.length;c<i;c++)!a&&c in e||(a||(a=Array.prototype.slice.call(e,0,c)),a[c]=e[c]);return t.concat(a||Array.prototype.slice.call(e))};function a(e){for(var a=[],c=0;c<e;c++){0===t.suit.length&&(t.suit=["spades","hearts","diamonds","clubs"]),0===t.rank.length&&(t.rank=["A","K","Q","J","10","9","8","7","6"]);var i=Math.floor(Math.random()*t.suit.length),s=Math.floor(Math.random()*t.rank.length);a[c]=t.suit[i]+t.rank[s],t.suit.splice(i,1),t.rank.splice(s,1)}return n(n([],a,!0),a,!0)}function c(e){t.index=e;for(var n=[],a=0;a<e;a++){var c=Math.floor(Math.random()*t.randomPreset.length);n[a]='\n        <button data-preset="'.concat(t.randomPreset[c],'" class="game__cards-button preset__').concat(t.randomPreset[c],'"></button>\n        '),t.randomPreset.splice(c,1)}return n.join("")}var i='\n<div class="game__title">\n    <div class="game__time-box">\n        <div class="game__text-box">\n            <p class="game__text">min</p>\n            <p class="game__text">sek</p>\n        </div>\n        <span id="timer" class="game__time">00:00</span>\n    </div>\n    <button class="game__again-button">Начать заново</button>\n</div>\n';function s(){switch(t.difficulty){case"easy":t.randomPreset=a(3),t.mainElement.innerHTML='\n            <div class="game">\n                '.concat(i,'\n                <div class="game__cards">\n                    ').concat(c(6),"\n                </div>\n            </div>\n            ");break;case"average":t.randomPreset=a(6),t.mainElement.innerHTML='\n            <div class="game">\n                '.concat(i,'\n                <div class="game__cards">\n                    ').concat(c(12),"\n                </div>\n            </div>\n            ");break;case"hard":t.randomPreset=a(9),t.mainElement.innerHTML='\n            <div class="game">\n                '.concat(i,'\n                <div class="game__cards">\n                    ').concat(c(18),"\n                </div>\n            </div>\n            ")}var n,s;document.querySelector(".game__again-button").addEventListener("click",(function(){t.selectedCard="clear",t.timerCheck="on",r()})),n=document.querySelectorAll(".game__cards-button"),s=0,setTimeout((function(){t.timerCheck="off",function(){var e,n=document.getElementById("timer"),a=0,c=0;function i(){"on"!==t.timerCheck?(++a>=60&&(a=0,++c>=60&&(c=0)),n.innerHTML=(c>9?c:"0"+c)+":"+(a>9?a:"0"+a),t.timer=n.innerHTML,s()):clearTimeout(e)}function s(){e=setTimeout(i,1e3)}s()}();for(var a=0,c=n;a<c.length;a++)(l=c[a])instanceof HTMLElement&&l.classList.remove("preset__".concat(l.dataset.preset));for(var i=function(n){n instanceof HTMLElement&&n.addEventListener("click",(function(){switch(n.classList.add("button-active"),n.classList.add("preset__".concat(n.dataset.preset)),t.selectedCard){case"clear":t.selectedCard=n.dataset.preset,n.dataset.preset="open";break;case"open":t.selectedCard="clear";break;case n.dataset.preset:if(s+=2,t.index===s)return t.timerCheck="on",t.mainElement.innerHTML='\n<section class="difficulty">\n<h1 class="difficulty__win"></h1>\n<h2 class="difficulty__title-win">Вы выиграли!</h2>\n<p class="difficulty__text">Затраченное время:</p>\n<p class="difficulty__timer">'.concat(t.timer,'</p>\n<button class="difficulty__buttonStart">Играть снова</button>\n</section>\n'),void e();t.selectedCard="clear",n.dataset.preset="open";break;default:t.timerCheck="on",t.mainElement.innerHTML='\n<section class="difficulty">\n<h1 class="difficulty__lose"></h1>\n<h2 class="difficulty__title-win">Вы проиграли!</h2>\n<p class="difficulty__text">Затраченное время:</p>\n<p class="difficulty__timer">'.concat(t.timer,'</p>\n<button class="difficulty__buttonStart">Играть снова</button>\n</section>\n'),e()}}))},r=0,o=n;r<o.length;r++){var l;i(l=o[r])}}),5e3)}function r(){t.mainElement.innerHTML='\n<section class="difficulty">\n<h1 class="difficulty__title">Выбери сложность</h1>\n<div class="difficulty__choose">\n    <button class="difficulty__chooseButton">1</button>\n    <button class="difficulty__chooseButton">2</button>\n    <button class="difficulty__chooseButton">3</button>\n</div>\n<button class="difficulty__buttonStart">Старт</button>\n</section>\n',function(){for(var e=document.querySelectorAll(".difficulty__chooseButton"),n=document.querySelector(".difficulty__buttonStart"),a=function(n){n.addEventListener("click",(function(){for(var a=0,c=e;a<c.length;a++)c[a].classList.remove("button-active");switch(n.classList.add("button-active"),n.textContent){case"1":t.difficulty="easy";break;case"2":t.difficulty="average";break;case"3":t.difficulty="hard"}}))},c=0,i=e;c<i.length;c++)a(i[c]);n.addEventListener("click",(function(){t.difficulty?s():alert("С начало выберете сложность")}))}()}r()})();