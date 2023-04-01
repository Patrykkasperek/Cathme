import { level, pointsCounter, last } from './level.js'
import { startButton } from './startButton.js'
import {nextRound, resume} from './variables.js'


pointsCounter();
startButton();

export const lvl1 = () => {
    level(700, 0, 1, 2, lvl1, lvl2, nextRound);
}
const lvl2 = () => {
    level(650, 3, 4, 5, lvl2, lvl3, nextRound);
}
const lvl3 = () => {
    level(600, 6, 7, 8, lvl3, lvl4, nextRound);
}
const lvl4 = () => {
    level(500, 9, 10, 11, lvl4, last, resume);
}


// PRACA DOMOWA
/**
 * BEFORE REACT LEARNING:
 *  Ogrnąć jakiś preprocesor css (SASS/LESS, SCSS) Udemy
 *  Dokładnie ogarnąć funkcje strzałkowe => (){} (done)
 *  zgłębić temat let i const. (done)
 *  ogarnąć ES modules. (done)
 *  delegacja zdarzeń
 *  Ogarnąć do końca klasy w JS
 *  asynchroniczny JS (async/await/promise)
 *  metody tablic i obiektów. (Map, forEach)
 *  Git/Github
 *  REST API
 * 
 * 
 * 
 * PRACA DOMOWA WG wahy.
 * OPTYMALIZACJA KODU lvl do jednej funkcji (done)
 * Event Loop (film youtube)
 * rewrite to english (done)
 * template literals (stringi bez +) (done)
 * ternary operator (skrócony if else) (done)
 * przepisz skrypt do reacta i odpal npm run start
 */
