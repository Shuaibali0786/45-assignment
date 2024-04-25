// Define a function with a rest parameter that accept items arugments representing our sandwich
function make_Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n")
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now Enjoy Sandwich");
}

// Call the function 3 times with 3 defferent number of arguments
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg")

make_Sandwich("Bread", "Butter");

make_Sandwich("Bread", "Tomato", "cheese", "Mayo", "Tika");