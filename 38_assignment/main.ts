// Creating a Fucnction
function describe_city (city: string, county: string = "Pakistan") {
    console.log(`${city} is in ${county}`);
}

// Calling the  fucntion
describe_city("Karachi")

describe_city("Lahore")

describe_city("Karachi", " Sindh");
describe_city("Berline", "Germany");
