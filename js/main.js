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


