// Deffine a function to create a car object with optional options...
function creat_car(manufacture, modle, ...options) {
// Initialize a cr object with manufacturer and modle
let car = {
    manufacture: manufacture,
    modle: modle,

};
// add additional option to  the car object
options.forEach(option  => {
    let [key, value] = option.split(":")
    car[key.trim()] = value.trim(); 
});
return car; 
}

// Call the function to create a car object
let my_car = creat_car("Toyota", "Corrolla", "Collor: Black", "Sunroof: True");

// Print the variable to ensure all the infomation is stored correctly inthe car object
console.log(my_car);