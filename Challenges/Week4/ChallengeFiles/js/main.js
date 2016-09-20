$('#menu a').click(function(){ 
	//split id to get last part for openBlock
	var linkIDParts = this.id.split("_");
	openBlock(linkIDParts[2]); 
	return false; 
});

function openBlock (id) {    
	$("#main_content div").hide();
	$("#"+id).show();
	
    // TODO: remove the "active" class from all of the li elements inside the menu
    $("#menu li").removeClass("active");
	// TODO: add the "active" class to the li element that contains the link that was clicked
	$("#menu_item_"+id).parent().addClass("active");
}

// TODO: add the "hover" class to the menu items when you hover over them
$("#menu a").hover(function() {
	$(this).toggleClass("hover");
});

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
    delay: 1000
});
