import { ADATLISTA } from "./adat.js";(szerkesztes)
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
$(function () {

    rendezes(ADATLISTA, "kor");
    rendezes(ADATLISTA, "nev");
    rendezes(ADATLISTA, "fajta");

    console.log(ADATLISTA);
    console.log(szures(ADATLISTA, "fajta", "keverék"));

    const TABLAZAT = $("#szerkesztes");


    let tartalom = megjelenit(ADATLISTA);
    TABLAZAT.append(tartalom);


    $("th").on("click", function () {
        let index = $(this).index();
        let kulcs = Object.keys(ADATLISTA[0])[index];

        rendezes(ADATLISTA, kulcs);

        let elem = $("table");
        let adat = megjelenit(ADATLISTA);
        elem.replaceWith(adat);
    });

    $(".torol").on("click", function () {
        let index = (event.target.id);
        $(this).closest("tr").remove();
        ADATLISTA.splice(index, 1);
    });

})

function megjelenit(lista) {
    let txt = "";
    txt += "<table class='table table-bordered'>";
    txt += "<tr>";
    for (let kulcs in lista[0]) {
        txt += "<th class='table-dark'>" + kulcs + "</th>";
    }
    txt += "<th class='table-dark'></th>";
    txt += "</tr>";
    for (let index = 0; index < lista.length; index++) {
        txt += "<tr>";
        for (let kulcs in lista[index]) {
            txt += "<td>" + lista[index][kulcs] + "</td>";
        }
        txt += "<td class='torol' id='" + index + "'>✖</td>";
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}