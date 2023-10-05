import { Router } from 'express';
import UserController from '../controllers/UserController';

import loquinRequired from '../middlewares/loquinRequired';

const route = new Router();

// Não precisa existir num sistema real (index | show)
route.get('/users/', loquinRequired, UserController.index); // list users
route.get('/users/:id/show', UserController.show); // list user

route.post('/users/store', UserController.store); // create new user
route.put('/users/update', loquinRequired, UserController.update); // update user
route.delete('/users/delete', loquinRequired, UserController.delete); // delete user

export default route;
