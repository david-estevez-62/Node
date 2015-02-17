var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

// Calculate the luminosity value from the given rgb
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;

// Print the result to the console
console.log(luminosity);

var darkOrlight = function(){
	if(luminosity > 155){
	return "light";
	}else if(luminosity<156){
		return "dark"
	}
}

console.log(darkOrlight());






// var r = process.argv[2];
// var g = process.argv[3];
// var b = process.argv[4];

// var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;

// var islight = luminosity > 155;

// console.log( islight ? 'light' : 'dark' );

