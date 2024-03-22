// Array of corrsent users
let current_users = ["Shahnawaz", "Shuaib", "Sohail", "Muneer", "Zeeshan"];

// Array of new users
let new_users = ["Hamza", "Zain", "Ali", "Aftab", "Majeed"];

// Loops throgh new to  check for osernames abaibility

new_users.forEach(new_user => {
let our_conditional = current_users.some(curent_one_user =>  curent_one_user.toLowerCase()== new_user.toLowerCase())
if(our_conditional){
    console.log(`Sorry ${new_one_user} is already taken`)

}else{
    console.log(`This username ${new_one_user} is abilable`)
}