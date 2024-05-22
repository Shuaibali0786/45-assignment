// original function for clculating the area of a rectangle 
function calculateArea(width, height) {
    return width + height;
}
console.log(calculateArea(4, 4));
// Refactored into an arrow function
var calculateArrow = function (width, height) { return width * height; };
// Exmple usage of the arrow function
console.log(calculateArrow(5, 7)); // Lops the area of the rectangel
