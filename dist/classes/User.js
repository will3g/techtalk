"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, pass, repositories, stars, nickname) {
        this.email = email;
        this.pass = pass;
        this.repositories = repositories;
        this.stars = stars;
        this.nickname = nickname;
    }
    return User;
}());
exports.default = User;
