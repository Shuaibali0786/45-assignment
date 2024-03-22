// Making a Array of Countries and Print its Orginnal Order 
let countriesToVisit: String[] = ["China", "Demark", 
"Brazil", "Argentina"];

console.log("Orginal Order:", countriesToVisit);

// Print the Array in Alphabetical Order without modifying the Actual Array List 
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its orginal order
console.log("Still in Orgin Order:", countriesToVisit);

// print the array in reversed order without modifying the  actual array list 
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that  the array  is still  in its orginal order
console.log("Still inn Orgial order:", countriesToVisit);

// we have changed orginal array  order now 
console.log("orginal array reversed:",countriesToVisit.reverse());

// Print the array to show that  it's back to its orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// print the array to show thhat its order has been changed in alphhabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());


// we have changed again the  orginal array  order now 
console.log("orginal array reversed:",countriesToVisit.reverse());
