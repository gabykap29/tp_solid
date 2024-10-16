import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleService } from '../services/VehicleService'; 
import { MongoVehicleRepository } from '../repository/VehicleRepository';

const router = Router();
const vehicleRepo = new MongoVehicleRepository();
const vehicleService = new VehicleService(vehicleRepo);
const vehicleController = new VehicleController(vehicleService);

// Definir las rutas
router.post('/', (req, res) => vehicleController.create(req, res));
router.get('/:id', (req, res) => vehicleController.getById(req, res));
router.put('/:id', (req, res) => vehicleController.update(req, res));
router.delete('/:id', (req, res) => vehicleController.delete(req, res));

export default router;
