namespace EndabgabeSoSe22 {
  enum TASK {
    IDLE,
    FLY_TO_VEGETABLE,
    ABSORB_NECTAR,
    FLY_TO_BEHIVE,
    EJECT_NECTAR
  }

  export class Bug {
    protected position: Vector;
    protected velocity: Vector;
    protected vegetable: Vegetable | null; //aktuelles Vegetable
    private xTarget: number;
    private yTarget: number;
    private speed: number;
    private task: TASK = TASK.IDLE; // Leerlauf - Anfangszustand

    //drawBug();
    public constructor(_position: Vector) {
      this.position = _position;
      // this.position.x = 50;
      // this.position.y = 50;
      this.speed = 0.005;

      // TASK ENUMERATION
      this.updateTask();
    }

    public draw(): void {
      //Flügel 1
      (crc2.strokeStyle = "darkblue"), (crc2.fillStyle = "lightblue");
      crc2.save();
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y - 25, 12, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      crc2.lineWidth = 1;
      crc2.stroke();
      crc2.restore();
      //Flügel 1
      crc2.save();
      crc2.beginPath();
      crc2.arc(this.position.x + 10, this.position.y - 25, 12, 0, 2 * Math.PI),
        crc2.fill();
      crc2.lineWidth = 1;
      crc2.closePath();
      crc2.stroke();
      crc2.restore();
      //Körper
      crc2.fillStyle = "black";
      crc2.save();
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y - 3, 20, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      //Auge
      crc2.fillStyle = "white";
      crc2.save();
      crc2.beginPath();
      crc2.arc(this.position.x - 8, this.position.y - 5, 3, 0, 2 * Math.PI);
      crc2.fill();
      crc2.closePath();
      //Beine (Vorne)
      crc2.strokeStyle = "black";
      crc2.lineWidth = 3;
      crc2.save();
      crc2.translate(this.position.x, this.position.y + 23);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-10, -15);
      crc2.stroke();
      crc2.restore();
      //
      crc2.save();
      crc2.translate(this.position.x + 15, this.position.y + 23);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(-10, -15);
      crc2.stroke();
      crc2.restore();
      //Beine (Hinten)
      crc2.save();
      crc2.translate(this.position.x - 10, this.position.y + 12);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(0, 12);
      crc2.stroke();
      crc2.restore();
      //
      crc2.save();
      crc2.translate(this.position.x + 5, this.position.y + 12);
      crc2.beginPath();
      crc2.moveTo(0, 0);
      crc2.lineTo(0, 12);
      crc2.stroke();
      crc2.restore();
    }

    // Bug zu dieser Position x,y bewegen
    public move(): void {
      if (!this.vegetable) {
        // nur wenn es eine target Gemüse gibt, ansonsten fliegen sie wie die normalen Bugs
        this.position.x += Math.random() * 5 - 4;
        this.position.y += Math.random() * 6 - 3;
        //wenn sie aus Bild fliegen
        for (let i: number = 0; i < 15; i++) {
          if (this.position.x < 0) {
            // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
            this.position.x = crc2.canvas.width;
          }
          if (this.position.y < 0) {
            // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
            this.position.y = crc2.canvas.height;
          }
          if (this.position.y >= crc2.canvas.height) {
            this.position.y = 0;
          }
        }

        return;
      }
      //normaler weg der bugs
      let xDiff: number = this.xTarget - this.position.x;
      let yDiff: number = this.yTarget - this.position.y;

      this.position.x += xDiff * this.speed;
      this.position.y += yDiff * this.speed;
    }

    //bug an neuer position malen
    public update(): void {
      this.move();
      this.draw();
      this.updateTask();
    }

    //Aufgabe des Bugs ändert sich
    private updateTask(): void {
      switch (this.task) {
        case TASK.IDLE: // wenn du nichts zu tun hast
          // suche volle Gemüse
          this.setRandomVegetablePosition();
          // Gemüse gefunden:
          if (this.vegetable) {
            this.task = TASK.FLY_TO_VEGETABLE; // vlt erst bei Move wenn volle Gemüse gefunden wurde
          }
          break;
        case TASK.FLY_TO_VEGETABLE:
          // Bug bewegt sich zur Gemüse
          this.move();
          // wenn angekommen:
          // Differenz
          let xDiff: number = this.xTarget - this.position.x;
          let yDiff: number = this.yTarget - this.position.y;

          if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
            // wenn sie nah genug dran ist, zieht sie dem Gemüse Reife ab
            this.task = TASK.ABSORB_NECTAR;
          }

          break;
        // case TASK.ABSORB_NECTAR:
        //     // Nectar -= 0.5 --> Gemüse aussaugen
        //     this.absorbNectar();
        //     // wenn voll:
        //     if (this.nectar > 2) { // wenn Nectar > 2 fliegt die Biene zum Bienenstock
        //         this.task = TASK.FLY_TO_BEHIVE;
        //     } else if (this.nectar <= 2) { // wenn Gemüse leer --> IDLE, solange bis Nectar >2 ist
        //         this.task = TASK.IDLE;
        //         this.flower = null; //Biene soll vergessen, dass sie auf Gemüse saß
        //         // this.direction = false;
        //     }
        //     break;
        // case TASK.FLY_TO_BEHIVE:
        //     // Biene fliegt zum Bienenstock
        //     this.setTargetBeehive();
        //     // am Bienenkorb angekommen:
        //     let xDiff2: number = this.xTarget - this.x;
        //     let yDiff2: number = this.yTarget - this.y;
        //     if (Math.abs(xDiff2) < 1 && Math.abs(yDiff2) < 1 && this.x > 1188) {
        //         this.task = TASK.EJECT_NECTAR;
        //     }
        //     break;
        // case TASK.EJECT_NECTAR:
        //     // Wenn am Bienenkorb angekommen: Lässt Nektar fallen
        //     this.ejectNectar();
        //     // sobald fertig:
        //     if (this.nectar < 1) {
        //         this.task = TASK.IDLE;
        //     }
      }
    }

    // Zufällige Position x,y aus dem Gemüsenarray
    private setRandomVegetablePosition(): void {
      let r: number = Math.round(Math.random() * (vegetables.length - 1));

      if (vegetables.length > 0) {

        this.xTarget = vegetables[r].position.x + 10; // an dem Gemüse
        this.yTarget = vegetables[r].position.y;
      }

      this.vegetable = vegetables[r];
    }
  }
}
