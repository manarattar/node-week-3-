var express = require('express');
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });



var app = express();
var jsonParser = bodyParser.json()


// Get content from file
 var contents = fs.readFileSync("todolist.json", "utf8");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
 console.log("Lists", jsonContent.tasks);


// Get data from todolist.json file
app.get('/todolist.json',function(request,response){
 response.sendFile(__dirname + '/todolist.json');
 
})

app.listen(8888, function() {
	console.log('Listening on port 8888/todolist.json');
});