// Creating a Fucnction
function describe_city(city, county) {
    if (county === void 0) { county = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(county));
}
// Calling the  fucntion
describe_city("Karachi");
describe_city("Lahore");
describe_city("Karachi", " Sindh");
describe_city("Berline", "Germany");
