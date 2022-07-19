"use strict";
var L09_classes_Beach;
(function (L09_classes_Beach) {
    window.addEventListener("load", start);
    let golden = 0.30;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_classes_Beach.crc2 = canvas.getContext("2d");
        let clouds = new L09_classes_Beach.Clouds(2);
        console.log(clouds);
        drawBackground();
        drawWater({ 0: , 250:  }, { x: L09_classes_Beach.crc2.canvas.width, y: 250 });
        drawSun({ 450: , 200:  });
        drawBay({ 0: , 500:  }, 200, 450, "brown", "orange");
    }
    function drawBackground() {
        let gradient = L09_classes_Beach.crc2.createLinearGradient(0, 0, 0, L09_classes_Beach.crc2.canvas.height);
        gradient.addColorStop(0, "lightpink");
        gradient.addColorStop(golden, "lightblue");
        gradient.addColorStop(1, "orange");
        L09_classes_Beach.crc2.fillStyle = gradient;
        L09_classes_Beach.crc2.fillRect(0, 0, L09_classes_Beach.crc2.canvas.width, L09_classes_Beach.crc2.canvas.height);
    }
    function drawWater(_position, _size) {
        L09_classes_Beach.crc2.fillStyle = "blue";
        L09_classes_Beach.crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 120;
        let gradient = L09_classes_Beach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        L09_classes_Beach.crc2.save();
        L09_classes_Beach.crc2.translate(_position.x, _position.y);
        L09_classes_Beach.crc2.fillStyle = gradient;
        L09_classes_Beach.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_classes_Beach.crc2.fill();
        L09_classes_Beach.crc2.restore();
    }
    function drawBay(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 90;
        let x = 0;
        L09_classes_Beach.crc2.save();
        L09_classes_Beach.crc2.translate(_position.x, _position.y);
        L09_classes_Beach.crc2.beginPath();
        L09_classes_Beach.crc2.moveTo(0, 0);
        L09_classes_Beach.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_classes_Beach.crc2.lineTo(x, y);
        } while (x < 300);
        L09_classes_Beach.crc2.lineTo(x, 0);
        L09_classes_Beach.crc2.closePath();
        let gradient = L09_classes_Beach.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_classes_Beach.crc2.fillStyle = gradient;
        L09_classes_Beach.crc2.fill();
        L09_classes_Beach.crc2.restore();
    }
})(L09_classes_Beach || (L09_classes_Beach = {}));
//# sourceMappingURL=main.js.map