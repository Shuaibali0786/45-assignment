// Deffine a function to print each magician name from  an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Deffine an array containing magicians name  
let magician_names = ["Shuaib Ali", "Muneer", "Sohail"]

// Calling a function to print each magician name

show_magicians(magician_names)