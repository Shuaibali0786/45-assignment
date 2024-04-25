// Array of Currrent Users
var current_users = ["Shahnawaz", "Sohail", "Shahzman", "Aftab", "Majeed"];
// Array of New Users
var new_users = ["Ata", "Muneer", "Sohail", "ALi", "Shahzman"];
// Loop through new_users to check for usernames abaibility
new_users.forEach(function (new_one_user) {
    // Making a Condtion fro username alrady exist and save in our_condition  variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Diffine message usign if_Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is availabye"));
    }
});
