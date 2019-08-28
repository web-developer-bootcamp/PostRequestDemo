var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var friends = ['Tom', 'Sarah', 'Matthew', 'Paul', 'Chris'];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.get("/friends", function (req, res) {
    res.render("friends", {friends: friends});
});

app.get("*", (req, res) => res.send("The page not found................."));
app.listen(3000, () => console.log("Server is started!"));