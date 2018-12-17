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