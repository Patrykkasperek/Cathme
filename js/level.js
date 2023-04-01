import * as mainfunctions from './variables.js';
import {lvl1} from './main.js'

let pointsOnRound = 0;

export const last = () => {

    pointsOnRound = 0;
    document.querySelector("#points").innerHTML = 0;
    lvl1();
};


export const pointsCounter = () => {

    dot.addEventListener("click", () => {
        if (dot.classList.contains("green")) {
            pointsOnRound++;
            document.querySelector("#pressGreen").play();
        }
        else if (dot.classList.contains("yellow")) {
            pointsOnRound = pointsOnRound + 2;
            document.querySelector("#pressGreen").play();
        }
        else if (dot.classList.contains("blue")) {
            pointsOnRound--;
            document.querySelector("#pressRed").play();
        }
        else {
            pointsOnRound = pointsOnRound - 2;
            document.querySelector("#pressRed").play();
        }
        document.querySelector("#points").innerHTML = pointsOnRound;
    });
}

////////////////////////////////////////// Main function of levels ////////////////////////////////////////////////////

export const level = (time, worse, middle, best, stoplvl, startlvl, startRound) => {

    ////////// Interval of changing dot position and color ////////////////
    const roundInterval = setInterval(() => {
        let translate = `translate( ${ Math.floor((Math.random() * 268) + 1)}px, ${ Math.floor((Math.random() * 433) + 1)}px)`;
        dot.setAttribute("class", mainfunctions.colors[Math.floor((Math.random() * 4))]);
        dot.style.transform = translate;
    }, time);

    ///////// Level starting ////////////
    mainfunctions.playBackground.pause();
    mainfunctions.playGame.play();
    dot.style.display = "flex";
    ok.style.display = "none";
    site.style.display = "none";

    ////////// Timer ////////
    let i = 60;
    const timerInterval = setInterval(() => {
        i--
        gameTime.innerHTML = i;
    }, 1000)


    //////// Changes after 60sec /////////
    setTimeout(() => {
        clearInterval(roundInterval);
        clearInterval(timerInterval);
        gameTime.innerHTML = 60;
        ok.style.display = "flex";
        site.style.display = "flex";
        mainfunctions.playBackground.play();
        mainfunctions.playGame.pause();
        ok.innerHTML = startRound;
        ok.removeEventListener("click", stoplvl);
        ok.addEventListener("click", startlvl);

        const resultWords = mainfunctions.resultTemplate + pointsOnRound + mainfunctions.pkt;

        pointsOnRound <= 0 ? site.innerHTML = resultWords + mainfunctions.wordsAfterRoundTemplate[worse]
            : pointsOnRound < 10 ? site.innerHTML = resultWords + mainfunctions.wordsAfterRoundTemplate[middle]
                : site.innerHTML = resultWords + mainfunctions.wordsAfterRoundTemplate[best];
    }, 60000);
}
