let userName = ["Shahnawaz", "Sohail", "Shuaib", "Muneer", "Zeeshan"];

userName = []

if (userName.length === 0){
    console.log("your array in empty we need to fing some users!")
}else{
    userName.forEach(onUser =>{
        if (onUser === "Sohail"){
            console.log(`Hello ${onUser}, would you like to see a status report?`)
        }{
            console.log(`Hello ${onUser}, thank you for logging in again`)
        }
    })
}