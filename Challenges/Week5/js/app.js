var apiURL = "http://pokeapi.co/api/v2/pokemon";
var prevURL = null;
var nextURL = null;

$( document ).ready(function(){
	makeJSONCall(apiURL)
});

$("#next").click(function() {
	makeJSONCall(nextURL);
});

$("#previous").click(function() {
	makeJSONCall(prevURL);
});

$('body').on('click', '.name', function(){
	var pokeURL = $(this).data("url");
	var pokeName = $(this).html();
	$("#dialog").empty();
	getPokeDetails(pokeURL)
	$( "#dialog" ).dialog({
		modal: true,
		title: pokeName
   });
});

function addPokemon(name, url) {
    $(`
        <li class="poke-card">
            <h3 class="name" data-url="${url}">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

function disableBtn(btnID, url)
{
	if (url == null) {
		$(btnID).prop("disabled",true);
	} else {
		$(btnID).prop("disabled",false);
	}
}

function getPokeDetails(url){
	$.getJSON( url, function( json ) {
		var frontSprite = json.sprites.front_default;
		var backSprite = json.sprites.back_default;
		$(`<img src="${frontSprite}" alt="Sprite"><img src="${backSprite}" alt="Sprite">
		
		`).appendTo("#dialog");
	});
}

function makeJSONCall(url){
	$("#pokemon").empty();
	$.getJSON( url, function( json ) {
		$.each(json.results, function(i, item) {
			addPokemon(item.name, item.url);
		});
		prevURL = json.previous;
		disableBtn("#previous", prevURL);
		nextURL = json.next;
		disableBtn("#next", nextURL);
	 });
};

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists


// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  

/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/