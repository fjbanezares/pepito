function house() {
    let hallwayLight = "ON";
    if (true) {
        let kitchenLight = "OFF";
        console.log(kitchenLight + " inside the innerblock"); // Outputs: "ON"

        console.log(hallwayLight + " inside the innerblock"); // Outputs: "ON"
    }
    console.log(hallwayLight); // Outputs: "ON"
    // console.log(kitchenLight + " outside the innerblock"); // will crash Uncaught ReferenceError ReferenceError: kitchenLight is not defined


}
house();
