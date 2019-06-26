var path = require("path");

module.exports = function (app) {

    //routes to the survey page
    app.get("/api/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //routes to the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};