namespace RandomPoem {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    let i: number;
    for (i = 6; i > 0; i--) {
        console.log(getVerse(subjekte, prädikate, objekte));
    }

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        let result: string = _subjekte.splice(Math.floor(Math.random() * _subjekte.length), 1) + " " + _prädikate.splice(Math.floor(Math.random() * _prädikate.length), 1) + " " + _objekte.splice(Math.floor(Math.random() * _objekte.length), 1);
        return result;
    }
}