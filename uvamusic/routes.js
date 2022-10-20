import express from 'express';
import { getMusics, deleteMusic, createMusic, searchMusic } from './src/functions/groups/index.js';

export const routes = express.Router();

routes.get('/getmusic', getMusics);
routes.post('/', createMusic);
routes.post('/search', searchMusic);
routes.delete('/:groupId', deleteMusic);
