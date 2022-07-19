namespace L09_classes_Beach {
    export class Clouds {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            console.log("Clouds constructor");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.size = _size;
        }

        move(_timeslice: number): void {
            console.log("Clouds move");
        }

        draw(): void {
            let particleNum: number = 40;
            let radiusParticle: number = 30;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let draw: number = 0; draw < particleNum; draw++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size;
                let y: number = (Math.random() * this.size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.fill(particle);
            crc2.restore();
        }
    }
}