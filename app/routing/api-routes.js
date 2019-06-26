//list of "friends"
var friendsList = require("../data/friends")


//ya girl's routes for the friends list
module.exports = function (app) {
    app.get("/api/friends", function (req, res){
        res.json(friendsList)
    });

    app.post("/api/friends", function (req, res){
        if (condition) {
            
        }
    })
};