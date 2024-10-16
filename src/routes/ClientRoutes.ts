import { Router, Request, Response } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';
import { ClientRepository } from '../repository/ClientRepository';

const router = Router();
const clientRepo = new ClientRepository();
const clientService = new ClientService(clientRepo);
const clientController = new ClientController(clientService);

// Definir las rutas correctamente
router.post('/', (req: Request, res: Response) => clientController.create(req, res));
//router.get('/:id', (req: Request, res: Response) => clientController.getById(req, res));
//router.put('/:id', (req: Request, res: Response) => clientController.update(req, res));
//router.delete('/:id', (req: Request, res: Response) => clientController.delete(req, res));

export default router;
