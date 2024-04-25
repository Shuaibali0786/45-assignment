// Deffine a function to create a car object with optional options...
function creat_car(manufacture, modle) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a cr object with manufacturer and modle
    var car = {
        manufacture: manufacture,
        modle: modle,
    };
    // add additional option to  the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = creat_car("Toyota", "Corrolla", "Collor: Black", "Sunroof: True");
// Print the variable to ensure all the infomation is stored correctly inthe car object
console.log(my_car);
