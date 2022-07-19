"use strict";
var L09_classes_Beach;
(function (L09_classes_Beach) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            //let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            //this.scale(length);
        }
    }
    L09_classes_Beach.Vector = Vector;
})(L09_classes_Beach || (L09_classes_Beach = {}));
//# sourceMappingURL=Vector.js.map