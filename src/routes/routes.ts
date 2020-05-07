import { Router } from 'express';
import User from '../classes/User';
import IUser from '../interfaces/IUser';

let users: Array<IUser> = [     
    new User('guilherme.ocampos@valor.com.br', '123', 1, 1, 'gui.ocampos'),     
    new User('guilherme.ocampos@valor.com.br', '123', 1, 1, 'gui.ocampos'),     
]

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({
        'hello': 'Techtalk!'
    })
});

routes.get('/user/list', (req, res) => {
    res.json(users);
});

routes.post('/user', (req, res) => {

    console.log(req.body);

    const {
        email,
        pass,
        repositories,
        stars,
        nickname
    } = req.body;

    console.log(req.body);

    let user = new User(email, pass, repositories, stars, nickname);

    users.push(user);

    res.json(user);
});

export default routes;