function getRepos(username){
console.log('Repos for ' + username);
var http = require("https");
var req_options = 
{
	host: 'api.github.com',
	headers: {'User-Agent': 'corbrat89'},
	path: '/users/' + username + '/repos'
};

//connect to the api url
var request = http.get(req_options, function(res){
	var body = "";
	res.on('data', function(chunk){
		body += chunk;
	});
	res.on('end', function(){
		var data = JSON.parse(body);
		for(var key in data) {
			console.log(data[key].name);
		}
	});
});
}


module.exports.getRepos = getRepos;
