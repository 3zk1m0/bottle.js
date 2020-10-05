"use strict";
exports.__esModule = true;
exports.Router = void 0;
var http = require("http");
var url = require("url");
var parser_1 = require("./parser");
var Routing = /** @class */ (function () {
    function Routing() {
        var _this = this;
        this.get = function (path, next) {
            if (_this.paths['GET'][path])
                throw new Error("Duplicate GET pathname: " + path);
            else
                _this.paths['GET'][path] = {
                    method: 'GET',
                    exec: next
                };
        };
        this.post = function (path, next) {
            if (_this.paths['POST'][path])
                throw new Error("Duplicate POST pathname: " + path);
            else
                _this.paths['POST'][path] = {
                    method: 'POST',
                    exec: next
                };
        };
        this.put = function (path, next) {
            if (_this.paths['PUT'][path])
                throw new Error("Duplicate PUT pathname: " + path);
            else
                _this.paths['PUT'][path] = {
                    method: 'PUT',
                    exec: next
                };
        };
        this["delete"] = function (path, next) {
            if (_this.paths['DELETE'][path])
                throw new Error("Duplicate DELETE pathname: " + path);
            else
                _this.paths['DELETE'][path] = {
                    method: 'DELETE',
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
                var method = req.method;
                if (_this.paths[method][path])
                    parser_1.Parse(req, res, _this.paths[method][path].exec);
            }).listen(copy.port, copy.hostname, function () {
                var d = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    d[_i] = arguments[_i];
                }
                if (next)
                    next(d);
            });
        };
        this.paths = {
            GET: {},
            POST: {},
            PUT: {},
            DELETE: {}
        };
    }
    return Routing;
}());
var Router = new Routing();
exports.Router = Router;
