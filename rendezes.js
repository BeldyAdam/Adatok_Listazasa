function rendezesKorSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
        return a[kulcs] - b[kulcs];
    });
}

function rendezesNevSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
        let ertek = 1;
        if (a[kulcs].toUpperCase() < b[kulcs].toUpperCase()) {
            ertek = -1;
        }
        return ertek;
    });
}

/* function rendezesFajtaSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
        let ertek = 1;
        if (a[kulcs].toUpperCase() < b[kulcs].toUpperCase()) {
            ertek = -1;
        }
        return ertek;
    });
} */

export function rendezes(lista, kulcs) {
    if (typeof lista[0][kulcs] == "number") {
        rendezesKorSzerint(lista, kulcs);
    } else {
        rendezesNevSzerint(lista, kulcs);
    }
}

