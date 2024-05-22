let laptop =  {
    make: "Dell",
    modle: "New Elite Series",
    year: "2024",
    describe: function (){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.modle}.`);
    },
};

laptop.describe();



