"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let i;
    for (i = 6; i > 0; i--) {
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let result = _subjekte.splice(Math.floor(Math.random() * _subjekte.length), 1) + " " + _prädikate.splice(Math.floor(Math.random() * _prädikate.length), 1) + " " + _objekte.splice(Math.floor(Math.random() * _objekte.length), 1);
        return result;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map