//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume
function box(){
	this.height = 0;
	this.width = 0;
	this.volume = 0;
	
	this.adjust = function (adjustment, value)
	{
		if(this[value] == 0 && adjustment == -1){
			alert(value + " cannot be negative");
		}
		else {
			this[value] += adjustment;
		}
	};
	
	this.print = function(){
		return JSON.stringify(this, null, 4);
	};
}

var myBox = new box();

//leverage data attributes to make only one function instead of one per button
$('body').on('click', '.change', function() {
	myBox.adjust($(this).data("adjust"), $(this).data("value"));
	$("#Print").click();
});

$("#Print").click(function(){
	$("#output").empty();
	var str = myBox.print();
	$("#output").append(str);
});