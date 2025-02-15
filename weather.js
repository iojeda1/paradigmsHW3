function toCelsius(){

	// grabs the input from the user
	let input =  document.getElementById("temperature").value;
	// converts the temperature to C
	let celsius = (input - 32) * 5/9;

	if (isNaN(input) || input === "") {
		document.getElementById("result").innerText = "Please input a valid number!"; 
		document.getElementById("result").style.color = "red"; 
		document.getElementById("result").style.fontWeight = "bold"; 
		document.getElementById("result").style.visibility = "visible";
		
		document.getElementById("result-parent").style.visibility = "hidden";
	} else {
	// show back to the user, on the <span> element
		document.getElementById("result").innerText = celsius;
		document.getElementById("result").style.color = "black"; 
		document.getElementById("result").style.fontWeight = "normal"; 
		document.getElementById("result").style.visibility = "visible";
		
		document.getElementById("result-parent").style.visibility = "visible";
	}
	// makes the div visible
	// element.style can be used to change CSS properties of an HTML document
}