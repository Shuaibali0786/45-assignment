// Deffine the function to  show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify  array 
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name, " "); });
}
// Deffine an array of magicians names
var magician_names = ["Ata", "Zeeshan", "Sohail"];
// Making a copy of original array through .Slice() function
var copy_magician_nams = magician_names.slice();
// Modify the copid array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_nams);
// Show both array original and copied
// Original 
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
