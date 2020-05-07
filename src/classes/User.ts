import IUser from '../interfaces/IUser';

export default class User implements IUser {

    email: string;
    pass: string;
    repositories: number;
    stars: number;
    nickname: string;

    constructor(email: string, pass: string, repositories: number, stars: number, nickname: string) {
        this.email = email;
        this.pass = pass;
        this.repositories = repositories;
        this.stars = stars;
        this.nickname = nickname;
    }
}