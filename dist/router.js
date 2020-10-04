"use strict";
exports.__esModule = true;
exports.Router = void 0;
var http = require("http");
var url = require("url");
var Routing = /** @class */ (function () {
    function Routing() {
        var _this = this;
        this.get = function (path, next) {
            if (_this.paths[path])
                throw new Error("Duplicate pathname: " + path);
            else
                _this.paths[path] = {
                    method: 'GET',
                    exec: next
                };
        };
        this.post = function (path, next) {
            if (_this.paths[path])
                throw new Error("Duplicate pathname: " + path);
            else
                _this.paths[path] = {
                    method: 'POST',
                    exec: next
                };
        };
        this.put = function (path, next) {
            if (_this.paths[path])
                throw new Error("Duplicate PUT pathname: " + path);
            else
                _this.paths[path] = {
                    method: 'PUT',
                    exec: next
                };
        };
        this["delete"] = function (path, next) {
            if (_this.paths[path])
                throw new Error("Duplicate pathname: " + path);
            else
                _this.paths[path] = {
                    method: 'PUT',
                    exec: next
                };
        };
        this.listen = function (options, next) {
            var copy = options;
            if (!copy.port)
                throw new Error('Missing listen PORT');
            if (!copy.hostname)
                copy.hostname = '127.0.0.1';
            http.createServer(function (req, res) {
                var path = url.parse(req.url).pathname;
                if (req.method == _this.paths[path].method)
                    _this.paths[path].exec(req, res);
            }).listen(copy.port, copy.hostname, function () {
                if (next)
                    next;
            });
        };
        this.paths = {};
    }
    return Routing;
}());
var Router = new Routing();
exports.Router = Router;
