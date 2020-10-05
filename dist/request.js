"use strict";
exports.__esModule = true;
exports.ParseRequest = void 0;
var url = require("url");
function ParseRequest(req) {
    var builder;
    var use = {};
    req.query = url.parse(req.url).query;
    req.statusCode = 200;
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
            return req;
        });
    }
    return req;
}
exports.ParseRequest = ParseRequest;
