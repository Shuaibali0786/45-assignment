// // Deffines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array
    hobbies.forEach((hobby) =>{
        console.log(`I enjoy ${hobby},`);
    });
}


// Calls the function wiht  three hoobies
logHobbies("reading", "codding", "cycling");







// My Practice 

function greets(...how: string[]){
    how.forEach((King) => {
        console.log(`King ${King},`)
    });
}


greets("Shuaib Ali", "Shahnawaz Ali", "Muneer Ahmed")
























