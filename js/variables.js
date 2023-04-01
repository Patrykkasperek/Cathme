export const colors = ["red", "green", "blue", "yellow"];
export const playBackground = document.querySelector("#backgroundSound");
export const playGame = document.querySelector("#playSound");
export const start = document.querySelector("#start");
export const resultTemplate ="<h1>Twój wynik to:<br><br> ";
export const pkt = "pkt </h1> <p>";
export const nextRound = "Następna runda!";
export const resume = "Zacznij od nowa";

export const wordsAfterRoundTemplate = [

    ///lvl1///
    "Chyba musisz się trochę bardziej postarać...<br> W następnej rundzie na pewno poradzisz sobie lepiej.<br> Podkręcamy tempo!</p>",

    "Całkiem nieźle! <br> Zobaczmy jak poradzisz sobie gdy podkręcimy tempo!</p>",

    "No i to jest wynik! <br> Następna runda na pewno pójdzie ci równie gładko. Podkręcamy tempo!</p>",



    ///lvl2///
    "Nadal nie najlepiej, ale nie załamuj się!<br><br> Zdążysz odrobić straty w następnej rundzie! </p>",

    "Idzie ci coraz lepiej! <br><br> Chyba lubisz wyzwania. Sprawdźmy jak poradzisz sobie z kolejną zmianą tempa!</p>",

    "To się nazywa profesjonalne podejście do tematu! <br><br> Następna runda na pewno pójdzie ci równie gładko. Podkręcamy tempo jeszcze bardziej!</p>",



    //lvl3//
    "ahhh! Było blisko!!<br><br> ...ale spokojnie! została ci jeszcze jedna runda! </p>",

    "Świetnie! <br><br> Oby tak dalej! Przed tobą najtrudniejsza runda. Powodzenia!</p>",

    "Runda rozegrana po mistrzowsku!<br> Punktacja rośnie! <br><br> Przed tobą najtrudniejsze wyzwanie tej gry, ale co to dla ciebie? :) </p>",



    ///lvl4///
    "No cóż... nie wszystkim się udaje za pierwszym razem. <br> Zawsze możesz spróbować jeszcze raz. W każdym razie zabawa była przednia! </p>",

    "Świetnie rozegrane 4 rundy! <br> Pamiętaj jednak że zawsze możesz poprawić swoje wyniki. Zagraj jeszcze raz! </p>",

    "To była Najlepsza rozgrywka na świecie! <br> Pamiętaj jednak że prawdziwi mistrzowie nie spoczywają na laurach. Spróbuj pobić swój wynik, i zagraj jeszcze raz! </p>"


];

