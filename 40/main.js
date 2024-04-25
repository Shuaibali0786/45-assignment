// Diffine the make_album function
function make_album(artist_name, album_title, tracks) {
    var ablum = {
        artisth: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        ablum.tracks = tracks;
    }
    return ablum;
}
// Calling three function and creating 3 variables with different values
var ablum1 = make_album("Shuaib", "Ablum title 1");
var ablum2 = make_album("Muneer", "Album title 2");
// Calling a make_album function with third parameter
var ablum3 = make_album("Sohail", "Abbum title 3", 10);
// Print values of our object created my function
console.log(ablum1);
console.log(ablum2);
console.log(ablum3);
