var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8]
console.log('answer:',_.without(array, 3));
var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradient");


function colorPick () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ colorOne.value 
	+ "," 
	+ colorTwo.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//we dont need call function cus addEventListener
// automatically ran second parametr w/ event
/*colorOne.addEventListener("input", colorPick);
colorTwo.addEventListener("input", colorPick);*/