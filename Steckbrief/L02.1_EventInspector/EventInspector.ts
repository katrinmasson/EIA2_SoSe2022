namespace eventListener {
    window.addEventListener("load", handleLoad);

    let infoBox: HTMLSpanElement = document.createElement("span");

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        // div left
        let box0: HTMLDivElement = <HTMLDivElement>document.getElementById("div0");
        box0.addEventListener("keyup", logInfo);
        // div right
        let box1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
        box1.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        //span
        document.body.appendChild(infoBox);
        //mouseposition + 10 = distance between the mouse and span 
        let x: number = _event.clientX + 10;
        let y: number = _event.clientY + 10;
        //text in span
        let koordinaten: string = "Deine aktuellen Koordianten sind: " + x + ", " + y;
        infoBox.innerHTML = koordinaten;
        //transform number to string
        let xString: string = x.toString();
        let yString: string = y.toString();
        // style: span follows mouse
        infoBox.style.left = xString + "px";
        infoBox.style.top = yString + "px";
    }

    function logInfo(_event: Event): void {
        //event's type: click/keyup
        let types: string = _event.type;
        console.log("Type: ", types);
        //event's target: body/div/h1
        let names: EventTarget = <EventTarget>_event.target; //<EventTarget> = zeigt an, dass man mit dem Typen sicher ist!
        console.log("You clicked: ", names);
        //event's currentTarget
        let currentNames: EventTarget = <EventTarget>_event.currentTarget;
        console.log("currentTarget: ", currentNames);
        //event object
        let object: Event = _event;
        console.log("Object: ", object);
    }
}