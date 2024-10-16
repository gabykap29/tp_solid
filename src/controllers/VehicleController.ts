import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService'; 

export class VehicleController {
    private vehicleService: VehicleService;

    constructor(vehicleService: VehicleService) {
        this.vehicleService = vehicleService;
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const vehicle = await this.vehicleService.create(req.body);
            res.status(201).json(vehicle);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    public async getById(req: Request, res: Response): Promise<void> {
        try {
            const vehicle = await this.vehicleService.findById(req.params.id);
            if (!vehicle) {
                res.status(404).send('Vehicle not found');
                return;
            }
            res.status(200).json(vehicle);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const vehicleId = req.params.id;
            const updatedVehicle = await this.vehicleService.update(vehicleId, req.body);
            if (!updatedVehicle) {
                res.status(404).send('Vehicle not found');
                return;
            }
            res.status(200).json(updatedVehicle);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const vehicleId = req.params.id;
            const result = await this.vehicleService.delete(vehicleId);
            if (!result) {
                res.status(404).send('Vehicle not found');
                return;
            }
            res.status(204).send(); // No content
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
