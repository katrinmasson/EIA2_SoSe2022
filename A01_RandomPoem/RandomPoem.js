"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekt, prädikat, objekt);
    let i;
    for (i = 6; i > 0; i--) {
        console.log(i);
    }
    function getVerse(_subjekt, _prädikat, _objekt) {
        let result = _subjekt[Math.random()] + "" + _prädikat[Math.random()] + "" + _objekt[Math.random()];
        return result;
        console.log(result);
        //console.log(_subjekt[Math.random()], _prädikat[Math.random()], _objekt[Math.random()]);
    }
    getVerse(subjekt, prädikat, objekt);
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map