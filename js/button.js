const myButton = document.getElementById('myButton');
const myButton = document.getElementById('sneak');

myButton.addEventListener("click", event => {

	if(sneak.style.display == "none"){
		sneak.style.display = "block";
		myButton.textContent = "Hide";
	}
	else{
		sneak.style.display = "none";
		myButton.textContent = "Show"
	}
});