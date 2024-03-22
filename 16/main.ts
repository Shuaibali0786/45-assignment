// Creating a Guest List Arry
let guestlist = ["Shahnawaz", "Sohail", "Shuaib", "Muneer"];

// Making varibale for those guest who cant come
let dontCome = guestlist[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi aa sakhty hain");

// Add or Remove from Guest list Arry
guestlist.splice(0, 1, "Ammir");

// Message Print for Bigger Table
console.log("Good News I We have found a Bigger Table For Dinner");

// Adding a new value at starting index of array
guestlist.unshift("Ali")

// Adding a new value at ending  index of arrary
guestlist.push("Zain");

// Maiking a varibale for storing a middle index of our  guest list  array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Osama");

// Print Message of Updated List 
console.log("updated List of our Guests");
console.log("Iam student from karachi pakistan");

// Sending a invitation  message to our guests one by one with  thier names 
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
















