import express from 'express';
import { addTODo,getAlltodos} from '../controller/todo-controller.js';

const route = express.Router();
  

route.post('/todos',addTODo);
route.get('/todos',getAlltodos);

export default route;