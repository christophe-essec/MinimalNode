var express = require("express");
var app = express();
app.use(express.static("static"));
app.listen(8985, function(err){
    console.log("My server app is running on port 8985");
});