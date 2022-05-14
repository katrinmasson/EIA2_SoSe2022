"use strict";
var L08Beach;
(function (L08Beach) {
    window.addEventListener("load", start);
    let crc2;
    let golden = 0.30;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawWater({ x: 0, y: 250 }, { x: crc2.canvas.width, y: 250 });
        drawSun({ x: 450, y: 200 });
        drawBay({ x: 0, y: 500 }, 200, 450, "brown", "orange");
        for (let i = 0; i < 2; i++) {
            drawCloud({ x: Math.random() * 1000, y: Math.random() * 150 }, { x: 170, y: 70 });
        }
        for (let i = 0; i < 3; i++) {
            drawBird({ x: Math.random() * 800, y: Math.random() * 250 });
        }
        drawPalms({ x: 150, y: 550 });
        for (let i = 0; i < 2; i++) {
            woman({ x: Math.random() * 800, y: 550 });
        }
        for (let i = 0; i < 2; i++) {
            man({ x: Math.random() * 800, y: 600 });
        }
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightpink");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawWater(_position, _size) {
        crc2.fillStyle = "blue";
        crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawBay(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 90;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < 300);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        let particleNum = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let draw = 0; draw < particleNum; draw++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.fill(particle);
        crc2.restore();
    }
    function drawBird(_position) {
        //Kreis für den Körper
        crc2.fillStyle = "white";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Auge
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Flügel rechts
        crc2.strokeStyle = "white";
        crc2.lineWidth = 9;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x + 35, _position.y + 5, 25, 25, Math.PI / 2.5, 2, 1.5 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Flügel links
        crc2.strokeStyle = "white";
        crc2.lineWidth = 9;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x - 35, _position.y + 5, 25, 25, Math.PI / 2.5, 2, 1.5 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Schnabel
        crc2.strokeStyle = "orange";
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-15, 0);
        crc2.lineTo(-24, 5);
        crc2.stroke();
        crc2.restore();
    }
    function drawPalms(_position) {
        //Stamm
        crc2.strokeStyle = "darkbrown";
        crc2.lineWidth = 20;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -190);
        crc2.closePath();
        crc2.stroke();
        // Blätter
        crc2.translate(0, -190);
        for (let leaves = 0; leaves < 5; leaves++) {
            crc2.rotate(Math.PI * 2 / 5);
            //Farbe
            let gradient = crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0.1, "darkgreen");
            gradient.addColorStop(0.8, "lightgreen");
            // Blätter
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-10, 10);
            crc2.bezierCurveTo(_position.x, _position.y - 500, 70, -20, 80, -20);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
        }
        crc2.restore();
    }
    function woman(_position) {
        //Kreis für den Haare
        crc2.fillStyle = "yellow";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y - 55, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis für den Körper
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis für den Kopf
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y - 55, 23, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Auge links
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x - 10, _position.y - 60, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Auge rechts
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x + 10, _position.y - 60, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Arm rechts
        crc2.strokeStyle = "beige";
        crc2.lineWidth = 8;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x + 25, _position.y + 3, 25, 25, Math.PI / 2.5, 2, 1.6 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Arm links
        crc2.strokeStyle = "beige";
        crc2.lineWidth = 8;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x - 25, _position.y + 3, 25, 25, Math.PI / 2.5, 2, 1.6 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Mund
        crc2.strokeStyle = "red";
        crc2.lineWidth = 5;
        crc2.save();
        crc2.translate(_position.x - 7, _position.y - 47);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, 0);
        crc2.stroke();
        crc2.restore();
        //Kreis linker Fuß
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x - 20, _position.y + 30, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis rechter Fuß
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x + 20, _position.y + 30, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Bikiträger links
        crc2.strokeStyle = "pink";
        crc2.lineWidth = 5;
        crc2.save();
        crc2.translate(_position.x - 15, _position.y - 33);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 23);
        crc2.stroke();
        crc2.restore();
        //Bikiniträger rechts
        crc2.strokeStyle = "pink";
        crc2.lineWidth = 5;
        crc2.save();
        crc2.translate(_position.x + 15, _position.y - 33);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 23);
        crc2.stroke();
        crc2.restore();
        //Biki Top
        crc2.strokeStyle = "pink";
        crc2.lineWidth = 15;
        crc2.save();
        crc2.translate(_position.x - 35, _position.y - 5);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(70, 0);
        crc2.stroke();
        crc2.restore();
        //Biki Hose
        crc2.lineWidth = 1;
        crc2.save();
        crc2.translate(_position.x - 35, _position.y + 13);
        crc2.beginPath();
        crc2.moveTo(1, 0);
        crc2.lineTo(69, 0);
        crc2.lineTo(42, 22);
        crc2.lineTo(28, 22);
        crc2.lineTo(1, 0);
        crc2.closePath();
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.restore();
    }
    function man(_position) {
        //Kreis für den Haare
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y - 55, 26, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis für den Körper
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis für den Kopf
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x, _position.y - 55, 23, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Auge links
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x - 10, _position.y - 60, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Auge rechts
        crc2.fillStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x + 10, _position.y - 60, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Arm rechts
        crc2.strokeStyle = "beige";
        crc2.lineWidth = 8;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x + 25, _position.y + 3, 25, 25, Math.PI / 2.5, 2, 1.6 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Arm links
        crc2.strokeStyle = "beige";
        crc2.lineWidth = 8;
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(_position.x - 25, _position.y + 3, 25, 25, Math.PI / 2.5, 2, 1.6 * Math.PI);
        crc2.stroke();
        crc2.restore();
        //Mund
        crc2.strokeStyle = "salmon";
        crc2.lineWidth = 5;
        crc2.save();
        crc2.translate(_position.x - 7, _position.y - 47);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(15, 0);
        crc2.stroke();
        crc2.restore();
        //Kreis linker Fuß
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x - 20, _position.y + 30, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Kreis rechter Fuß
        crc2.fillStyle = "beige";
        crc2.save();
        crc2.beginPath();
        crc2.arc(_position.x + 20, _position.y + 30, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //Biki Hose
        crc2.lineWidth = 1;
        crc2.save();
        crc2.translate(_position.x - 35, _position.y + 13);
        crc2.beginPath();
        crc2.moveTo(1, 0);
        crc2.lineTo(69, 0);
        crc2.lineTo(42, 22);
        crc2.lineTo(28, 22);
        crc2.lineTo(1, 0);
        crc2.closePath();
        crc2.fillStyle = "lightgreen";
        crc2.fill();
        crc2.restore();
    }
})(L08Beach || (L08Beach = {}));
//# sourceMappingURL=beach.js.map