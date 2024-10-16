import { IVehicle } from '../interfaces/IVehicle';
import { IVehicleRepository } from '../interfaces/IVehicleRepository';

export class MongoVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = []; // Simulación de base de datos

    async create(vehicle: IVehicle): Promise<IVehicle> {
        this.vehicles.push(vehicle);
        return vehicle;
    }

    async findById(id: string): Promise<IVehicle | null> {
        return this.vehicles.find(v => v.id === id) || null;
    }

    async update(id: string, vehicle: IVehicle): Promise<IVehicle | null> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index === -1) return null;
        this.vehicles[index] = vehicle;
        return vehicle;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index === -1) return false;
        this.vehicles.splice(index, 1);
        return true;
    }
}