"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = __importDefault(require("../classes/User"));
var users = [
    new User_1.default('guilherme.ocampos@valor.com.br', '123', 1, 1, 'gui.ocampos'),
    new User_1.default('guilherme.ocampos@valor.com.br', '123', 1, 1, 'gui.ocampos'),
];
var routes = express_1.Router();
routes.get('/', function (req, res) {
    return res.json({
        'hello': 'Techtalk!'
    });
});
routes.get('/user/list', function (req, res) {
    res.json(users);
});
routes.post('/user', function (req, res) {
    console.log(req.body);
    var _a = req.body, email = _a.email, pass = _a.pass, repositories = _a.repositories, stars = _a.stars, nickname = _a.nickname;
    console.log(req.body);
    var user = new User_1.default(email, pass, repositories, stars, nickname);
    users.push(user);
    res.json(user);
});
exports.default = routes;
