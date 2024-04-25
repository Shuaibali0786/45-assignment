// Diffine the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let ablum: {artisth: string, title: string, tracks?: number} ={
        artisth: artist_name,
        title: album_title,

    };


    if (tracks !== undefined){
     ablum.tracks = tracks;
    }

  return ablum;



}

// Calling three function and creating 3 variables with different values

let ablum1 = make_album("Shuaib", "Ablum title 1")

let ablum2 = make_album("Muneer", "Album title 2");

// Calling a make_album function with third parameter

let ablum3 = make_album("Sohail", "Abbum title 3", 10)

// Print values of our object created my function

console.log(ablum1);
console.log(ablum2);
console.log(ablum3);
