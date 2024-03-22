// Creating a Guest List Array
var guestlist = ["Shahnawaz", "Sohail", "Shuaib", "Muneer"];
// Making variable for the guest who can't come
var dontCome = guestlist[0];
// Print the name of the guest who can't come
console.log(dontCome, "Nahi aa sakhty hain");
// Add or Remove from Guest list Array
guestlist.splice(0, 1, "Ammir");
// Message Print for Bigger Table
console.log("Good News! We have found a Bigger Table For Dinner");
// Adding a new value at the starting index of the array
guestlist.unshift("Ali");
// Adding a new value at the ending index of the array
guestlist.push("Zain");
// Making a variable for storing the middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest to the middle index of the array
guestlist.splice(middleIndex, 0, "Osama");
// Print Message of Updated List
console.log("Updated List of our Guests:");
console.log("I am a student from Karachi, Pakistan");
// Sending an invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me?")); });
// Inform that only two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner"));
}
console.log("Invitations to the last 2 Guests:");
guestlist.forEach(function (lasttwo) { return console.log("Luckily, ".concat(lasttwo, ", you are still invited to dinner")); });
// Empty the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
