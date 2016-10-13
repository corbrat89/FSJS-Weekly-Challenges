var github = require("./github");
var users = process.argv.slice(2);
users.forEach(github.getRepos);