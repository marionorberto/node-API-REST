/* eslint-disable eol-last */
import express from 'express';
import { join } from 'path';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(join(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use(userRoutes);
    this.app.use(tokenRoutes);
  }
}

export default new App().app;
