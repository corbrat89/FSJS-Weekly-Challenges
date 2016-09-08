//create function
 function sayHello()
 {
	var userInput = prompt("Hello there!").toLowerCase();
	//because capitalism isn't cool
	if (userInput == "hello"){
		return "Hello World";
	}
	else {
		return "Well thats not very friendly to not say hello";
	}
 }

//Call function
var output = sayHello();
//Alert user results
alert(output);