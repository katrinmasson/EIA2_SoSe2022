"use strict";
var L09_classes_Beach;
(function (L09_classes_Beach) {
    class Clouds {
        position;
        velocity;
        size;
        constructor(_size) {
            console.log("Clouds constructor");
            this.position = new L09_classes_Beach.Vector(0, 0);
            this.velocity = new L09_classes_Beach.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Clouds move");
        }
        draw() {
            let particleNum = 40;
            let radiusParticle = 30;
            let particle = new Path2D();
            let gradient = L09_classes_Beach.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_classes_Beach.crc2.save();
            L09_classes_Beach.crc2.translate(this.position.x, this.position.y);
            L09_classes_Beach.crc2.fillStyle = gradient;
            for (let draw = 0; draw < particleNum; draw++) {
                L09_classes_Beach.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = (Math.random() * this.size);
                L09_classes_Beach.crc2.translate(x, y);
                L09_classes_Beach.crc2.fill(particle);
                L09_classes_Beach.crc2.restore();
            }
            L09_classes_Beach.crc2.fill(particle);
            L09_classes_Beach.crc2.restore();
        }
    }
    L09_classes_Beach.Clouds = Clouds;
})(L09_classes_Beach || (L09_classes_Beach = {}));
//# sourceMappingURL=Clouds.js.map