namespace RandomPoem {

let subjekt: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let prädikat: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objekt: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

console.log(subjekt, prädikat, objekt);

let i: number;
for (i = 6; i > 0; i--) {
    console.log(i);
}

function getVerse(_subjekt: string [], _prädikat: string [], _objekt: string []): string {
let result: string = _subjekt[Math.random()] + "" + _prädikat[Math.random()] + "" + _objekt[Math.random()];
return result;
console.log(result);

//console.log(_subjekt[Math.random()], _prädikat[Math.random()], _objekt[Math.random()]);
}
getVerse(subjekt, prädikat, objekt);

}