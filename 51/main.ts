// original function for clculating the area of a rectangle 

function calculateArea (width: number, height: number) : number{
    return width + height;
}


console.log(calculateArea(4, 4));
// Refactored into an arrow function
let calculateArrow = (width: number, height: number): number => width * height;


// Exmple usage of the arrow function

console.log(calculateArrow(5, 7)); // Lops the area of the rectangel