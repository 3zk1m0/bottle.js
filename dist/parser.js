"use strict";
exports.__esModule = true;
exports.Parse = void 0;
var url = require("url");
function Parse(req, res, next) {
    var builder;
    var use = {};
    req.query = url.parse(req.url).query;
    req.statusCode = 200;
    req.response = res;
    res.request = req;
    res.setHeader('x-powered-by', 'bottle.js');
    res.json = function (json) {
        res.setHeader('Content-Type', 'application/json');
        var string = JSON.stringify(json);
        res.end(string);
    };
    res.sendFile = function (filename) {
        var fs = require('fs');
        var filesplit = filename.split('.');
        if (filesplit.length <= 1) {
            res.setHeader('Content-Type', 'text/plain');
            res.end(fs.readFileSync(filename).toString());
        }
        else {
            var filetype = filesplit[filesplit.length - 1];
            if (filetype == 'json') {
                res.setHeader('Content-Type', 'application/json');
                var raw = fs.readFileSync(filename);
                var data = JSON.parse(raw);
                var string = JSON.stringify(data);
                res.end(string);
            }
            else {
                console.log(filetype);
                console.log(filesplit);
                res.setHeader('Content-Type', "text/" + filetype);
                res.end(fs.readFileSync(filename).toString());
            }
        }
    };
    if (req.method) {
        var body_1 = [];
        req.on('data', function (chunk) {
            body_1.push(chunk);
        }).on('end', function () {
            builder = Buffer.concat(body_1).toString();
            var split = builder.split('&');
            for (var i = 0; i < split.length; i++) {
                var parts = split[i].split('=');
                var part = parts[0];
                parts.splice(0, 1);
                var value = parts.join('=');
                use[part] = value;
            }
            req.body = use;
            next(req, res);
        });
    }
    else {
        next(req, res);
    }
}
exports.Parse = Parse;
