import { Router } from 'express';
import UserController from '../controllers/UserController';

import loquinRequired from '../middlewares/loquinRequired';

const route = new Router();

route.post('/users/store', UserController.store);
route.get('/users/', loquinRequired, UserController.index);
route.get('/users/:id/show', UserController.show);
route.put('/users/:id/update', UserController.update);
route.delete('/users/:id/delete', UserController.delete);

export default route;
