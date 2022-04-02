"use strict";
var eventListener;
(function (eventListener) {
    window.addEventListener("load", handleLoad);
    let infoBox = document.createElement("span");
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        // div left
        let box0 = document.getElementById("div0");
        box0.addEventListener("keyup", logInfo);
        // div right
        let box1 = document.getElementById("div1");
        box1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        //span
        document.body.appendChild(infoBox);
        //mouseposition + 10 = distance between the mouse and span 
        let x = _event.clientX + 10;
        let y = _event.clientY + 10;
        //text in span
        let koordinaten = "Deine aktuellen Koordianten sind: " + x + ", " + y;
        infoBox.innerHTML = koordinaten;
        //transform number to string
        let xString = x.toString();
        let yString = y.toString();
        // style: span follows mouse
        infoBox.style.left = xString + "px";
        infoBox.style.top = yString + "px";
    }
    function logInfo(_event) {
        //event's type: click/keyup
        let types = _event.type;
        console.log("Type: ", types);
        //event's target: body/div/h1
        let names = _event.target; //<EventTarget> = zeigt an, dass man mit dem Typen sicher ist!
        console.log("You clicked: ", names);
        //event's currentTarget
        let currentNames = _event.currentTarget;
        console.log("currentTarget: ", currentNames);
        //event object
        let object = _event;
        console.log("Object: ", object);
    }
})(eventListener || (eventListener = {}));
//# sourceMappingURL=EventInspector.js.map