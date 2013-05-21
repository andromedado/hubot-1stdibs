
var fs = require('fs'),
    Path = require('path');

module.exports = function (robot) {
    var path = Path.resolve(__dirname, 'scripts');
    fs.exists(path, function (exists) {
        if (exists) {
            fs.readdir(path, function (err, files) {
                files.forEach(function (file) {
                    robot.loadFile(path, file);
                });
            });
        }
    });
};
