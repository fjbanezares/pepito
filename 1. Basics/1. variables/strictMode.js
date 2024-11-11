"use strict";
function strictExample() {
    try {
        undeclaredLet = "This will throw an error!";
        console.log(undeclaredLet)
    } catch (error) {
        console.log("Error:", error.message); // Outputs: "undeclaredLet is not defined"
    }
}
strictExample();