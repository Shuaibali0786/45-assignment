// Deffine the function to  show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

// Function to make magicians great through .map() it will modify  array 
function make_great(magicians: string[]){
   return magicians.map(name => ` The Great ${name} `)
}

// Deffine an array of magicians names
let magician_names = ["Ata", "Zeeshan", "Sohail"]

// Making a copy of original array through .Slice() function

let copy_magician_nams = magician_names.slice()

// Modify the copid array to include "The Great" with thier names

let copy_great_magicians = make_great(copy_magician_nams)
// Show both array original and copied

// Original 
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);