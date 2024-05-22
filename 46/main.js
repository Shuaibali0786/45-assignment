// let laptop =  {
//     make: "Dell",
//     modle: "New Elite Series",
//     year: "2024",
//     describe: function (){
//         console.log(`This laptop is a ${this.year} ${this.make} ${this.modle}.`);
//     },
// };
// laptop.describe();
var friendName = {
    name: "Shuaib",
    age: 23,
    education: "BSC",
    City: "Karachi",
    friends: function () {
        console.log("".concat(this.name, " ").concat(this.age, " ").concat(this.education, " ").concat(this.City));
    },
};
friendName.friends();
