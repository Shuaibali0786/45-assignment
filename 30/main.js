// Creating a Array
var userNaem = ["Shuaib", "Shahnawaz", "Sohail", "Admin", "Muneer"];
// Using ForEach Loop On Array
userNaem.forEach(function (onUser) {
    if (onUser === "Sohail") {
        console.log("Hello ".concat(onUser, ", would you like to see a status report?"));
    }
    {
        console.log("Hello ".concat(onUser, ", thank you for logging in again"));
    }
});
