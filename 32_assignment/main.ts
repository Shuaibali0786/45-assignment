// Array of Currrent Users
let current_users = ["Shahnawaz", "Sohail", "Shahzman", "Aftab", "Majeed"]

// Array of New Users
let new_users = ["Ata", "Muneer", "Sohail", "ALi", "Shahzman"]

// Loop through new_users to check for usernames abaibility
new_users.forEach(new_one_user => {

    // Making a Condtion fro username alrady exist and save in our_condition  variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Diffine message usign if_Else statements
    if(our_condition){
  console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This Username ${new_one_user} is availabye`)
    }

})


