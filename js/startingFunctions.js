import { lvl1 } from "./main.js";


//////////// Game rules//////////////////

export const firstSite = () => {
    site.innerHTML = "<br><br><br><br><br><br><h1>Catch Me!</h1>" +
        "<p>To gra zręcznościowa polegająca na złapaniu jak najszybciej kolorowej kropki pojawiającej się, na ekranie. Przejdź dalej aby przeczytać zasady gry.</p>";
    ok.addEventListener('click', rule);
};

export const rule = () => {
    site.innerHTML = "<h1>Zasady Gry:</h1>" +
        "<p>Kropka porusza się po ekranie, i zmienia kolory. Twoim zadaniem jest ją złapać w momencie gdy będzie miała odpowiedni kolor. Każdy kolor jest inaczej punktowany.</p>" +
        "<table>" +
        "<tr>" +
        "<td>Zółty:</td><td> 2pkt</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Zielony:</td><td> 1pkt</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Niebieski:</td><td> - 1pkt</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Czerwony:</td><td> - 2pkt</td>" +
        "</tr>" +
        "</table>" +
        "<p>Rundy są 4, każda z nich trwa 60 sekund. Z każdą kolejną rundą, kropkę będzie coraz trudniej uchwycić. Postaraj się zebrać jak największą ilość punktów.";
    ok.removeEventListener("click", rule);
    ok.addEventListener("click", ready);
}

export const ready = () => {

    site.innerHTML = "<h1 class='ready'>Dobra! Wszyscy gotowi?</h1>"
    ok.innerHTML = "Jedziemy!"
    ok.removeEventListener("click", ready);
    ok.addEventListener("click", lvl1);
};