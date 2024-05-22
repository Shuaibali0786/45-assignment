// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// Calling a function
make_shirt();
// Calling a function now with medium size and default message
make_shirt("Medum");
// Calling a function now with small size and also different print message 
make_shirt("Small", "I Love JavaScript");
