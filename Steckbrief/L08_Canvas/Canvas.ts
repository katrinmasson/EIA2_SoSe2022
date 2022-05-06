namespace CanvasL08 {
    window.addEventListener("load", start);

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    function start(_event: Event): void {
        // Bedeutung der 4 Parameter: x-Koordiante, y-Koordinate, gesamte Breite des Canvas, gesamte Höhe des Canvas
        //crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    for (let i: number = 0; i < 2; i++) {
        kreisFilled();
    }
    drawRectBig();
    drawRectLittle();
    for (let i: number = 0; i < 2; i++) {
        drawRectFilled();
    }
    kreisOne();
    kreisTwo();
    ellipse();
    stricheOne();
    stricheTwo();
    for (let i: number = 0; i < 3; i++) {
        stricheThree();
    }
    stricheFour();
    for (let i: number = 0; i < 2; i++) {
        kurven();
    }
    for (let i: number = 0; i < 20; i++) {
        dots();
    }

    function kreisFilled(): void {
        let x: number = Math.random() * 700;
        let y: number = Math.random() * 350;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.random() * 1;
        //ausgefüllter Kreis
        crc2.fillStyle = "hsla(" + hColor + "," + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.beginPath();
        crc2.arc(x, y, 150, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    function drawRectBig(): void {
        //random x & y
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 400;
        //random color
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.random() * 10;

        crc2.strokeStyle = "hsla(" + hColor + "," + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.strokeRect(x, y, 180, 180);
    }

    function drawRectLittle(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 400;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);

        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.strokeRect(x, y, 200, 140);
    }

    function drawRectFilled(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 400;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.random() * 2;

        crc2.fillStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.fillRect(x, y, 200, 200);
    }

    function kreisOne(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 350;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //nicht ausgefüllter Kreis
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.arc(x, y, 120, 0, 1 * Math.PI);
        crc2.closePath();
        crc2.stroke();
    }

    function kreisTwo(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 350;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //nicht ausgefüllter Kreis
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.arc(x, y, 100, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
    }

    function ellipse(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 350;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //die Ellipse zeichnen (geschlossene Kurve)
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.ellipse(x, y, 90, 90, Math.PI / 4, 0, 1.5 * Math.PI);
        crc2.stroke();
    }

    function stricheOne(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 450;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //normale Linie
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x, y);
        crc2.stroke();
    }
    function stricheTwo(): void {
        let y: number = Math.random() * 450;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //weitere Linie
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(0, y);
        crc2.lineTo(1000, y);
        crc2.stroke();
    }

    function stricheThree(): void {
        let x: number = Math.random() * 900;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //weitere Linie
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 2.5;
        crc2.beginPath();
        crc2.moveTo(x, 0);
        crc2.lineTo(x, 600);
        crc2.stroke();
    }

    function stricheFour(): void {
        let y: number = Math.random() * 450;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //weitere Linie
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.setLineDash([5, 5]); //gestrichelte Linie
        crc2.moveTo(0, y);
        crc2.lineTo(1000, y);
        crc2.stroke();
    }

    function kurven(): void {
        let x: number = Math.random() * 900;
        let y: number = Math.random() * 400;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.floor(Math.random() * 100);
        //weitere Linie
        crc2.strokeStyle = "hsla(" + hColor + ", " + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.setLineDash([3, 3]); //gestrichelte Linie
        crc2.bezierCurveTo(1000, y, x, y, x, 1 * Math.PI);
        crc2.stroke();
    }

    function dots(): void {
        let x: number = Math.random() * 1000;
        let y: number = Math.random() * 500;
        let hColor: number = Math.floor(Math.random() * 100);
        let sColor: number = Math.floor(Math.random() * 100);
        let lColor: number = Math.floor(Math.random() * 100);
        let aColor: number = Math.random() * 1;
        //ausgefüllter Kreis
        crc2.fillStyle = "hsla(" + hColor + "," + sColor + "%," + lColor + "%," + aColor + ")";
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
}