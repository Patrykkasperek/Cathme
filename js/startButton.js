import { playBackground } from "./variables.js";
import { firstSite } from "./startingFunctions.js";

///////////// START button//////////////
export const startButton = () => {
    start.addEventListener("click", () => {
        startingPage.style.display = "none";
        start.style.display = "none";
        site.style.display = "flex";
        ok.style.display = "flex";
        playBackground.play();
        firstSite();

    })
}